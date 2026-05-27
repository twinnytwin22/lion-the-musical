'use client';

export default function Footer() {
  return (
    <footer className="bg-deep py-16 px-6 md:px-12" style={{ borderTop: '2px solid hsl(var(--lion-magenta) / 0.4)' }}>
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          {/* Brand */}
          <div className="space-y-3">
            <div className="bg-deep inline-block rounded-sm px-1 py-0.5">
              <img
                src="https://media.base44.com/images/public/6a15fb6f0fd10fd3f2cc6e4d/7e46ee1e0_ChatGPTImageMay26202601_24_45PM.png"
                alt="LION"
                className="h-10 w-auto select-none"
                style={{ mixBlendMode: 'screen' }}
                draggable={false}
              />
            </div>
            <p className="font-serif-light text-base italic text-muted-foreground">A Musical by Phil Woodmore</p>
            {/* Logo-colour stripe */}
            <div className="flex gap-1 pt-2">
              <div className="w-6 h-0.5 rounded-full bg-lion-orange" />
              <div className="w-6 h-0.5 rounded-full" style={{ backgroundColor: 'hsl(var(--lion-teal))' }} />
              <div className="w-6 h-0.5 rounded-full" style={{ backgroundColor: 'hsl(var(--lion-purple))' }} />
              <div className="w-6 h-0.5 rounded-full bg-lion-amber" />
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            <div className="space-y-3">
              <p className="label-eyebrow text-[10px]">Explore</p>
              <ul className="space-y-2">
                {[
                  { label: 'Story', href: '/#story' },
                  { label: 'Cast & Creative', href: '/cast' },
                  { label: 'Media', href: '/media' },
                  { label: 'Contact', href: '/contact' },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="font-body text-sm text-muted-foreground hover:text-gold transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <p className="label-eyebrow text-[10px]">Follow</p>
              <ul className="space-y-2">
                {[
                  { label: 'Instagram', href: '#' },
                  { label: 'Facebook', href: '#' },
                  { label: 'YouTube', href: '#' },
                ].map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="font-body text-sm text-muted-foreground hover:text-gold transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground/60 tracking-wide">
            © {new Date().getFullYear()} LION The Musical. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground/40 tracking-wide">
            A Phil Woodmore Production
          </p>
        </div>
      </div>
    </footer>
  );
}