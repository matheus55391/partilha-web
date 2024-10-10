import AuthGuard from "@/components/guards/auth-guard";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthGuard>
            <DashboardLayout>
              {children}
            </DashboardLayout>
        </AuthGuard>
    );
}
