import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Homepage, networkInfoLoader } from '@/pages/homepage/Homepage.tsx';
import { Transaction, transactionLoader } from '@/pages/transaction/Transaction.tsx';
import { PageLayout } from '@/pages/PageLayout.tsx';
import { LatestInfo } from '@/pages/homepage/components/LatestInfo.tsx';
import { Block, blockHashLoader, blockHeightLoader } from '@/pages/block/Block.tsx';
import { NotFound } from '@/pages/NotFound.tsx';

const router = createBrowserRouter([
    {
        element: <PageLayout />, children: [
            {
                path: '/', element: <Homepage />, loader: networkInfoLoader, children: [
                    {
                        path: '/', element: <LatestInfo />
                    },
                ],
                errorElement: <NotFound />,
            },
            { path: '/transactions/:txid', element: <Transaction />, loader: transactionLoader, errorElement: <NotFound /> },
            { path: '/blocks/hash/:hash', element: <Block />, loader: blockHashLoader, errorElement: <NotFound /> },
            { path: '/blocks/height/:height', element: <Block />, loader: blockHeightLoader, errorElement: <NotFound /> },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
