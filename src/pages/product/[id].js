"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Products from "../../utils/products.json";
import { useRouter } from "next/router";

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const product = Products.find((p) => p.id === Number(id));
  const [index, setIndex] = useState(0);

  if (!product) {
    return (
      <main className="flex items-center justify-center min-h-screen bg-black text-zinc-500">
        Product not found.
      </main>
    );
  }

  const nextImage = () =>
    setIndex((prev) => (prev + 1) % product.images.length);

  const prevImage = () =>
    setIndex((prev) => (prev - 1 + product.images.length) % product.images.length);

  return (
    <main className="min-h-screen bg-black text-zinc-200">
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-28 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* ================= LEFT — IMAGE ================= */}
        <div className="relative">
          <div className="relative aspect-[4/3] bg-zinc-950 border border-zinc-800 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={product.images[index]}
                alt={product.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
          </div>

          {/* Controls */}
          {product.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="
                  absolute left-4 top-1/2 -translate-y-1/2
                  p-2 bg-black/70
                  border border-zinc-700
                  text-[#b11217]
                "
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={nextImage}
                className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  p-2 bg-black/70
                  border border-zinc-700
                  text-[#b11217]
                "
              >
                <ChevronRight size={20} />
              </button>
            </>
          )}

          {/* Dots */}
          {product.images.length > 1 && (
            <div className="mt-4 flex justify-center gap-2">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-2 h-2 rounded-full transition ${
                    i === index ? "bg-[#b11217]" : "bg-zinc-600"
                  }`}
                />
              ))}
            </div>
          )}
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

              <div className="flex items-center gap-3">
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
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
