import { GithubInstallationStatus } from "@/features/dashboard/lib/types";
import { getGithubApp } from "../utils/github-app";
import { prisma } from "@/lib/db";
import { getServerSession } from "@/features/auth/actions";
import { redirect } from "next/navigation";
import { DASHBOARD_ROUTES } from "@/features/dashboard/lib/routes";

// the below function is used to get the installation status of the github app for a given userId. It checks if the user has installed the github app and returns the installation status along with the account login and installation date.
// slug is used for organizations, while login is used for individual users as per the github api. So, we check for both and return the one that is available.
function getAccountLogin(
    account: { login?: string, slug?: string } | null | undefined
): string | null {
    if (!account) {
        return null;
    }

    if ("login" in account && account.login) {
        return account.login;
    }

    if (account.slug) {
        return account.slug;
    }

    return null;
}

function buildDisconnectedStatus(): GithubInstallationStatus{
    return { connected: false, accountLogin: null, installedAt: null }
}

export async function getInstallationStatus(userId: string): Promise<GithubInstallationStatus> {
    const installation = await prisma.githubInstallation.findUnique({
        where: {
            userId
        }
    });

    if (!installation) {
        return buildDisconnectedStatus();
    }

    return {
        connected: true,
        accountLogin: installation.accountLogin,
        installedAt: installation.createdAt.toISOString()
    }
}

export async function saveInstallation(userId: string, installationId: number) {
    const app = getGithubApp();

    const { data } = await app.octokit.request(
        "GET /app/installations/{installation_id}", 
        { installation_id: installationId }
    )

    const accountLogin = getAccountLogin(data.account);

    // upsert: if already there, update, otherwise insert
    await prisma.githubInstallation.upsert({
        where:{ userId },
        create:{
            userId,
            installationId,
            accountLogin,
            accountType: data.target_type ?? null
        },
        update:{
            // userid pehle se hogi
            installationId,
            accountLogin,
            accountType: data.target_type ?? null
        },
    })
}

export async function deleteInstallation(userId: string) {
    await prisma.githubInstallation.delete({where: {userId}})
}

export async function getUserIdByInstallationId(installationId: number) {
    const instalation = await prisma.githubInstallation.findFirst({
        where: {installationId},
        select: { userId: true }
    });

    if (!instalation) return null;

    return instalation.userId;
}