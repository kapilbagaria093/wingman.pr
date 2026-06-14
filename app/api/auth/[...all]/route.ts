import { auth } from "@/lib/auth"; // path to your auth file
import { toNextJsHandler } from "better-auth/next-js";

// we are exposing 2 handlers - post get
export const { POST, GET } = toNextJsHandler(auth);