export const SIGN_IN_PATH = "/sign-in"
export const DEFAULT_AUTH_CALLBACK = "/dashboard"

// checks for malicious callbacks... if callback is malicious it will return default callback
export function getSafeCallbackPath(
    callbackUrl: string | null | undefined
) {
    if (callbackUrl?.startsWith("/") && !callbackUrl.startsWith("//")){
        return callbackUrl;
    }
    return DEFAULT_AUTH_CALLBACK;
}
