'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const MapInteractive = dynamic(
    () => import('@/layout/MapInteractive').then((mod) => mod.Map),
    { ssr: false }
);

export default function MapClient() {
    return (
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
            <MapInteractive />
        </Suspense>
    );
}
