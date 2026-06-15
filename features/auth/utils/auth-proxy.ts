import { auth } from "@/lib/auth";
import { getSafeCallbackPath, SIGN_IN_PATH } from "./index";
import { NextRequest, NextResponse } from "next/server";

// function 1: redirect to sign-in
// this function builds a redirect response to the sign-in page. this will also preserve the intended destination
// this function is used for: unauthenticated users trying to access protected routes. it ensures that after signing in, users are redirected back to their original destination. {ouuuuu, makes sense!!}
function redirectToSignIn(request: NextRequest, pathname: string){
    const signInUrl = new URL(SIGN_IN_PATH, request.url);
    // this line, adds a query parameter to the sign-in URL, which contains the original destination (pathname + any search parameters). this allows the app to redirect users back to their intended page after they successfully sign in.
    // new URL is used to create a URL object based on the SIGN_IN_PATH and the current request URL. then, searchParams.set is used to add the callbackUrl parameter to the sign-in URL, which contains the original destination (pathname + any search parameters).
    // this is needed because when an unauthenticated user tries to access a protected route, we want to redirect them to the sign-in page, but we also want to remember where they were trying to go so that after they sign in, we can send them there instead of just the homepage or dashboard.
    // URL is a built-in JavaScript class that provides an easy way to parse and manipulate URLs. in this case, we create a new URL object for the sign-in page, and then we use the searchParams property to add a query parameter called callbackUrl, which contains the original destination (pathname + any search parameters). this way, when the user is redirected to the sign-in page, we can read this callbackUrl parameter and redirect them back to their intended destination after they successfully sign in.

    // is this why we built getSafeCallbackPath? because we want to ensure that the callbackUrl is safe and not malicious? yes, exactly! getSafeCallbackPath is used to validate the callback URL to prevent open redirect vulnerabilities. it checks if the callback URL starts with a single slash (indicating it's a relative path within the same domain) and does not start with double slashes (which could indicate an absolute URL pointing to a different domain). if the callback URL is deemed unsafe, it defaults to a predefined safe path (DEFAULT_AUTH_CALLBACK).

    signInUrl.searchParams.set(
        "callbackUrl",
        `${pathname}${request.nextUrl.search}`
    );
    return NextResponse.redirect(signInUrl);
}

// this is a middleware that gets the callback url from query params.
// yes. the same callbackUrl that we set in the above function.
// also, doesnt return the url directly, but checks whether the callback url is safe or malicious (some url put manually in query or smth...) using the function we built: getsafecallbackpath()
function getPostAuthRedirectPath(request: NextRequest): string {
    const callbackUrl = request.nextUrl.searchParams.get('callbackUrl');
    return getSafeCallbackPath(callbackUrl);
}

// now we build the main auth handler

// configs: '/' is always a public path -- landing page or smth
//          signin page: logged in user will be redirected away; guests can proceed
//          authenticated user may proceed further

export async function handleAuthProxy(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // if its a homepage, you can simply send the user to it, and its a middleware, so next() used, like in js
    if (pathname === '/') return NextResponse.next();

    const session = await auth.api.getSession({
        headers: request.headers
    })

    if (pathname === SIGN_IN_PATH){
        if (session) {
            const redirectPath = getPostAuthRedirectPath(request);
            return NextResponse.redirect(new URL(redirectPath, request.url))
            // new URL(redirectPath, request.url): this line creates a new URL object for the redirect path. the redirectPath is the safe callback URL that we extracted from the query parameters. by passing request.url as the second argument, we ensure that the redirectPath is resolved relative to the current request URL, which helps prevent open redirect vulnerabilities. this way, if the user is already authenticated and tries to access the sign-in page, they will be redirected to their intended destination instead of being allowed to access the sign-in page again.
            // for example: if the user tries to access /dashboard, but they are not authenticated, they will be redirected to /sign-in?callbackUrl=/dashboard. after they sign in successfully, the getPostAuthRedirectPath function will extract the callbackUrl from the query parameters, validate it using getSafeCallbackPath, and then redirect them back to /dashboard.
        }

        return NextResponse.next();
    }

    if (!session) {
        return redirectToSignIn(request, pathname)
    }

    NextResponse.next();
}