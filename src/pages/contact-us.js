"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "emailjs-com";

export default function ContactIronGenex() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const result = await emailjs.send(
        "service_65yhktk",
        "template_32vr81h",
        formData,
        "R4BjEA3Pi3Plvavxn"
      );

      if (result.text === "OK") {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      alert("Message could not be sent. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-zinc-200">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-100"
        >
          CONTACT <span className="text-[#b11217]">IRONGENEX</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-6 max-w-2xl text-zinc-400 leading-relaxed"
        >
          For product inquiries, distribution discussions, or official
          communication, use the form below. Casual inquiries are not monitored.
        </motion.p>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT — INFO */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-bold tracking-wide text-[#b11217] mb-10">
            OFFICIAL COMMUNICATION
          </h2>

          <div className="space-y-8 text-sm text-zinc-400">

            <div className="flex items-start gap-4">
              <Mail size={20} className="text-[#b11217] mt-1" />
              <div>
                <p className="text-zinc-100 font-medium">Email</p>
                <a
                  href="mailto:workinganabolic@gmail.com"
                  className="hover:text-[#b11217] transition"
                >
                  workinganabolic@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={20} className="text-[#b11217] mt-1" />
              <div>
                <p className="text-zinc-100 font-medium">Phone</p>
                <a
                  href="tel:+919899646864"
                  className="hover:text-[#b11217] transition"
                >
                  +91 98996 46864
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={20} className="text-[#b11217] mt-1" />
              <div>
                <p className="text-zinc-100 font-medium">Location</p>
                <p>Delhi, India</p>
              </div>
            </div>
          </div>

          <p className="mt-12 max-w-md text-xs text-zinc-500 leading-relaxed">
            IronGenex Pharma does not provide medical advice.
            Product usage decisions should be made in consultation with
            qualified professionals.
          </p>
        </motion.div>

        {/* RIGHT — FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#111] border border-zinc-800 p-10 space-y-6"
        >
          <h2 className="text-xl font-bold tracking-wide text-[#b11217] mb-6">
            SEND A MESSAGE
          </h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="
              w-full bg-black border border-zinc-700 px-4 py-3
              text-sm text-zinc-200 placeholder-zinc-500
              focus:outline-none focus:border-[#b11217]
            "
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="
              w-full bg-black border border-zinc-700 px-4 py-3
              text-sm text-zinc-200 placeholder-zinc-500
              focus:outline-none focus:border-[#b11217]
            "
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            required
            className="
              w-full bg-black border border-zinc-700 px-4 py-3
              text-sm text-zinc-200 placeholder-zinc-500 resize-none
              focus:outline-none focus:border-[#b11217]
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              inline-flex items-center gap-3
              px-8 py-3 text-sm font-bold tracking-wide
              bg-[#b11217] text-white
              hover:bg-red-700 transition
              disabled:opacity-50
            "
          >
            {loading ? "SENDING…" : "SUBMIT MESSAGE"}
            <Send size={16} />
          </button>

          {success && (
            <p className="text-sm text-green-500 mt-4">
              Message sent successfully.
            </p>
          )}
        </motion.form>
      </section>
    </main>
  );
}
