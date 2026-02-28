import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
    { name: "Authentication", href: "/product-verification" },
  ];

  return (
    <footer className="bg-black text-zinc-300 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* ================= BRAND ================= */}
        <div className="flex flex-col gap-4">
          <div className="leading-none">
            <span className="block text-xl font-extrabold tracking-wide text-white">
              IRON<span className="text-[#b11217]">GENEX</span>
            </span>
            <span className="block text-[10px] tracking-[0.35em] text-zinc-500 mt-1">
              PHARMA
            </span>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
            IronGenex Pharma develops hardcore nutraceutical formulations
            engineered for mass, strength, endurance, and recovery under
            extreme training conditions.
          </p>
        </div>

        {/* ================= NAV ================= */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold tracking-widest text-zinc-500 mb-2">
            QUICK LINKS
          </h3>

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                text-sm text-zinc-400
                hover:text-[#b11217]
                transition
                w-fit
              "
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* ================= CONTACT ================= */}
        <div className="flex flex-col gap-3">
          <h3 className="text-xs font-bold tracking-widest text-zinc-500 mb-2">
            CONTACT
          </h3>

          <p className="text-sm text-zinc-400">
            Email:{" "}
            <a
              href="mailto:workinganabolic@gmail.com"
              className="hover:text-[#b11217] transition"
            >
              workinganabolic@gmail.com
            </a>
          </p>

          {/* <p className="text-sm text-zinc-400">
            Phone:{" "}
            <a
              href="tel:+919899646864"
              className="hover:text-[#b11217] transition"
            >
              +91 98996 46864
            </a>
          </p>

          <p className="text-sm text-zinc-400">
            Delhi, India
          </p> */}
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-zinc-800 py-6 text-center">
        <p className="text-xs tracking-widest text-zinc-500">
          © {year} IRONGENEX PHARMA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
