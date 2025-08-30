"use client"

import { IoClose, IoMenu } from "react-icons/io5"
import { useState, useEffect, useRef } from "react"
import clsx from "clsx"
import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

const Navlink = () => {
    const [open, setOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const { data: session, status } = useSession()
    const router = useRouter()

    const handleSignOut = () => {
        signOut({ callbackUrl: "/" })
        setDropdownOpen(false)
        setOpen(false)
    }

    // Close dropdown kalau klik di luar
    const dropdownRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    if (status === "loading") {
        return (
            <nav className="flex items-center justify-center p-4">
                <div className="loading loading-spinner loading-md text-orange-500"></div>
            </nav>
        )
    }

    // Avatar sederhana: lingkaran abu-abu dengan icon user (emoji 👤)
    const Avatar = () => (
        <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center cursor-pointer select-none text-white text-lg">
            👤
        </div>
    )

    return (
        <nav className="relative">
            {/* Tombol hamburger (mobile only) */}
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center p-2 justify-center text-gray-500 hover:bg-gray-100 md:hidden"
                aria-label="Toggle menu"
            >
                {!open ? <IoMenu className="text-2xl" /> : <IoClose className="text-2xl" />}
            </button>

            {/* Sidebar mobile */}
            <div
                className={clsx(
                    "fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden",
                    open ? "translate-x-0" : "translate-x-full"
                )}
            >
                {/* Tombol X di dalam sidebar */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 p-2 text-gray-600 hover:text-gray-900"
                    aria-label="Close menu"
                >
                    <IoClose className="text-2xl" />
                </button>

                <ul className="flex flex-col font-semibold text-sm uppercase p-6 pt-16 space-y-4 text-black">
                    <li><Link href="/" onClick={() => setOpen(false)}>Home</Link></li>
                    <li><Link href="/about" onClick={() => setOpen(false)}>About</Link></li>
                    <li><Link href="/room" onClick={() => setOpen(false)}>Room</Link></li>
                    <li><Link href="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
                    {session && (
                        <>
                            <li><Link href="/myreservation" onClick={() => setOpen(false)}>My Reservation</Link></li>
                            {session.user.role === "admin" && (
                                <>
                                    <li><Link href="/admin/dashboard" onClick={() => setOpen(false)}>Dashboard</Link></li>
                                    <li><Link href="/admin/room" onClick={() => setOpen(false)}>Room Management</Link></li>
                                </>
                            )}
                        </>
                    )}

                    {session ? (
                        <li className="relative" >
                            <div ref={dropdownRef}>
                                <div onClick={() => setDropdownOpen(!dropdownOpen)}><Avatar /></div>

                                {dropdownOpen && (
                                    <ul className="mt-2 bg-gray-50 rounded shadow-md py-2 text-black text-left">
                                        <li className="px-4 py-2 font-semibold">{session.user?.name ?? "User"}</li>
                                        <li>
                                            <button
                                                onClick={handleSignOut}
                                                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                            >
                                                Sign Out
                                            </button>
                                        </li>
                                    </ul>
                                )}
                            </div>
                        </li>
                    ) : (
                        <li>
                            <Link
                                href="/signin"
                                onClick={() => setOpen(false)}
                                className="block py-2.5 px-6 bg-orange-400 text-white rounded-sm"
                            >
                                Sign In
                            </Link>
                        </li>
                    )}

                </ul>
            </div>

            {/* Menu desktop */}
            <div className="hidden md:flex md:items-center md:space-x-10 font-semibold text-sm uppercase">
                <Link href="/" className="py-2 px-3 text-black hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">Home</Link>
                <Link href="/about" className="py-2 px-3 text-black hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">About</Link>
                <Link href="/room" className="py-2 px-3 text-black hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">Room</Link>
                <Link href="/contact" className="py-2 px-3 text-black hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">Contact</Link>
                {session && (
                    <>
                        <Link href="/myreservation" className="py-2 px-3 text-black hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">My Reservation</Link>
                        {session.user.role === "admin" && (
                            <>
                                <Link href="/admin/dashboard" className="py-2 px-3 text-black hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">Dashboard</Link>
                                <Link href="/admin/room" className="py-2 px-3 text-black hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0">Room Management</Link>
                            </>
                        )}
                    </>
                )}

                {session ? (
                    <div className="relative" ref={dropdownRef}>
                        {/* Avatar klik untuk toggle dropdown */}
                        <div onClick={() => setDropdownOpen(!dropdownOpen)}><Avatar /></div>

                        {dropdownOpen && (
                            <ul className="absolute right-0 mt-2 bg-white rounded shadow-md py-2 text-black min-w-[140px]">
                                <li className="px-4 py-2 font-semibold">{session.user?.name ?? "User"}</li>
                                <li>
                                    <button
                                        onClick={handleSignOut}
                                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                                    >
                                        Sign Out
                                    </button>
                                </li>
                            </ul>
                        )}
                    </div>
                ) : (
                    <Link href="/signin" className="py-2.5 px-6 bg-orange-400 text-white hover:bg-orange-500 rounded-sm">
                        Sign In
                    </Link>
                )}
            </div>
        </nav>
    )
}

export default Navlink
