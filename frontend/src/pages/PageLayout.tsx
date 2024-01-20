import { Header } from '@/components/custom/Header.tsx';
import { Outlet } from 'react-router-dom';

export function PageLayout() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] bg-gray-100/40 flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 dark:bg-gray-800/40">
                <Outlet />
            </main>
        </div>
    )
}