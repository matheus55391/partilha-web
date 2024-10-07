"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    ChevronRight,
    HandshakeIcon,
    LogOut,
    PlusCircle,
    Settings,
    User,
} from "lucide-react";
import useFirebaseUser from "@/hooks/firebase/use-firebase-user";
import useLogout from "@/hooks/firebase/use-logout";
import Link from "next/link";

export default function Dashboard() {
    const { user } = useFirebaseUser();
    const { logout, loading } = useLogout();
    const [totalBalance, setTotalBalance] = useState(150.75);
    const [groups, setGroups] = useState([
        { id: 1, name: "Apartamento", balance: 75.5, members: 3 },
        { id: 2, name: "Viagem de Férias", balance: -25.0, members: 5 },
        { id: 3, name: "Jantar de Sexta", balance: 35.25, members: 4 },
    ]);
    const [contacts, setContacts] = useState([
        { id: 1, name: "Ana Silva", balance: 50.0 },
        { id: 2, name: "Carlos Oliveira", balance: -30.5 },
        { id: 3, name: "Mariana Santos", balance: 20.25 },
    ]);

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
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="relative h-8 w-8 rounded-full"
                            >
                                <Avatar className="h-8 w-8">
                                    <AvatarImage
                                        src={
                                            user?.photoURL ||
                                            "/placeholder-user.jpg"
                                        }
                                        alt="@user"
                                    />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            className="w-56"
                            align="end"
                            forceMount
                        >
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">
                                        {user?.displayName}
                                    </p>
                                    <p className="text-xs leading-none text-muted-foreground">
                                        {user?.email}
                                    </p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <User className="mr-2 h-4 w-4" />
                                <span>Perfil</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Configurações</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                className="cursor-pointer"
                                onClick={() => logout()}
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Sair</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Card className="mb-8">
                    <CardHeader>
                        <CardTitle>Saldo Total</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p
                            className={`text-4xl font-bold ${
                                totalBalance >= 0
                                    ? "text-green-600"
                                    : "text-red-600"
                            }`}
                        >
                            {totalBalance >= 0 ? "+" : "-"}R${" "}
                            {Math.abs(totalBalance).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            {totalBalance >= 0 ? "Você receberá" : "Você deve"}
                        </p>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Grupos</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[300px]">
                                {groups.map((group) => (
                                    <div
                                        key={group.id}
                                        className="flex justify-between items-center py-3 border-b last:border-b-0"
                                    >
                                        <div>
                                            <p className="font-medium">
                                                {group.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                {group.members} membros
                                            </p>
                                        </div>
                                        <p
                                            className={`font-semibold ${
                                                group.balance >= 0
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {group.balance >= 0 ? "+" : "-"}R${" "}
                                            {Math.abs(group.balance).toFixed(2)}
                                        </p>
                                    </div>
                                ))}
                            </ScrollArea>
                            <Link href="/groups" passHref>
                                <Button
                                    variant="outline"
                                    className="w-full mt-4"
                                >
                                    Ver mais{" "}
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Contatos</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[300px]">
                                {contacts.map((contact) => (
                                    <div
                                        key={contact.id}
                                        className="flex justify-between items-center py-3 border-b last:border-b-0"
                                    >
                                        <div className="flex items-center">
                                            <Avatar className="h-8 w-8 mr-2">
                                                <AvatarFallback>
                                                    {contact.name[0]}
                                                </AvatarFallback>
                                            </Avatar>
                                            <p className="font-medium">
                                                {contact.name}
                                            </p>
                                        </div>
                                        <p
                                            className={`font-semibold ${
                                                contact.balance >= 0
                                                    ? "text-green-600"
                                                    : "text-red-600"
                                            }`}
                                        >
                                            {contact.balance >= 0 ? "+" : "-"}R${" "}
                                            {Math.abs(contact.balance).toFixed(
                                                2
                                            )}
                                        </p>
                                    </div>
                                ))}
                            </ScrollArea>
                            <Link href="/contacts" passHref>
                                <Button
                                    variant="outline"
                                    className="w-full mt-4"
                                >
                                    Ver mais{" "}
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </main>

            <Button
                className="fixed bottom-8 right-8 rounded-full shadow-lg"
                size="lg"
            >
                <PlusCircle className="mr-2 h-4 w-4" /> Nova Despesa
            </Button>
        </div>
    );
}
