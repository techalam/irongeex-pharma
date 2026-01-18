"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

export default function AuthenticateIronGenex() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_BASE =
    "https://script.google.com/macros/s/AKfycbwlWmVGG6v9jAuTcdaCNMr_sqTnDfbVeXdTMsTJLjgSlivh-rNTpnkhqwNvlPCPcZAy/exec";
  const SECRET_KEY = "asdfghjkl";

  const handleCheck = async () => {
    if (!input.trim()) return setResult("empty");

    setLoading(true);
    setResult(null);

    try {
      const url = `${API_BASE}?barcode=${encodeURIComponent(
        input.trim().toLowerCase()
      )}&key=${encodeURIComponent(SECRET_KEY)}`;

      const res = await fetch(url);
      const data = await res.json();

      setResult(data.success ? "valid" : "invalid");
    } catch {
      setResult("invalid");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-200">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100"
        >
          PRODUCT <span className="text-[#b11217]">AUTHENTICATION</span>
        </motion.h1>

        <div className="mt-4 h-[2px] w-24 bg-[#b11217]" />

        <p className="mt-8 max-w-3xl text-sm text-zinc-400 leading-relaxed">
          This verification system allows customers and distributors to confirm
          the authenticity of IronGenex products. Each genuine unit is issued a
          unique authentication code at the time of manufacture.
        </p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-24">

        {/* LEFT — INFO */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-sm text-zinc-400 leading-relaxed"
        >
          <h2 className="text-base font-bold text-zinc-100 mb-10">
            VERIFICATION PROCEDURE
          </h2>

          <ol className="space-y-4 list-decimal list-inside">
            <li>Locate the authentication code on the product packaging.</li>
            <li>Enter the code exactly as printed.</li>
            <li>The system validates the product against official records.</li>
          </ol>

          <p className="mt-12 text-xs text-zinc-500 max-w-md">
            Authentication results are derived from internal manufacturing
            databases. This system assists in identifying counterfeit products.
          </p>
        </motion.div>

        {/* RIGHT — AUTH PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#111] border border-zinc-800 p-12"
        >
          <h2 className="text-base font-bold tracking-wide text-zinc-100 mb-12">
            VERIFY AUTHENTICATION CODE
          </h2>

          <div className="space-y-8">
            <div>
              <label className="block text-[11px] uppercase tracking-widest text-zinc-500 mb-3">
                Authentication Code
              </label>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter code"
                className="
                  w-full bg-black border border-zinc-700
                  px-4 py-3 text-sm text-zinc-200
                  placeholder-zinc-500
                  focus:outline-none focus:border-[#b11217]
                "
              />
            </div>

            <button
              onClick={handleCheck}
              disabled={loading}
              className="
                inline-flex items-center justify-center
                border border-[#b11217]
                px-10 py-3
                text-sm font-bold tracking-wide
                text-[#b11217]
                hover:bg-[#b11217] hover:text-white
                transition
                disabled:opacity-50
              "
            >
              {loading ? "VERIFYING…" : "VERIFY CODE"}
            </button>
          </div>

          {/* RESULT */}
          <AnimatePresence mode="wait">
            {result && (
              <motion.div
                key={result}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-12"
              >
                {result === "valid" && (
                  <div className="flex items-start gap-4 text-sm">
                    <CheckCircle size={22} className="text-green-500" />
                    <div>
                      <p className="font-bold text-green-500">
                        AUTHENTICATION SUCCESSFUL
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">
                        This product is confirmed as genuine.
                      </p>
                    </div>
                  </div>
                )}

                {result === "invalid" && (
                  <div className="flex items-start gap-4 text-sm">
                    <XCircle size={22} className="text-red-500" />
                    <div>
                      <p className="font-bold text-red-500">
                        AUTHENTICATION FAILED
                      </p>
                      <p className="text-xs text-zinc-500 mt-1">
                        The entered code is invalid or not recognized.
                      </p>
                    </div>
                  </div>
                )}

                {result === "empty" && (
                  <p className="text-xs text-zinc-500">
                    Please enter an authentication code.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
