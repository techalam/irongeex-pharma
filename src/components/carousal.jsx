"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CardSwipeCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);
  const [dimensions, setDimensions] = useState({
    width: 380,
    height: 440,
    gap: 44,
  });

  // Responsive sizing
  useEffect(() => {
    const updateDimensions = () => {
      const w = window.innerWidth;

      if (w < 480) {
        setDimensions({ width: 240, height: 280, gap: 26 });
      } else if (w < 768) {
        setDimensions({ width: 300, height: 360, gap: 30 });
      } else if (w < 1024) {
        setDimensions({ width: 340, height: 400, gap: 36 });
      } else {
        setDimensions({ width: 380, height: 440, gap: 44 });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (!images.length) return null;

  const { width, height, gap } = dimensions;
  const prevIndex = (index - 1 + images.length) % images.length;
  const nextIndex = (index + 1) % images.length;

  const swipeLeft = () => setIndex(nextIndex);
  const swipeRight = () => setIndex(prevIndex);

  return (
    <div
      className="w-full flex justify-center items-center py-10 select-none overflow-hidden"
      style={{ perspective: 1400 }}
    >
      <div
        className="relative flex items-center"
        style={{ width: width + gap * 4, height }}
      >
        {/* PREVIOUS */}
        <motion.img
          key={`prev-${prevIndex}`}
          src={images[prevIndex]}
          alt=""
          className="
            absolute top-0 object-cover
            border border-zinc-800
            bg-black
          "
          style={{
            width,
            height,
            left: gap,
            zIndex: 1,
          }}
          initial={{ scale: 0.82, x: -gap, rotateY: 12, opacity: 0.45 }}
          animate={{ scale: 0.82, x: -gap, rotateY: 12, opacity: 0.45 }}
          transition={{ duration: 0.35 }}
        />

        {/* CENTER */}
        <motion.img
          key={`center-${index}`}
          src={images[index]}
          alt=""
          className="
            absolute top-0 object-cover
            border border-[#b11217]
            bg-black
            shadow-[0_0_60px_rgba(177,18,23,0.25)]
          "
          style={{
            width,
            height,
            left: gap * 2,
            zIndex: 3,
          }}
          initial={{ scale: 0.96 }}
          animate={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 220, damping: 20 }}
          drag="x"
          dragConstraints={{ left: -90, right: 90 }}
          dragElastic={0.4}
          onDragEnd={(e, info) => {
            if (info.offset.x < -50) swipeLeft();
            else if (info.offset.x > 50) swipeRight();
          }}
        />

        {/* NEXT */}
        <motion.img
          key={`next-${nextIndex}`}
          src={images[nextIndex]}
          alt=""
          className="
            absolute top-0 object-cover
            border border-zinc-800
            bg-black
          "
          style={{
            width,
            height,
            left: gap * 3,
            zIndex: 1,
          }}
          initial={{ scale: 0.82, x: gap, rotateY: -12, opacity: 0.45 }}
          animate={{ scale: 0.82, x: gap, rotateY: -12, opacity: 0.45 }}
          transition={{ duration: 0.35 }}
        />
      </div>
    </div>
  );
}
