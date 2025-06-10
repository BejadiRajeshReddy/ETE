'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DataScienceRedirect() {
    const router = useRouter();

    useEffect(() => {
        // Redirect to the correct path
        router.replace('/Pages/Training/data-science-training');
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4">Redirecting...</h2>
                <p>Taking you to the Data Science Training page...</p>
            </div>
        </div>
    );
}