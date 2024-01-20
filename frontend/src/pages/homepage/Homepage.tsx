import { NetworkInfo } from '@/pages/homepage/components/NetworkInfo.tsx';
import { LatestInfo } from '@/pages/homepage/components/LatestInfo.tsx';
import { useLoaderData } from 'react-router-dom';

export async function loader() {
    return await fetch('http://localhost:5000/1/bitcoin/network-info');
}

export function Homepage() {
    const data = useLoaderData();

    return (
        <>
            <NetworkInfo data={data} />
            <div className="grid gap-6 max-w-6xl w-full mx-auto">
                <LatestInfo />
            </div>
        </>
    )
}
