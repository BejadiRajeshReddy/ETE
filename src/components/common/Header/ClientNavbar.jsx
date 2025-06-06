"use client";
import Navbar from './Navbar';
import { usePathname } from 'next/navigation';

export default function ClientNavbar() {
    const pathname = usePathname();
    const hideNavbar =
        pathname?.toLowerCase().startsWith('/datascience') ||
        pathname?.toLowerCase().startsWith('/digital');

    if (hideNavbar) return null;
    return <Navbar />;
}