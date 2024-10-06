import GuestGuard from "@/components/guards/guest-guard";
import { LoginButton } from "@/components/login-button";
import { HandshakeIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
    return (
        <GuestGuard>
            <div className="flex flex-col min-h-[100dvh] bg-background">
                <header className="px-4 lg:px-6 h-14 flex items-center">
                    <Link
                        href="#"
                        className="flex items-center justify-center space-x-2"
                        prefetch={false}
                    >
                        <HandshakeIcon className="h-6 w-6 hover:animate-bounce" />
                        <span className="text-2xl font-black">Partilha</span>
                    </Link>
                    <nav className="ml-auto flex gap-4 sm:gap-6">
                        <Link
                            href="#"
                            className="text-sm font-medium hover:underline underline-offset-4"
                            prefetch={false}
                        >
                            Contato
                        </Link>
                    </nav>
                </header>
                <main className="flex-1 flex flex-col justify-center items-center px-4 md:px-6 py-12 md:py-24 lg:py-32 xl:py-48 space-y-6">
                    <div className="max-w-3xl text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Divida suas despesas de forma fácil com amigos
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl">
                            Partilha é uma plataforma gratuita que simplifica o
                            controle de contas e despesas compartilhadas,
                            garantindo reembolsos justos para todos.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <LoginButton />
                    </div>
                </main>

                <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-xs text-muted-foreground">
                        &copy; 2024 Partilha. Todos os direitos reservados.
                    </p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link
                            href="#"
                            className="text-xs hover:underline underline-offset-4"
                            prefetch={false}
                        >
                            Termos de Serviço
                        </Link>
                        <Link
                            href="#"
                            className="text-xs hover:underline underline-offset-4"
                            prefetch={false}
                        >
                            Privacidade
                        </Link>
                    </nav>
                </footer>
            </div>
        </GuestGuard>
    );
}
