import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx';
import { TabsContent } from '@/components/ui/tabs.tsx';
import { TooltipWrapper } from '@/components/custom/TooltipWrapper.tsx';
import { Link } from 'react-router-dom';

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
    totalIn: number;
    totalOut: number;
    fee: number;
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
                        <TableHead>Total In</TableHead>
                        <TableHead>Total Out</TableHead>
                        <TableHead>Fee</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((tx) =>
                        <TableRow key={tx.txId}>
                            <TableCell className="font-medium">
                                <TooltipWrapper content={tx.txId}>
                                    <Link to={`/transactions/${tx.txId}`}>
                                        {shortenHash(tx.txId)}
                                    </Link>
                                </TooltipWrapper>
                            </TableCell>
                            <TableCell className="font-medium">
                                <TooltipWrapper content={tx.blockHash}>
                                    <Link to={`/blocks/hash/${tx.blockHash}`}>
                                        {shortenHash(tx.blockHash)}
                                    </Link>
                                </TooltipWrapper>
                            </TableCell>
                            <TableCell>{tx.vins}</TableCell>
                            <TableCell>{tx.vouts}</TableCell>
                            <TableCell>{tx.size}</TableCell>
                            <TableCell>{tx.totalIn.toFixed(8)} BTC</TableCell>
                            <TableCell>{tx.totalOut.toFixed(8)} BTC</TableCell>
                            <TableCell>{tx.fee.toFixed(8)} BTC</TableCell>
                        </TableRow>,
                    )}
                </TableBody>
            </Table>
        </TabsContent>
    );
}