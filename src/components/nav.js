"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white border-b shadow-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <Link href="/" className="text-xl font-semibold text-gray-800">
                        MyApp
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-600 hover:text-black">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-black">
                            About
                        </Link>
                        <Link href="/services" className="text-gray-600 hover:text-black">
                            Services
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-black">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden text-gray-700 focus:outline-none"
                        aria-label="Toggle Menu"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="flex flex-col px-4 py-2 space-y-2 text-black">
                        <Link href="/" onClick={() => setMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="/about" onClick={() => setMenuOpen(false)}>
                            About
                        </Link>
                        <Link href="/services" onClick={() => setMenuOpen(false)}>
                            Services
                        </Link>
                        <Link href="/contact" onClick={() => setMenuOpen(false)}>
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}