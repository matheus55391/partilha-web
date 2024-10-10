import { HandshakeIcon } from "lucide-react";
import Link from "next/link";
import { UserDropdown } from "../user-dropdown";

type DashboardLayoutProps = {
    children: React.ReactNode;
};
export function DashboardLayout({ children }: DashboardLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <Link
                        href="#"
                        className="flex items-center justify-center space-x-2"
                        prefetch={false}
                    >
                        <HandshakeIcon className="h-6 w-6 hover:animate-bounce" />
                        <span className="text-2xl font-black">Partilha</span>
                    </Link>
                    <UserDropdown />
                </div>
            </header>
            {children}
        </div>
    );
}
