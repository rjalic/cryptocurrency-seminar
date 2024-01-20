import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx';
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TooltipWrapper } from '@/components/custom/TooltipWrapper.tsx';

interface Props {
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
}

function shortenHash(hash: string) {
    return `${hash.slice(0, 4)}...${hash.slice(-10)}`;
}

export function BlockInfo({
    height,
    hash,
    timestamp,
    size,
    confirmations,
    minFee,
    avgFee,
    maxFee,
    totalFees,
    ins,
    outs,
    totalOut,
    previousBlockHash,
    nextBlockHash,
}: Props) {
    return (
        <div className="max-w-6xl w-full mx-auto grid gap-2">
            <div className="flex items-center justify-between">
                <h1 className="flex font-semibold text-3xl mb-3">Block Info</h1>
                <div className="flex gap-2">
                    <TooltipWrapper content={'Previous Block'}>
                        {!previousBlockHash ? <ArrowLeftCircle className="cursor-not-allowed" size={32} color="gray" />
                            : <Link to={`/blocks/hash/${previousBlockHash}`}>
                                <ArrowLeftCircle size={32} />
                            </Link>}
                    </TooltipWrapper>
                    <TooltipWrapper content={'Next Block'}>
                        {!nextBlockHash ? <ArrowRightCircle className="cursor-not-allowed" size={32} color="gray" /> :
                            <Link to={`/blocks/hash/${nextBlockHash}`}>
                                <ArrowRightCircle size={32} />
                            </Link>}
                    </TooltipWrapper>
                </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
                <Card className="relative overflow-hidden">
                    <CardHeader className="flex flex-row items-center border-b">
                        <CardTitle>Info</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 p-6">
                        <div className="flex items-center">
                            <div>Block Hash:</div>
                            <div className="font-semibold ml-auto">{shortenHash(hash)}</div>
                        </div>
                        <div className="flex items-center">
                            <div>Height:</div>
                            <div className="font-semibold ml-auto">{height}</div>
                        </div>
                        <div className="flex items-center">
                            <div>Block Time:</div>
                            <div className="font-semibold ml-auto">{new Date(timestamp * 1_000).toLocaleString()}</div>
                        </div>
                        <div className="flex items-center">
                            <div>Size (in bytes):</div>
                            <div className="font-semibold ml-auto">{size}</div>
                        </div>
                        <div className="flex items-center">
                            <div>Confirmations:</div>
                            <div className="font-semibold ml-auto">{confirmations}</div>
                        </div>
                        <div className="flex items-center">
                            <div>Total Out:</div>
                            <div className="font-semibold ml-auto">{totalOut} BTC</div>
                        </div>
                    </CardContent>
                </Card>
                <Card className="relative overflow-hidden">
                    <CardHeader className="flex flex-row items-center border-b">
                        <CardTitle>Stats</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 p-6">
                        <div className="flex items-center">
                            <div>Number Of Inputs:</div>
                            <div className="font-semibold ml-auto">{ins}</div>
                        </div>
                        <div className="flex items-center">
                            <div>Number Of Outputs:</div>
                            <div className="font-semibold ml-auto">{outs}</div>
                        </div>
                        <div className="flex items-center">
                            <div>Min Fees:</div>
                            <div className="font-semibold ml-auto">{minFee.toFixed(8)} BTC</div>
                        </div>
                        <div className="flex items-center">
                            <div>Avg Fees:</div>
                            <div className="font-semibold ml-auto">{avgFee.toFixed(8)} BTC</div>
                        </div>
                        <div className="flex items-center">
                            <div>Max Fees:</div>
                            <div className="font-semibold ml-auto">{maxFee.toFixed(8)} BTC</div>
                        </div>
                        <div className="flex items-center">
                            <div>Total Fees:</div>
                            <div className="font-semibold ml-auto">{totalFees.toFixed(8)} BTC</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}