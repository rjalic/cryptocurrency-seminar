import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx';
import { TabsContent } from '@/components/ui/tabs.tsx';

export function LatestTransactions() {
    return (
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
                        </TableRow>,
                    )}
                </TableBody>
            </Table>
        </TabsContent>
    );
}