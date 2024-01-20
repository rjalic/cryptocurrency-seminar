import { LoaderFunctionArgs, useLoaderData, useParams } from 'react-router-dom';
import { BlockInfo } from '@/pages/block/components/BlockInfo.tsx';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table.tsx';
import { useEffect, useState } from 'react';
import { TooltipWrapper } from '@/components/custom/TooltipWrapper.tsx';

export async function blockHeightLoader({ params }: LoaderFunctionArgs) {
    return await fetch(`http://localhost:5000/1/bitcoin/blocks/height/${params.height}`);
}

export async function blockHashLoader({ params }: LoaderFunctionArgs) {
    return await fetch(`http://localhost:5000/1/bitcoin/blocks/hash/${params.hash}`);
}

type BlockResponse = {
    height: number;
    hash: string;
    timestamp: number;
    size: number;
    confirmations: number;
    minFee: number;
    avgFee: number;
    maxFee: number;
    totalFees: number;
    ins: number;
    outs: number;
    totalOut: number;
    previousBlockHash: string;
    nextBlockHash: string;
    txs: string[];
}

export function Block() {
    const [page, setPage] = useState(0);
    const data = useLoaderData() as BlockResponse;
    const { hash, height } = useParams();

    useEffect(function resetPageOnParamChange() {
        setPage(0);
    }, [hash, height]);

    const isFirstPage = page === 0;
    const isLastPage = page + 10 >= data.txs.length;

    return (
        <>
            <BlockInfo {...data} />
            <div className="grid gap-6 max-w-6xl w-full mx-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                <TooltipWrapper content={'Previous Page'}>
                                    {isFirstPage ?
                                        <ArrowLeftCircle className="cursor-not-allowed" size={32} color="gray" /> :
                                        <ArrowLeftCircle
                                            onClick={() => setPage((prevPage) => prevPage - 10)}
                                            size={32}
                                            stroke={"black"}
                                        />}
                                </TooltipWrapper>
                            </TableHead>
                            <TableHead>Transaction Number</TableHead>
                            <TableHead>Transaction ID</TableHead>
                            <TableHead>
                                <TooltipWrapper content={'Next Page'}>
                                    {isLastPage ?
                                        <ArrowRightCircle className="cursor-not-allowed" size={32} color="gray" /> :
                                        <ArrowRightCircle
                                            onClick={() => setPage((nextPage) => nextPage + 10)}
                                            size={32}
                                            stroke={"black"}
                                        />}
                                </TooltipWrapper>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.txs.slice(page, page + 10).map((tx, idx) =>
                            <TableRow key={tx}>
                                <TableCell className="font-medium"></TableCell>
                                <TableCell className="font-medium">{idx + 1 + page}.</TableCell>
                                <TableCell className="font-medium">{tx}</TableCell>
                                <TableCell className="font-medium"></TableCell>
                            </TableRow>,
                        )}
                    </TableBody>
                </Table>
            </div>
        </>
    );
}