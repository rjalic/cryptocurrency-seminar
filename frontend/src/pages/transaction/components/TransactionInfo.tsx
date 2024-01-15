import { Separator } from '@/components/ui/separator.tsx';
import { useParams } from 'react-router-dom';

export function TransactionInfo() {
    const { txid } = useParams();

    return (
        <div className="max-w-6xl w-full mx-auto grid gap-2">
            <h1 className="font-semibold text-3xl mb-3">Transaction info</h1>
            <div className="flex flex-col text-md gap-2">
                <div className="flex gap-2">Transaction ID:<span className="font-medium">{txid}</span></div>
                <Separator />
                <div className="flex gap-2">Block Hash:<span className="font-medium">00000000ebf47d0cfb3c23f550ef5564d2d0f78ba331b5a530ed273fc59ce82f</span></div>
                <Separator />
                <div className="flex gap-2">Confirmations:<span className="font-medium">467021</span></div>
                <Separator />
                <div className="flex gap-2">Size:<span className="font-medium">563</span></div>
                <Separator />
                <div className="flex gap-2">vSize:<span className="font-medium">400</span></div>
                <Separator />
                <div className="flex gap-2">Version:<span className="font-medium">1</span></div>
            </div>
        </div>
    );
}