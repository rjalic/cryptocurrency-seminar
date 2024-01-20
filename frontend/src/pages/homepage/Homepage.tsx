import { NetworkInfo } from '@/pages/homepage/components/NetworkInfo.tsx';
import { Outlet, useLoaderData } from 'react-router-dom';

type NetworkInfoResponse = {
    node: string;
    chain: string;
    blocks: number;
    headers: number;
    mempoolSize: number;
}

export async function loader() {
    return await fetch('http://localhost:5000/1/bitcoin/network-info');
}

export function Homepage() {
    const data = useLoaderData() as NetworkInfoResponse;

    return (
        <>
            <NetworkInfo {...data} />
            <div className="grid gap-6 max-w-6xl w-full mx-auto">
                <Outlet />
            </div>
        </>
    )
}
