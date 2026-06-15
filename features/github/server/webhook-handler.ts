import { json } from "better-auth";
import { getGithubApp } from "../utils/github-app";
import { savePullRequest } from "@/features/reviews/server/save-pull-request";

const REVIEWABLE_ACTIONS = ['opened', 'synchronize', 'reopened'];

export type PullRequestWebhookPayload = {
    action: string,
    installation: { id: number },
    repository: { full_name: string },
    pull_request: {
        number: number,
        title: string,
        user: { login: string } | null,
        head: { sha: string },
        base: { ref: string },
    };
};

async function isSignatureValid(payload: string, signature: string|null) {
    if (!signature) {
        return false;
    }

    const app = getGithubApp()
    return app.webhooks.verify(payload, signature)
}

export async function handleGithubWebhook(request: Request){
    const payload = await request.text();
    const signature = request.headers.get("x-hub-signature-256");
    const eventName = request.headers.get("x-github-event");

    const isValid = await isSignatureValid(payload, signature);

    if (!isValid) {
        Response.json({ error: "invalid signature..."}, { status: 401 })
    }

    if (eventName !== "pull_request") {
        return Response.json({ received: true });
    }

    const event = JSON.parse(payload) as PullRequestWebhookPayload;

    console.log("event: ", event)

    if (!REVIEWABLE_ACTIONS.includes(event.action)) {
        return Response.json({ received: true })
    }

    const pullRequest = await savePullRequest(event);

    // todo: add- map github's installation id
    // todo: trigger review job, which doesnt exist rn.

    return Response.json({ received: true })
}

/////// random stuff