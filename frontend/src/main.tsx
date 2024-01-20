import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Homepage, networkInfoLoader } from '@/pages/homepage/Homepage.tsx';
import { Transaction, transactionLoader } from '@/pages/transaction/Transaction.tsx';
import { PageLayout } from '@/pages/PageLayout.tsx';
import { LatestInfo } from '@/pages/homepage/components/LatestInfo.tsx';

const router = createBrowserRouter([
    {
        element: <PageLayout />, children: [
            {
                path: '/', element: <Homepage />, loader: networkInfoLoader, children: [
                    {
                        path: '/', element: <LatestInfo />
                    },
                ],
            },
            { path: '/transactions/:txid', element: <Transaction />, loader: transactionLoader },
            { path: '/blocks/hash/:hash', element: <div>Block hash</div> },
            { path: '/blocks/height/:height', element: <div>Block height</div> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
