"use client";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { PlusCircle } from "lucide-react";
import { useState } from "react";

const friends: { id: number; name: string }[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Eve" },
];

type AddTransactionModalProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};
export default function AddTransactionModal({
    open = false,
    onOpenChange,
}: AddTransactionModalProps) {
    const [selectedFriends, setSelectedFriends] = useState([]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Adicionar Transação</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">
                            Descrição
                        </Label>
                        <Input id="description" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="amount" className="text-right">
                            Valor
                        </Label>
                        <Input
                            id="amount"
                            type="number"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="payer" className="text-right">
                            Pago por
                        </Label>
                        <Select>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Selecione o pagador" />
                            </SelectTrigger>
                            <SelectContent>
                                {friends.map((friend) => (
                                    <SelectItem
                                        key={friend.id}
                                        value={friend.id.toString()}
                                    >
                                        {friend.name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="division" className="text-right">
                            Divisão
                        </Label>
                        <Select>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Forma de divisão" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="equal">
                                    Igualmente
                                </SelectItem>
                                <SelectItem value="percentage">
                                    Porcentagem
                                </SelectItem>
                                <SelectItem value="custom">
                                    Personalizado
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Membros</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="col-span-3 justify-start text-left font-normal"
                                >
                                    <PlusCircle className="mr-2 h-4 w-4" />
                                    {selectedFriends.length > 0
                                        ? `${selectedFriends.length} selecionado(s)`
                                        : "Selecione os membros"}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-[280px] p-4">
                                Place content for the popover here.
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <Button type="submit">Adicionar Transação</Button>
            </DialogContent>
        </Dialog>
    );
}
