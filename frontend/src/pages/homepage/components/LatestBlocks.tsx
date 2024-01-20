import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx';
import { TabsContent } from '@/components/ui/tabs.tsx';

function shortenHash(hash: string) {
    return `${hash.slice(0, 4)}...${hash.slice(-10)}`;
}

type LatestBlockResponse = {
    height: number;
    hash: string;
    timestamp: number;
    txs: number;
    size: number;
    totalOuts: number;
    totalFees: number;
};

interface Props {
    data: LatestBlockResponse[];
}

export function LatestBlocks({ data }: Props) {
    return (
        <TabsContent value="blocks">
            <Table>
                <TableCaption>A list of latest blocks.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Height</TableHead>
                        <TableHead>Hash</TableHead>
                        <TableHead>Age</TableHead>
                        <TableHead>Transactions</TableHead>
                        <TableHead>Block Size (in bytes)</TableHead>
                        <TableHead>Total Out</TableHead>
                        <TableHead>Total Fees</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((block) =>
                        <TableRow key={block.height}>
                            <TableCell className="font-medium">{block.height}</TableCell>
                            <TableCell
                                className="font-medium truncate">{shortenHash(block.hash)}</TableCell>
                            <TableCell>{new Date(block.timestamp * 1000).toLocaleString()}</TableCell>
                            <TableCell>{block.txs}</TableCell>
                            <TableCell>{block.size}</TableCell>
                            <TableCell>{block.totalOuts} BTC</TableCell>
                            <TableCell>{block.totalFees} BTC</TableCell>
                        </TableRow>,
                    )}
                </TableBody>
            </Table>
        </TabsContent>
    );
}