import { NetworkInfo } from '@/pages/homepage/components/NetworkInfo.tsx';
import { Outlet, useLoaderData, useRevalidator } from 'react-router-dom';
import { useEffect } from 'react';

type NetworkInfoResponse = {
    node: string;
    chain: string;
    blocks: number;
    headers: number;
    mempoolSize: number;
}

export async function networkInfoLoader() {
    return await fetch('http://localhost:5000/1/bitcoin/network-info');
}

export function Homepage() {
    const data = useLoaderData() as NetworkInfoResponse;
    const revalidator = useRevalidator();

    useEffect(function periodicUpdate() {
        const interval = setInterval(() => {
            revalidator.revalidate();
        }, 10_000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <NetworkInfo {...data} />
            <div className="grid gap-6 max-w-6xl w-full mx-auto">
                <Outlet />
            </div>
        </>
    )
}
