import { Separator } from '@/components/ui/separator.tsx';

interface Props {
    data: any;
}

export function NetworkInfo({ data }: Props) {
    return (
        <div className="max-w-6xl w-full mx-auto grid gap-2">
            <h1 className="font-semibold text-3xl">Network info</h1>
            <div className="flex items-center text-md gap-2">
                Connected to node: <span className="font-medium">{data.node}</span>
                <Separator className="h-5" orientation="vertical" />
                Type: <span className="font-medium">{data.chain === 'test' ? 'Testnet' : 'Mainnet'}</span>
                <Separator className="h-5" orientation="vertical" />
                Blocks: <span className="font-medium">{data.blocks}</span>
                <Separator className="h-5" orientation="vertical" />
                Headers: <span className="font-medium">{data.headers}</span>
                <Separator className="h-5" orientation="vertical" />
                <div className="text-gray-500 flex items-center gap-2 dark:text-gray-400">
                            <span
                                className="inline-block w-2 h-2 bg-[#09CE6B] rounded-full animate-ping duration-[5000]" />
                    32 transactions in mempool
                </div>
            </div>
        </div>
    );
}