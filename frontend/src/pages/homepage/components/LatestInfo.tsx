import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs.tsx';
import { useEffect, useState } from 'react';
import { LatestTransactions } from '@/pages/homepage/components/LatestTransactions.tsx';
import { LatestBlocks } from '@/pages/homepage/components/LatestBlocks.tsx';

type ActiveTabOption = 'blocks' | 'transactions';
type LatestBlockResponse = {
    height: number;
    hash: string;
    timestamp: number;
    txs: number;
    size: number;
    totalOuts: number;
    totalFees: number;
};
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
type LatestInfoTab = {
    type: 'blocks';
    data: LatestBlockResponse[];
} | {
    type: 'transactions';
    data: LatestTransactionResponse[];
};

export async function latestInfoLoader(activeTab: ActiveTabOption) {
    const response = await fetch(`http://localhost:5000/1/bitcoin/${activeTab}/latest`);
    return await response.json();
}

export function LatestInfo() {
    const [info, setInfo] = useState<LatestInfoTab>({ type: 'blocks', data: [] });

    async function handleTabChange(tab: ActiveTabOption) {
        const data = await latestInfoLoader(tab);
        setInfo({ type: tab, data });
    }

    useEffect(function initialLoad() {
        handleTabChange('blocks');
    }, []);

    return (
        <div className="flex flex-col gap-4 items-start py-2">
            <div className="grid gap-1 w-full">
                <Tabs defaultValue={info.type}>
                    <TabsList>
                        <TabsTrigger
                            value="blocks"
                            onClick={() => handleTabChange('blocks')}>
                            Latest Blocks
                        </TabsTrigger>
                        <TabsTrigger
                            value="transactions"
                            onClick={() => handleTabChange('transactions')}>
                            Latest Transactions
                        </TabsTrigger>
                    </TabsList>
                    {info.type === 'blocks' ? <LatestBlocks data={info.data} /> : <LatestTransactions data={info.data} />}
                </Tabs>
            </div>
        </div>
    );
}