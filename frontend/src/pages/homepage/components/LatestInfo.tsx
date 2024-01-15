import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx';

export function LatestInfo() {
    return (
        <div className="flex flex-col gap-4 items-start py-2">
            <div className="grid gap-1">
                <Tabs defaultValue="blocks">
                    <TabsList>
                        <TabsTrigger value="blocks">Latest Blocks</TabsTrigger>
                        <TabsTrigger value="transactions">Latest Transactions</TabsTrigger>
                    </TabsList>
                    <TabsContent value="blocks">
                        <Table>
                            <TableCaption>A list of latest blocks.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Height</TableHead>
                                    <TableHead>Age</TableHead>
                                    <TableHead>Transactions</TableHead>
                                    <TableHead>Total Sent</TableHead>
                                    <TableHead>Block Size (in bytes)</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Array.from({ length: 10 }, (_, i) => i + 1).map((_) =>
                                    <TableRow>
                                        <TableCell className="font-medium">2572921</TableCell>
                                        <TableCell>2024-01-15T09:18:40.204Z</TableCell>
                                        <TableCell>501</TableCell>
                                        <TableCell>1,405.385 BTC</TableCell>
                                        <TableCell>184,122</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TabsContent>
                    <TabsContent value="transactions">
                        <Table>
                            <TableCaption>A list of latest transactions.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Transaction Hash</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Size (in bytes)</TableHead>
                                    <TableHead>Number of inputs</TableHead>
                                    <TableHead>Number of outputs</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Array.from({ length: 10 }, (_, i) => i + 1).map((_) =>
                                    <TableRow>
                                        <TableCell
                                            className="font-medium">46873c3aa3bb6fb82e0ecd7799146c068f1c8a416ebd2e15174b4448c1f9f045</TableCell>
                                        <TableCell>0.01000302 BTC</TableCell>
                                        <TableCell>563</TableCell>
                                        <TableCell>2</TableCell>
                                        <TableCell>6</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}