"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Products from "../utils/products.json";

export default function ProductsPage() {
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const filtered = Products.filter((p) => {
    const matchesFilter =
      filter === "ALL"
        ? true
        : p.category?.toLowerCase() === filter.toLowerCase();

    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.title?.toLowerCase().includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-200">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100">
          IRON<span className="text-[#b11217]">GENEX</span> FORMULATIONS
        </h1>

        <p className="mt-6 max-w-2xl text-zinc-400 leading-relaxed">
          Hardcore nutraceutical formulations engineered for mass, strength,
          endurance, and recovery under extreme training conditions.
        </p>
      </section>

      {/* ================= SEARCH ================= */}
      <section className="max-w-7xl mx-auto px-6 mb-14">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search formulations"
          className="
            w-full sm:max-w-md
            bg-[#0f0f0f]
            border border-zinc-700
            px-5 py-4
            text-sm text-zinc-200
            placeholder-zinc-500
            focus:outline-none
            focus:border-[#b11217]
            transition
          "
        />
      </section>

      {/* ================= FILTER ================= */}
      {/* <section className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-wrap gap-3">
          {["ALL", "MASS", "STRENGTH", "ENDURANCE", "RECOVERY"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-5 py-3 text-xs sm:text-sm font-bold tracking-wide
                border transition
                ${
                  filter === cat
                    ? "border-[#b11217] text-[#b11217]"
                    : "border-zinc-700 text-zinc-400 hover:border-zinc-500"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>
      </section> */}

      {/* ================= PRODUCT GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        {filtered.length === 0 ? (
          <p className="text-zinc-500 text-sm">
            No formulations match your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((product, i) => (
              <motion.a
                key={product.id}
                href={`/product/${product.id}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="
                  group relative bg-[#111]
                  border border-zinc-800
                  hover:border-[#b11217]
                  transition
                "
              >
                {/* IMAGE */}
                <div className="h-[240px] sm:h-[260px] overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="
                      w-full h-full object-cover
                      group-hover:scale-105
                      transition duration-500
                    "
                  />
                </div>

                {/* TEXT */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-zinc-100">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                    {product.title}
                  </p>

                  <div className="mt-6 text-xs tracking-widest uppercase text-[#b11217]">
                    View Formulation →
                  </div>
                </div>

                {/* RED BAR */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b11217] group-hover:w-full transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
