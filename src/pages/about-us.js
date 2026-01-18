"use client";

import { motion } from "framer-motion";

export default function AboutIronGenex() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-200 overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative pt-36 pb-28 px-6 max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-100"
        >
          BUILT IN <span className="text-[#b11217]">IRON</span>.
          <br />
          ENGINEERED FOR <span className="text-[#b11217]">LOAD</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-10 max-w-2xl text-zinc-400 leading-relaxed"
        >
          IronGenex Pharma was created for serious bodybuilders who train under
          heavy load, long cycles, and uncompromising standards. This brand does
          not exist for casual fitness.
        </motion.p>
      </section>

      {/* ================= ORIGIN ================= */}
      <section className="border-t border-zinc-800 py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100">
              THE <span className="text-[#b11217]">ORIGIN</span>
            </h2>

            <p className="mt-8 text-zinc-400 leading-relaxed">
              IronGenex was developed from firsthand exposure to hardcore
              bodybuilding environments — places where recovery is tested,
              strength is earned, and performance compounds are judged by results,
              not labels.
            </p>

            <p className="mt-6 text-zinc-400 leading-relaxed">
              The brand was structured around a simple principle: supplements
              must survive real training stress. Anything that does not perform
              under volume, intensity, and frequency is removed.
            </p>
          </motion.div>

          {/* VISUAL BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] border border-zinc-800 bg-[#111]"
          >
            <img
              src="/images/irongenex-about-origin.png"
              alt="IronGenex training environment"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="py-28 px-6 bg-black">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 mb-16">
            FORMULATION <span className="text-[#b11217]">DISCIPLINE</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "HEAVY DOSING",
                text: "Dosage frameworks aligned with serious training intensity.",
              },
              {
                title: "NO FILLERS",
                text: "Only compounds that justify performance inclusion remain.",
              },
              {
                title: "CYCLE AWARE",
                text: "Built to support extended and repeated training cycles.",
              },
              {
                title: "BATCH CONTROL",
                text: "Manufacturing consistency across every production run.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border border-zinc-800 bg-[#111] p-8"
              >
                <h3 className="text-lg font-bold text-[#b11217] mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHO IT'S FOR ================= */}
      <section className="py-28 px-6 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100">
              WHO <span className="text-[#b11217]">IRONGENEX</span> IS FOR
            </h2>

            <ul className="mt-10 space-y-4 text-zinc-400">
              <li>• Competitive and hardcore bodybuilders</li>
              <li>• Athletes training under high volume and load</li>
              <li>• Individuals running structured training cycles</li>
              <li>• Users who demand performance consistency</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100">
              WHO IT IS <span className="text-[#b11217]">NOT</span> FOR
            </h2>

            <ul className="mt-10 space-y-4 text-zinc-500">
              <li>• Casual gym-goers</li>
              <li>• Beginner supplementation</li>
              <li>• Lifestyle fitness audiences</li>
              <li>• Marketing-driven consumers</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ================= CLOSING ================= */}
      <section className="py-24 px-6 bg-black text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100">
          IRONGENEX IS BUILT FOR THOSE
          <br />
          <span className="text-[#b11217]">WHO TRAIN WITHOUT NEGOTIATION</span>
        </h2>
      </section>
    </main>
  );
}
