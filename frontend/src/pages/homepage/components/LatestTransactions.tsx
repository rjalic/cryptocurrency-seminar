import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx';
import { TabsContent } from '@/components/ui/tabs.tsx';

function shortenHash(hash: string) {
    return `${hash.slice(0, 4)}...${hash.slice(-10)}`;
}

type LatestTransactionResponse = {
    txId: string;
    blockHash: string;
    confirmations: number;
    size: number;
    vins: number;
    vouts: number;
    totalOut: number;
    totalFee: number;
};

interface Props {
    data: LatestTransactionResponse[];
}

export function LatestTransactions({ data }: Props) {
    return (
        <TabsContent value="transactions">
            <Table>
                <TableCaption>A list of latest transactions.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Transaction Hash</TableHead>
                        <TableHead>Block Hash</TableHead>
                        <TableHead>Number of Inputs</TableHead>
                        <TableHead>Number of Outputs</TableHead>
                        <TableHead>Size (in bytes)</TableHead>
                        <TableHead>Total Out</TableHead>
                        <TableHead>Total Fees</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((tx) =>
                        <TableRow key={tx.txid}>
                            <TableCell className="font-medium">{shortenHash(tx.txId)}</TableCell>
                            <TableCell className="font-medium">{shortenHash(tx.blockHash)}</TableCell>
                            <TableCell>{tx.vins}</TableCell>
                            <TableCell>{tx.vouts}</TableCell>
                            <TableCell>{tx.size}</TableCell>
                            <TableCell>{tx.totalOut} BTC</TableCell>
                            <TableCell>{tx.totalFee} BTC</TableCell>
                        </TableRow>,
                    )}
                </TableBody>
            </Table>
        </TabsContent>
    );
}