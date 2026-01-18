"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
    { name: "Authentication", href: "/product-verification" },
  ];

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className="
          fixed top-0 w-full z-[9999]
          backdrop-blur-xl bg-black/20
          border-b border-white/10
        "
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6">
          <div className="flex h-16 items-center justify-between">

            {/* TEXT LOGO */}
            <Link href="/" className="flex flex-col leading-none">
              <span className="text-lg font-extrabold tracking-wide text-white">
                IRON<span className="text-[#b11217]">GENEX</span>
              </span>
              <span className="text-[10px] tracking-[0.35em] text-zinc-400">
                PHARMA
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-10 text-sm font-bold tracking-wide">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-zinc-300 hover:text-[#b11217] transition"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="md:hidden text-white z-[10001]"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE DRAWER ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-[10000]"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="
                fixed top-0 left-0 h-full w-[80%] max-w-[320px]
                bg-zinc-950
                border-r border-zinc-800
                z-[10001]
                flex flex-col
              "
            >
              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="
                  absolute top-4 right-4
                  p-2 rounded-md
                  bg-zinc-900
                  border border-zinc-700
                  text-[#b11217]
                "
                aria-label="Close menu"
              >
                <X size={22} />
              </button>

              {/* Brand */}
              <div className="px-6 pt-8 pb-6 border-b border-zinc-800">
                <span className="block text-xs tracking-[0.35em] text-zinc-400">
                  IRONGENEX PHARMA
                </span>
              </div>

              {/* Nav */}
              <nav className="flex-1 px-6 py-8 space-y-6">
                {navLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="
                      block text-xl font-extrabold
                      text-white
                      hover:text-[#b11217]
                      transition
                    "
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Footer CTA */}
              <div className="px-6 py-6 border-t border-zinc-800">
                <Link
                  href="/products"
                  onClick={() => setMenuOpen(false)}
                  className="
                    block w-full text-center
                    px-6 py-3
                    border border-[#b11217]
                    text-[#b11217]
                    font-bold tracking-wide
                    hover:bg-[#b11217]
                    hover:text-white
                    transition
                  "
                >
                  VIEW FORMULATIONS
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
