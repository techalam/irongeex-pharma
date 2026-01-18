import { motion } from "framer-motion";
import Link from "next/link";
import Products from "../utils/products.json";
import { ProductCard } from "@/components/ProductCard";
import {
  Microscope,
  ShieldCheck,
  Activity,
  CheckCircle2,
  Factory,
  FlaskConical,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <main className="bg-[#0b0b0b] text-zinc-100 overflow-hidden">
      {/* ================= IRONGENEX HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
        {/* DESKTOP BACKGROUND */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/irongenex-hero-desktop.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* MOBILE BACKGROUND */}
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/irongenex-hero-mobile.png')",
          }}
        />

        {/* HARD OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        {/* RED INDUSTRIAL OVERLAY */}
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(177,18,23,0.1)_0%,rgba(0,0,0,0.12)_45%)]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* BRAND TAG */}
            <span className="inline-block mb-6 text-xs tracking-[0.4em] uppercase text-[#b11217] font-bold">
              IronGenex Pharma
            </span>

            {/* HEADLINE */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold leading-[1.05] text-zinc-100">
              FORGED FOR MASS.
              <br />
              <span className="text-[#b11217]">BUILT TO DOMINATE.</span>
            </h1>

            {/* SUBTEXT */}
            <p className="mt-8 text-zinc-300 max-w-xl leading-relaxed">
              Hardcore nutraceutical formulations engineered for bodybuilders
              who train under extreme load, volume, and intensity.
            </p>

            {/* CTAs */}
            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <a
                href="/products"
                className="
            px-10 py-4 bg-[#b11217] text-white font-bold tracking-wide
            hover:bg-red-700 transition
          "
              >
                VIEW FORMULATIONS
              </a>

              <a
                href="/authenticate"
                className="
            px-10 py-4 border border-zinc-600 text-zinc-300
            hover:border-[#b11217] hover:text-[#b11217]
            transition
          "
              >
                AUTHENTICATE PRODUCT
              </a>
            </div>
          </div>
        </div>

        {/* GRAIN OVERLAY */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: "url('/images/grain.png')",
          }}
        />
      </section>

      {/* ================= WHY IRONGENEX ================= */}
      <section className="relative bg-[#0a0a0a] py-28 overflow-hidden">
        {/* RED ACCENT STRIP */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#b11217]" />

        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100">
              WHY <span className="text-[#b11217]">IRONGENEX</span>
            </h2>

            <p className="mt-6 text-zinc-400 max-w-xl leading-relaxed">
              Built for lifters who train heavy, eat disciplined, and demand
              measurable progress under extreme training loads.
            </p>
          </div>

          {/* CORE PILLARS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "HEAVY DOSING",
                text: "Formulations structured for serious training intensity, not entry-level supplementation.",
              },
              {
                title: "ZERO FILLERS",
                text: "No unnecessary compounds. No dilution. Every ingredient serves a purpose.",
              },
              {
                title: "BUILT FOR SIZE",
                text: "Designed to support hypertrophy, recovery, and sustained volume training.",
              },
              {
                title: "HARD TRAINING CYCLES",
                text: "Engineered for athletes pushing long cycles, heavy loads, and high frequency.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border border-zinc-800 bg-[#111] p-8"
              >
                <h3 className="text-lg font-bold tracking-wide text-[#b11217] mb-4">
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

      {/* ================= FORMULATION PHILOSOPHY ================= */}
      <section className="relative bg-black py-8 overflow-hidden">
        {/* SUBTLE GRID TEXTURE */}
        <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(transparent_95%,#fff_96%),linear-gradient(90deg,transparent_95%,#fff_96%)] bg-[size:40px_40px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-100 leading-tight">
              ENGINEERED <span className="text-[#b11217]">UNDER LOAD</span>
            </h2>

            <p className="mt-8 text-zinc-400 max-w-xl leading-relaxed">
              IronGenex formulations are structured to perform under heavy
              training cycles, high volume workloads, and prolonged stress
              conditions. This is not casual supplementation — it is engineered
              support.
            </p>

            <ul className="mt-10 space-y-4 text-sm text-zinc-300">
              <li>• Dosage frameworks aligned with intense training demand</li>
              <li>• Ingredient selection based on performance utility</li>
              <li>• Batch-consistent manufacturing protocols</li>
              <li>• Designed for long-cycle use under load</li>
            </ul>
          </div>

          {/* VISUAL BLOCK (NO IMAGE YET — INDUSTRIAL PANEL) */}
          <div className="relative h-[360px] border border-zinc-800 bg-[#0f0f0f] p-10 flex flex-col justify-between">
            <div>
              <span className="text-xs tracking-widest uppercase text-zinc-500">
                Formulation Standard
              </span>
              <h3 className="mt-4 text-2xl font-bold text-[#b11217]">
                Performance-Driven Structure
              </h3>
            </div>

            <div className="text-sm text-zinc-400 leading-relaxed">
              Each formulation is evaluated against real training conditions —
              load, frequency, recovery demand, and cumulative stress. Only
              compounds that justify their presence remain.
            </div>

            {/* RED LINE */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b11217]" />
          </div>
        </div>
      </section>

      {/* ================= IRON LINE — PRODUCT SHOWCASE ================= */}
      <section className="relative bg-[#0a0a0a] py-28 overflow-hidden">
        {/* TOP DIVIDER */}
        {/* <div className="absolute top-0 left-0 w-full h-[2px] bg-[#b11217]" /> */}

        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-100 tracking-tight">
              THE <span className="text-[#b11217]">IRON LINE</span>
            </h2>
            <p className="mt-6 text-zinc-400 max-w-xl leading-relaxed">
              A focused lineup of performance-driven nutraceuticals engineered
              for athletes pursuing mass, strength, and recovery.
            </p>
          </div>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {Products.slice(0, 6).map((product, i) => (
              <motion.a
                key={product.id}
                href={`/product/${product.id}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="
            group relative bg-[#111] border border-zinc-800
            hover:border-[#b11217] transition
          "
              >
                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>

                {/* TEXT */}
                <div className="p-6">
                  <h3 className="text-lg font-bold tracking-wide text-zinc-100">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400 line-clamp-2">
                    {product.title}
                  </p>

                  <div className="mt-6 text-xs tracking-widest uppercase text-[#b11217]">
                    View Formulation →
                  </div>
                </div>

                {/* BOTTOM RED BAR */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b11217] group-hover:w-full transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BUILT FOR REAL TRAINING ================= */}
      <section className="relative bg-[#0a0a0a] py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <div className="mb-20 max-w-3xl">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-100">
              BUILT FOR <span className="text-[#b11217]">REAL TRAINING</span>
            </h2>

            <p className="mt-6 text-zinc-400 max-w-xl leading-relaxed">
              IronGenex formulations are structured around the demands of
              hardcore bodybuilding — volume accumulation, maximal loading, and
              recovery under stress.
            </p>
          </div>

          {/* TRAINING GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "HIGH VOLUME DAYS",
                text: "Extended sessions with repeated sets, high reps, and cumulative fatigue.",
                image: "/images/irongenex-training-volume.png",
              },
              {
                title: "MAX LOAD SESSIONS",
                text: "Heavy compound lifts pushing absolute strength and nervous system output.",
                image: "/images/irongenex-training-max.png",
              },
              {
                title: "RECOVERY BETWEEN CYCLES",
                text: "Supporting tissue repair and readiness between intense training blocks.",
                image: "/images/irongenex-training-recovery.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative h-[420px] overflow-hidden border border-zinc-800 bg-black group"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />

                {/* CONTENT */}
                <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                  <h3 className="text-xl font-bold text-[#b11217] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>

                {/* RED BAR */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b11217]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AUTHENTICITY & COMPLIANCE ================= */}
      <section className="relative bg-black py-22 overflow-hidden">
        {/* TOP RED STRIP */}
        {/* <div className="absolute top-0 left-0 w-full h-[2px] bg-[#b11217]" /> */}

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* TEXT */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-zinc-100 leading-tight">
              AUTHENTIC. <span className="text-[#b11217]">VERIFIED.</span>{" "}
              CONTROLLED.
            </h2>

            <p className="mt-8 text-zinc-400 max-w-xl leading-relaxed">
              IronGenex operates a controlled verification system to protect
              athletes from counterfeit products and unauthorized distribution.
              Every genuine unit can be authenticated before use.
            </p>

            <ul className="mt-10 space-y-4 text-sm text-zinc-300">
              <li>• Unique authentication codes issued per unit</li>
              <li>• Secure verification infrastructure</li>
              <li>• Batch-level manufacturing traceability</li>
            </ul>

            <div className="mt-12 flex gap-6">
              <a
                href="/product-verification"
                className="
            px-10 py-4 bg-[#b11217] text-white font-bold tracking-wide
            hover:bg-red-700 transition
          "
              >
                VERIFY PRODUCT
              </a>

              <a
                href="/contact-us"
                className="
            px-10 py-4 border border-zinc-700 text-zinc-300
            hover:border-[#b11217] hover:text-[#b11217]
            transition
          "
              >
                CONTACT IRONGENEX
              </a>
            </div>
          </div>

          {/* VISUAL — INDUSTRIAL PANEL */}
          <div className="relative border border-zinc-800 bg-[#0f0f0f] p-10 h-[360px] flex flex-col justify-between">
            <div>
              <span className="text-xs tracking-widest uppercase text-zinc-500">
                Security System
              </span>
              <h3 className="mt-4 text-2xl font-bold text-[#b11217]">
                Product Authentication
              </h3>
            </div>

            <p className="text-sm text-zinc-400 leading-relaxed">
              Authentication data is derived from internal manufacturing
              records. Verification assists in identifying genuine IronGenex
              products prior to consumption.
            </p>

            {/* BOTTOM RED BAR */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#b11217]" />
          </div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section className="py-16 px-6 max-w-7xl mx-auto border-t border-zinc-800">
        <div className="flex items-start gap-4 mb-6">
          <Users className="text-[#b11217]" />
          <p className="text-zinc-400 max-w-4xl leading-relaxed">
            IronGenex Pharma products are intended for informed consumers and
            should be used responsibly as part of a balanced lifestyle.
          </p>
        </div>

        <p className="text-sm text-zinc-500 max-w-4xl leading-relaxed">
          Disclaimer: Nutraceutical products are not intended to diagnose,
          treat, cure, or prevent any disease. Always consult a qualified
          healthcare professional before use.
        </p>
      </section>
    </main>
  );
}
