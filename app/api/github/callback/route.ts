import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";
import { saveInstallation } from "@/features/github/server/installation";
import { getServerSession } from "@/features/auth/actions";
import { redirect } from "next/navigation";

function builtSignInCallbackUrl(installationId: string|null){
    if (installationId){
        return `api/github/callback?installation_id=${installationId}`
    }

    return DASHBOARD_ROUTES.github;
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    // new URL() parses the request url as a url and makes a object which has:
    // parsedUrl.protocol   // "https:"
    // parsedUrl.hostname   // "example.com"
    // parsedUrl.pathname   // "/api/repos"
    // parsedUrl.search     // "?page=2&sort=stars"
    // parsedUrl.searchParams
    // we are destructuring it to get search params, in which we can use .get to get a specific search parameter.
    
    const installationId = searchParams.get("installation_id")
    const session = await getServerSession();

    if (!session) {
        const callbackUrl = builtSignInCallbackUrl(installationId);
    }

    if (installationId) {
        await saveInstallation(session!.user.id, Number(installationId))
    }

    redirect(DASHBOARD_ROUTES.github)
}