'use client';
const PATTERN_URL = 'https://media.base44.com/images/public/6a15fb6f0fd10fd3f2cc6e4d/9bd0d684a_LIONBackgroundPatter.png';

export default function QuoteSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Pattern tile background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${PATTERN_URL}')`,
          backgroundSize: '280px 280px',
          backgroundRepeat: 'repeat',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-deep/82" />

      <div className="relative z-10 container-tight text-center">
        <p className="label-eyebrow mb-8" style={{ color: 'hsl(var(--lion-amber))' }}>
          Phil Woodmore
        </p>

        <blockquote className="font-serif-light text-[clamp(1.3rem,3.5vw,2.2rem)] italic text-cream/90 leading-relaxed max-w-3xl mx-auto">
          "The Lion doesn't ask for permission to exist — it simply becomes."
        </blockquote>

        {/* Colour stripe divider */}
        <div className="flex gap-1.5 justify-center my-8">
          <div className="w-10 h-px rounded-full bg-lion-orange" />
          <div className="w-10 h-px rounded-full" style={{ backgroundColor: 'hsl(var(--lion-teal))' }} />
          <div className="w-10 h-px rounded-full" style={{ backgroundColor: 'hsl(var(--lion-purple))' }} />
          <div className="w-10 h-px rounded-full bg-lion-amber" />
        </div>

        <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          Creator & Composer
        </p>
      </div>
    </section>
  );
}