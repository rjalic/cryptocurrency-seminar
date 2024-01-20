import { Separator } from '@/components/ui/separator.tsx';

interface Props {
    txId: string;
    blockHash: string;
    fee: number;
    confirmations: number;
    size: number;
    vSize: number;
    version: number;
}

export function TransactionInfo({ txId, blockHash, fee, confirmations, size, vSize, version }: Props) {
    return (
        <div className="max-w-6xl w-full mx-auto grid gap-2">
            <h1 className="font-semibold text-3xl mb-3">Transaction Info</h1>
            <div className="flex flex-col text-md gap-2">
                <div className="flex gap-2">Transaction ID:<span className="font-medium">{txId}</span></div>
                <Separator />
                <div className="flex gap-2">Block Hash:<span className="font-medium">{blockHash}</span></div>
                <Separator />
                <div className="flex gap-2">Fee:<span className="font-medium">{fee.toFixed(8)} BTC</span></div>
                <Separator />
                <div className="flex gap-2">Confirmations:<span className="font-medium">{confirmations}</span></div>
                <Separator />
                <div className="flex gap-2">Size:<span className="font-medium">{size}</span></div>
                <Separator />
                <div className="flex gap-2">vSize:<span className="font-medium">{vSize}</span></div>
                <Separator />
                <div className="flex gap-2">Version:<span className="font-medium">{version}</span></div>
            </div>
        </div>
    );
}