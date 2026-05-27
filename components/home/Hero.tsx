'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { LION_IMG, PATTERN_URL } from '@/lib/constants';



// Expo-out easing for a theatrical, weighty entrance
const expo = [0.16, 1, 0.3, 1] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: expo },
});

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.1, delay, ease: expo },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Layers ────────────────────────────────────────────────── */}

      {/* Layer 1: full-bleed background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${PATTERN_URL}')` }}
      />

      {/* Layer 2: gradient overlay — dark at edges, lifted in centre */}
      <div className="absolute inset-0 bg-linear-to-b from-deep/90 via-deep/55 to-deep/95" />

      {/* Layer 3: pattern tile at near-invisible opacity */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `url('${PATTERN_URL}')`,
          backgroundSize: '260px 260px',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Layer 4: radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, transparent 30%, hsl(var(--deep)/0.72) 100%)',
        }}
      />

      {/* ── Content ───────────────────────────────────────────────── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto flex flex-col items-center">

        {/* Eyebrow */}
        <motion.div {...fadeUp(0.2)} className="flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-lion-amber/60" />
          <p
            className="font-body text-[9px] tracking-[0.35em] uppercase"
            style={{ color: 'hsl(var(--lion-amber))' }}
          >
            A New Musical by Phil Woodmore
          </p>
          <div className="h-px w-10 bg-lion-amber/60" />
        </motion.div>

        {/* LION logo — mix-blend-mode:screen strips the white background */}
        <motion.div
          {...fadeIn(0.45)}
          className="relative w-full max-w-120 md:max-w-160 mb-5"
        >
          <Image
            src={LION_IMG}
            alt="LION — The Musical"
            className="w-xs mx-auto drop-shadow-2xl select-none"
            style={{ mixBlendMode: 'screen' }}
            draggable={false}
            width={200}
            height={300}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.75)}
          className="font-serif-light text-[clamp(1rem,2.2vw,1.3rem)] italic text-cream/75 max-w-lg leading-relaxed mb-8 scale-75"
        >
          Between the sunlit Amahle Grounds and the Circus of the Veil —&nbsp;a
          journey from inherited identity to self-discovery.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(1.05)}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="#tickets" className="btn-primary">
            Get Tickets
          </a>
          <a href="#story" className="btn-outline">
            Discover the Story
          </a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────── */}
      <motion.a
        {...fadeIn(1.6)}
        href="#story"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/30 hover:text-lion-amber transition-colors duration-300"
      >
        <span className="font-body text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <ArrowDown size={14} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
