import { Calendar, Mail, Users } from 'lucide-react';

export default function TicketsSection() {
  return (
    <section id="tickets" className="relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, hsl(var(--deep)) 0%, hsl(20 12% 5%) 100%)' }}>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(var(--lion-amber)/0.5), transparent)' }} />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-12 bg-lion-orange/40" />
            <p className="font-body text-[11px] tracking-[0.3em] uppercase" style={{ color: 'hsl(var(--lion-orange))' }}>
              Performances
            </p>
            <div className="h-px w-12 bg-lion-orange/40" />
          </div>
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold text-cream">
            See It Live
          </h2>
          <p className="font-body text-sm text-muted-foreground mt-4 max-w-md mx-auto leading-relaxed">
            Experience the power of LION on stage. Dates and venues to be announced soon.
          </p>
        </div>

        {/* Main announcement card */}
        <div className="relative rounded-xl overflow-hidden border border-white/8 mb-10"
          style={{ background: 'linear-gradient(135deg, hsl(var(--card)) 0%, hsl(20 10% 7%) 100%)' }}>

          {/* Accent gradient bar */}
          <div className="h-1.5" style={{ background: 'linear-gradient(90deg, hsl(var(--lion-orange)), hsl(var(--lion-amber)), hsl(var(--lion-teal)))' }} />

          <div className="p-12 md:p-16 text-center space-y-8">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center border border-lion-amber/20"
              style={{ background: 'hsl(var(--lion-amber) / 0.08)' }}>
              <Calendar size={34} style={{ color: 'hsl(var(--lion-amber))' }} />
            </div>

            <div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-cream mb-4">
                Dates Coming Soon
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Be the first to know when tickets go on sale. Join our mailing list to receive updates directly.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <a href="/contact" className="btn-primary">
                Join the Mailing List
              </a>
              <a href="/contact" className="btn-outline">
                Group Bookings
              </a>
            </div>
          </div>
        </div>

        {/* Info pills */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-center gap-4 rounded-lg border border-white/6 p-5"
            style={{ background: 'hsl(var(--card))' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'hsl(var(--lion-teal) / 0.12)', border: '1px solid hsl(var(--lion-teal) / 0.3)' }}>
              <Mail size={18} style={{ color: 'hsl(var(--lion-teal))' }} />
            </div>
            <div>
              <p className="font-body text-xs font-semibold text-cream tracking-wide">Stay Updated</p>
              <p className="font-body text-xs text-muted-foreground mt-0.5">Sign up for announcements & early access</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-white/6 p-5"
            style={{ background: 'hsl(var(--card))' }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ background: 'hsl(var(--lion-purple) / 0.12)', border: '1px solid hsl(var(--lion-purple) / 0.3)' }}>
              <Users size={18} style={{ color: 'hsl(var(--lion-purple))' }} />
            </div>
            <div>
              <p className="font-body text-xs font-semibold text-cream tracking-wide">Group Bookings</p>
              <p className="font-body text-xs text-muted-foreground mt-0.5">Special rates for groups of 10 or more</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}