// this is a proxy, so it is mostly used for redirection. nothing much.

import type { NextRequest } from "next/server";
import { handleAuthProxy } from "./features/auth/utils/auth-proxy";

export async function proxy(request: NextRequest){
    return handleAuthProxy(request);
}

// we dont want proxy to be applied everywhere
export const config = {
    matcher: ["/sign-in", "/dashboard", "/dashboard/:path"]
    // we configure that, only these paths are worth a session lookup, so proxy can be added here only.
    // we are limiting the number of paths that can run middlewares.
}