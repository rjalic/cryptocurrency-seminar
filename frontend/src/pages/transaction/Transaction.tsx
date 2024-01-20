import { TransactionInOut } from '@/pages/transaction/components/TransactionInOut.tsx';
import { TransactionInfo } from '@/pages/transaction/components/TransactionInfo.tsx';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';

type AddressAmount = {
    address: string;
    amount: number;
};

type TransactionResponse = {
    txId: string;
    blockHash: string;
    fee: number;
    confirmations: number;
    size: number;
    vSize: number;
    version: number;
    vins: AddressAmount[];
    vouts: AddressAmount[];
};

export async function transactionLoader({ params }: LoaderFunctionArgs) {
    return await fetch(`http://localhost:5000/1/bitcoin/transactions/${params.txid}`);
}

export function Transaction() {
    const data = useLoaderData() as TransactionResponse;

    return (
        <>
            <TransactionInfo {...data} />
            <div className="grid gap-6 max-w-6xl w-full mx-auto">
                <TransactionInOut vins={data.vins} vouts={data.vouts} />
            </div>
        </>
    );
}