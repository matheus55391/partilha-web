import AuthGuard from "@/components/guards/auth-guard";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <AuthGuard>
            {children}
        </AuthGuard>
    );
}
