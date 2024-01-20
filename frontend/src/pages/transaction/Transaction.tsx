import { TransactionInOut } from '@/pages/transaction/components/TransactionInOut.tsx';
import { TransactionInfo } from '@/pages/transaction/components/TransactionInfo.tsx';

export function Transaction() {
    return (
        <>
            <TransactionInfo />
            <div className="grid gap-6 max-w-6xl w-full mx-auto">
                <TransactionInOut />
            </div>
        </>
    );
}