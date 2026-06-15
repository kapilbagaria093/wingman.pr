import { requireAuthenticatedUser } from "@/features/auth/actions";

export default async function ProtectedLayout({
    children
}: { children: React.ReactNode }){
    await requireAuthenticatedUser();

    return (
        <div className="min-h-svh">
            {children}
        </div>
    )
}   
 