"use client";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HandshakeIcon, ListIcon, Loader2, PlusIcon } from "lucide-react";
import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useFirebaseUser from "@/hooks/firebase/use-firebase-user";
import useLogout from "@/hooks/firebase/use-logout";
export default function DashboardPage() {
    const { user } = useFirebaseUser();
    const { logout, loading } = useLogout();
    return (
        <div className="flex flex-col min-h-screen ">
            <header className="px-4 lg:px-6 h-14 flex items-center border-b-[1px] ">
                <Link
                    href="#"
                    className="flex items-center justify-center space-x-2"
                    prefetch={false}
                >
                    <HandshakeIcon className="h-6 w-6 hover:animate-bounce" />
                    <span className="text-2xl font-black">Partilha</span>
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="rounded-full ml-auto w-8 h-8 items-center overflow-hidden "
                        >
                            <Avatar>
                                <AvatarImage
                                    src={user?.photoURL as string}
                                    alt={user?.displayName as string}
                                    className="w-8 h-8 m-auto"
                                />
                                <AvatarFallback>
                                    {user?.displayName}
                                </AvatarFallback>
                            </Avatar>
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Perfil</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => logout()}>
                            <Button
                                className="w-full h-8 "
                                variant={"destructive"}
                            >
                                {loading && (
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                )}
                                <span>{loading ? "Cerrando..." : "Sair"}</span>
                            </Button>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </header>

            <div className="flex flex-1">
                <aside className="hidden sm:block w-64 p-4  ">
                    <nav className="space-y-1">
                        <Link
                            href="#"
                            className=" flex flex-row items-center font-bold"
                            prefetch={false}
                        >
                            <ListIcon className="mr-2 h-4 w-4 " color="black" />
                            Todas as despesas
                        </Link>

                        <div className="mt-4">
                            <div className="flex items-center justify-between hover:cursor-pointer">
                                <h2 className="font-semibold  ">Grupos</h2>
                                <div className="flex items-center space-x-1">
                                    <PlusIcon
                                        className="h-4 w-4 "
                                        color="black"
                                    />
                                    <span className="text-sm">Adicionar</span>
                                </div>
                            </div>
                            <div className="px-2">
                                <Link
                                    href="#"
                                    className="block"
                                    prefetch={false}
                                >
                                    Simpa 2024
                                </Link>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex items-center justify-between hover:cursor-pointer">
                                <h2 className="font-semibold  ">Amigos</h2>
                                <div className="flex items-center space-x-1">
                                    <PlusIcon
                                        className="h-4 w-4 "
                                        color="black"
                                    />
                                    <span className="text-sm">Adicionar</span>
                                </div>
                            </div>
                            <div className="px-2">
                                <Link
                                    href="#"
                                    className="block"
                                    prefetch={false}
                                >
                                    Emerson
                                </Link>
                            </div>
                        </div>
                    </nav>
                </aside>
                <main className="flex-1 p-6 ">
                    <header className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-bold">
                            Todas as despesas
                        </h2>
                        <div className="flex items-center space-x-2">
                            <Button>Adicionar despesa</Button>
                            <Button variant="secondary">Quitar contas</Button>
                        </div>
                    </header>
                    <section>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b pb-2">
                                <div className="flex items-center space-x-2">
                                    <span className="font-medium">SET</span>
                                    <span className="font-bold">24</span>
                                    <span className="text-sm text-muted-foreground">
                                        Agiotagem e outros pecados...
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="block font-medium">
                                        BRL1000.00
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        Emerson S. pagou
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-between items-center border-b pb-2">
                                <div className="flex items-center space-x-2">
                                    <span className="font-medium">SET</span>
                                    <span className="font-bold">22</span>
                                    <span className="text-sm text-muted-foreground">
                                        Uber casa
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="block font-medium">
                                        BRL30.00
                                    </span>
                                    <span className="text-sm text-muted-foreground">
                                        Emerson S. pagou
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <aside className="w-64 p-4 hidden sm:block">
                    <div className="mb-4">
                        <h2 className="text-lg font-bold">Seu saldo total</h2>
                        <p className="text-3xl font-bold text-primary">
                            devem a você BRL261.18
                        </p>
                    </div>
                </aside>
            </div>
            <footer className="border-t-[1px] p-4 flex justify-between items-center">
                <div>&copy; 2024 Partilha. All rights reserved.</div>
                <nav className="flex gap-4">
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Privacy
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Terms
                    </Link>
                    <Link href="#" className="hover:underline" prefetch={false}>
                        Contact
                    </Link>
                </nav>
            </footer>
        </div>
    );
}
