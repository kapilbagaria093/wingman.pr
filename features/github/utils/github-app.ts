// here we create a singleton instance of a github application
import { App } from 'octokit'

let githubApp: App | null = null;

export function getGithubApp() {
    if (!githubApp) {
        githubApp = new App({
            appId: process.env.GITHUB_APP_ID!,
            privateKey: process.env.GITHUB_APP_PRIVATE_KEY!.replace(/\\n/g, "\n"),
            webhooks: {
                secret: process.env.GITHUB_WEBHOOK_SECRET!
            }
        });
    }

    return githubApp;
}

export function getGithubInstallUrl(userId: string) {
    const url = new URL(`${process.env.NEXT_PUBLIC_GITHUB_PUBLIC_LINK}/installations/new`);
    url.searchParams.set("state", userId);
    // the above line: we pass the userId in the state parameter so that when the user installs the app, we can associate the installation with the user who installed it. This is a common practice when implementing OAuth flows, as it allows us to maintain state between the initial request and the callback from GitHub after installation.
    // so, it will set a parameter like this: ?state=12345 (where 12345 is the userId) in the installation URL. Then, when GitHub redirects back to our app after the installation, it will include this state parameter, allowing us to identify which user initiated the installation process.

    return url.toString();
}