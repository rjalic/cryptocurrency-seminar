import { TransactionInOut } from '@/pages/transaction/components/TransactionInOut.tsx';
import { Header } from '@/components/custom/Header.tsx';
import { TransactionInfo } from '@/pages/transaction/components/TransactionInfo.tsx';

export function Transaction() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main
                className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
                <TransactionInfo />
                <div className="grid gap-6 max-w-6xl w-full mx-auto">
                    <TransactionInOut />
                </div>
            </main>
        </div>
)
}