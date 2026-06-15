import { requireAuthenticatedUser } from "@/features/auth/actions";
import { DashboardShell } from "@/features/dashboard/components/dashboard-shell";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requireAuthenticatedUser();

  return (
    <DashboardShell user={session.user} plan="Pro">
        {children}
    </DashboardShell>
  )
}