import { Separator } from '@/components/ui/separator.tsx';
import { Info } from 'lucide-react';
import { TooltipWrapper } from '@/components/custom/TooltipWrapper.tsx';

interface Props {
    node: string;
    chain: string;
    blocks: number;
    headers: number;
    mempoolSize: number;
}

export function NetworkInfo({ node, chain, blocks, headers, mempoolSize }: Props) {
    return (
        <div className="max-w-6xl w-full mx-auto grid gap-2">
            <h1 className="font-semibold text-3xl">
                Network Info <TooltipWrapper trigger={<Info size={20} />} content={'Info is updated periodically.'} />
            </h1>
            <div className="flex items-center text-md gap-2">
                Connected to node: <span className="font-medium">{node}</span>
                <Separator className="h-5" orientation="vertical" />
                Type: <span className="font-medium">{chain === 'test' ? 'Testnet' : 'Mainnet'}</span>
                <Separator className="h-5" orientation="vertical" />
                Blocks: <span className="font-medium">{blocks}</span>
                <Separator className="h-5" orientation="vertical" />
                Headers: <span className="font-medium">{headers}</span>
                <Separator className="h-5" orientation="vertical" />
                <div className="text-gray-500 flex items-center gap-2 dark:text-gray-400">
                    <span className="inline-block w-2 h-2 bg-[#09CE6B] rounded-full animate-ping duration-5000" />
                    {mempoolSize} transactions in mempool
                </div>
            </div>
        </div>
    );
}