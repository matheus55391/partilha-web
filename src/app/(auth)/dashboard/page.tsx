"use client";

import {
    MoveVerticalIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    DropdownMenu, DropdownMenuContent,
    DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const description =
  "An orders dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. The main area has a list of recent orders with a filter and export button. The main area also has a detailed view of a single order with order details, shipping information, billing information, customer information, and payment information.";

export default function Dashboard() {
  return (
    <main className="p-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">$1,234.56</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Accounts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Groups</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">5</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Friends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">124</div>
          </CardContent>
        </Card>
      </div>
      <Tabs defaultValue="transactions" className="mt-6">
        <TabsList>
          <TabsTrigger value="transactions">Transactions</TabsTrigger>
          <TabsTrigger value="groups">Groups</TabsTrigger>
          <TabsTrigger value="friends">Friends</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions">
          <Card>
            <CardHeader>
              <CardTitle>Transactions</CardTitle>
              <CardDescription>Manage your transactions here.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Account</TableHead>
                    <TableHead>Group</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2023-04-15</TableCell>
                    <TableCell>Groceries</TableCell>
                    <TableCell>$50.00</TableCell>
                    <TableCell>Personal</TableCell>
                    <TableCell>Roommates</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-20</TableCell>
                    <TableCell>Rent</TableCell>
                    <TableCell>$1,000.00</TableCell>
                    <TableCell>Shared Expenses</TableCell>
                    <TableCell>Roommates</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2023-04-25</TableCell>
                    <TableCell>Vacation Expenses</TableCell>
                    <TableCell>$500.00</TableCell>
                    <TableCell>Savings</TableCell>
                    <TableCell>Vacation</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button>Add Transaction</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="groups">
          <Card>
            <CardHeader>
              <CardTitle>Groups</CardTitle>
              <CardDescription>Manage your groups here.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Members</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Roommates</TableCell>
                    <TableCell>4</TableCell>
                    <TableCell>$150.00</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Vacation</TableCell>
                    <TableCell>6</TableCell>
                    <TableCell>$1,200.00</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Utilities</TableCell>
                    <TableCell>3</TableCell>
                    <TableCell>$75.00</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button>Add Group</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="friends">
          <Card>
            <CardHeader>
              <CardTitle>Friends</CardTitle>
              <CardDescription>Manage your friends here.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Balance</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>John Doe</TableCell>
                    <TableCell>john@example.com</TableCell>
                    <TableCell>$50.00</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Jane Smith</TableCell>
                    <TableCell>jane@example.com</TableCell>
                    <TableCell>$75.00</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bob Johnson</TableCell>
                    <TableCell>bob@example.com</TableCell>
                    <TableCell>$25.00</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoveVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit</DropdownMenuItem>
                          <DropdownMenuItem>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Button>Add Friend</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
