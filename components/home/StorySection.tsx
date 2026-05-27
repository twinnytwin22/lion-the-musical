const PATTERN_URL = 'https://media.base44.com/images/public/6a15fb6f0fd10fd3f2cc6e4d/9bd0d684a_LIONBackgroundPatter.png';

export default function StorySection() {
  return (
    <section id="story" className="relative py-32 px-6 md:px-12 lg:px-20 bg-deep overflow-hidden">

      {/* Subtle pattern in the background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url('${PATTERN_URL}')`,
          backgroundSize: '240px 240px',
          backgroundRepeat: 'repeat',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-lion-amber/40" />
            <p className="font-body text-[11px] tracking-[0.3em] uppercase" style={{ color: 'hsl(var(--lion-amber))' }}>
              The World of LION
            </p>
            <div className="h-px w-12 bg-lion-amber/40" />
          </div>
          <h2 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] font-bold text-cream leading-[1.1]">
            Two Worlds.<br />
            <em className="not-italic" style={{ color: 'hsl(var(--lion-amber))' }}>One Journey.</em>
          </h2>
        </div>

        {/* World cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-24">

          {/* Amahle */}
          <div className="relative group rounded-lg overflow-hidden border border-white/5"
            style={{ background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(22 30% 8%) 100%)' }}>
            {/* top accent bar */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, hsl(var(--lion-orange)), hsl(var(--lion-amber)))' }} />
            <div className="p-10 md:p-12 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center border border-lion-amber/30"
                  style={{ background: 'hsl(var(--lion-amber) / 0.1)' }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-lion-amber" />
                </div>
                <p className="font-body text-[11px] tracking-[0.25em] uppercase font-medium" style={{ color: 'hsl(var(--lion-amber))' }}>
                  The Amahle Grounds
                </p>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-cream">
                Radiant. Rooted.<br />Ordered.
              </h3>
              <div className="h-px w-10 bg-lion-amber/30" />
              <p className="font-body text-sm leading-[1.85] text-muted-foreground">
                Expansive, sunlit, and steeped in tradition — the Amahle Grounds evoke the majesty of the Serengeti. A place of order, legacy, and unspoken rules where strength is measured by courage and conformity. Open space, elevated platforms, and natural textures suggest grasslands, rock formations, and vast sky.
              </p>
            </div>
          </div>

          {/* Swamplands */}
          <div className="relative group rounded-lg overflow-hidden border border-white/5"
            style={{ background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(250 20% 8%) 100%)' }}>
            {/* top accent bar */}
            <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, hsl(var(--lion-purple)), hsl(var(--lion-magenta)))' }} />
            <div className="p-10 md:p-12 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center border border-lion-purple/30"
                  style={{ background: 'hsl(var(--lion-purple) / 0.1)' }}>
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: 'hsl(var(--lion-purple))' }} />
                </div>
                <p className="font-body text-[11px] tracking-[0.25em] uppercase font-medium" style={{ color: 'hsl(var(--lion-purple))' }}>
                  The Swamplands
                </p>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-cream">
                Murky. Nomadic.<br />Alive.
              </h3>
              <div className="h-px w-10" style={{ background: 'hsl(var(--lion-purple) / 0.4)' }} />
              <p className="font-body text-sm leading-[1.85] text-muted-foreground">
                Home to the Circus of the Veil — a nomadic community of outsiders, misfits, and artists who thrive in reinvention. Grounded and enclosed, featuring a shallow creek, uneven terrain, and a large weathered circus tent surrounded by wagons, ropes, lanterns, and performance apparatus.
              </p>
            </div>
          </div>
        </div>

        {/* Story narrative — centred pull quote */}
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-8 bg-lion-orange/40" />
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground">The Story</p>
            <div className="h-px w-8 bg-lion-orange/40" />
          </div>
          <blockquote className="font-serif-light text-[clamp(1.05rem,2.4vw,1.4rem)] italic text-cream/80 leading-relaxed">
            "Where Amahle values stability and lineage, the Circus celebrates transformation, imagination, and chosen family. These two worlds exist in tension — and the Lion's journey between them becomes a passage from inherited identity toward self-discovery."
          </blockquote>
          <p className="font-body text-sm text-muted-foreground/70 leading-relaxed">
            The set shifts between worlds through lighting, movement, and reconfiguration — allowing the story to flow seamlessly.
          </p>
        </div>

      </div>
    </section>
  );
}