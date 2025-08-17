// app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
            <h1 className="text-8xl font-bold text-orange-500">404</h1>
            <h2 className="text-2xl font-semibold mt-4 text-gray-800">Halaman Tidak Ditemukan</h2>
            <p className="text-gray-500 mt-2">
                Ups! Sepertinya halaman yang kamu cari tidak tersedia.
            </p>

            <Link
                href="/"
                className="mt-6 inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition"
            >
                Kembali ke Beranda
            </Link>
        </div>
    );
}
