"use server"

import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { redirect } from "next/navigation"
import { DEFAULT_AUTH_CALLBACK, getSafeCallbackPath, SIGN_IN_PATH } from "../utils"


export async function signInWithGithub(formData: FormData) {
    const callback = formData.get("callbackUrl");

    const redirectTo = getSafeCallbackPath(
        typeof callback === 'string' ? callback : null
    );
    
    const result = await auth.api.signInSocial({
        body: {
            provider: "github",
            callbackURL: redirectTo
        },
        headers: await headers()
    })

    if (result.url) {
        redirect(result.url)
    }
}

// server actions: WHICH ARE "SESSION HELPERS"
export async function getServerSession() {
    return auth.api.getSession({
        headers: await headers()
    })
}

// if user doesnt have a session, redirect to login page
export async function requireAuthenticatedUser(redirectTo = SIGN_IN_PATH) {
    const session = await getServerSession();

    if (!session) {
        redirect(redirectTo);
    }

    return session
}

// if user has a session, redirect to dashboard/defaultcallback
export async function requireUnauthenticatedUser(redirectTo = DEFAULT_AUTH_CALLBACK) {
    const session = await getServerSession();

    if (session) {
        redirect(redirectTo);
    }
}