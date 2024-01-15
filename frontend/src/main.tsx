import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Homepage, loader } from '@/pages/homepage/Homepage.tsx';
import { Transaction } from '@/pages/transaction/Transaction.tsx';

const router = createBrowserRouter([
    { path: '/', element: <Homepage />, loader: loader },
    { path: '/transactions/:txid', element: <Transaction /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
