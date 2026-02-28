"use client";

import { motion } from "framer-motion";
import {
  CheckCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Products from "../../utils/products.json";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = Products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-black text-zinc-500">
        Product not found.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* ================= LEFT — IMAGE ================= */}
        <div className="relative">
          <div className="relative aspect-[4/3] bg-zinc-950 border border-zinc-800 overflow-hidden">
            <motion.img
              src={product.images[0]}
              alt={product.name}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* ================= RIGHT — INFO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {product.name}
          </h1>

          {product.subtitle && (
            <p className="text-sm text-zinc-400 mb-6">
              {product.subtitle}
            </p>
          )}

          <p className="text-zinc-300 leading-relaxed mb-12 max-w-xl">
            {product.description}
          </p>

          {/* BENEFITS */}
          <div className="mb-16">
            <h3 className="text-sm tracking-widest font-bold text-zinc-400 mb-6">
              KEY PERFORMANCE POINTS
            </h3>

            <ul className="space-y-4">
              {product.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-zinc-300"
                >
                  <CheckCircle size={18} className="text-[#b11217] mt-0.5" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="border border-zinc-800 bg-zinc-950 p-8">
            <h3 className="text-lg font-extrabold tracking-wide text-white mb-6">
              ORDERS & DISTRIBUTION
            </h3>

            <div className="space-y-4 text-sm text-zinc-300">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#b11217]" />
                <a
                  href="mailto:workinganabolic@gmail.com"
                  className="hover:text-[#b11217] transition"
                >
                  workinganabolic@gmail.com
                </a>
              </div>

              {/* <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#b11217]" />
                <a
                  href="tel:+919899646864"
                  className="hover:text-[#b11217] transition"
                >
                  +91 98996 46864
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-[#b11217]" />
                <span>Delhi, India</span>
              </div> */}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
