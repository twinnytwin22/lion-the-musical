'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { LION_LOGO } from '@/lib/constants';

const NAV_LINKS = [
  { label: 'Story', href: '/#story' },
  { label: 'Cast & Creative', href: '/cast' },
  { label: 'Media', href: '/media' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-deep/96 backdrop-blur-md border-b py-3'
          : 'bg-transparent py-6'
      }`}
      style={scrolled ? { borderBottomColor: 'hsl(var(--lion-orange) / 0.25)' } : {}}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Dark backing ensures mix-blend-mode:screen always removes white bg */}
          <div className="bg-deep rounded-sm px-1 py-0.5">
            <img
              src={LION_LOGO}
              alt="LION"
              className="h-7 w-auto select-none"
              style={{ mixBlendMode: 'screen' }}
              draggable={false}
            />
          </div>
          <span className="hidden sm:block w-px h-5 bg-gold/30" />
          <span className="hidden sm:block font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground group-hover:text-lion-amber transition-colors duration-300">
            The Musical
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="btn-ghost text-[11px]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#tickets"
            className="ml-4 btn-primary text-[11px] py-2.5 px-6"
          >
            Get Tickets
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground/80 hover:text-gold transition-colors p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-deep/98 backdrop-blur-md border-t border-gold/10 px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="py-3 font-body text-sm tracking-widest uppercase text-foreground/70 hover:text-gold transition-colors border-b border-border last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#tickets"
            className="btn-primary mt-4 text-center text-[11px]"
          >
            Get Tickets
          </a>
        </div>
      )}
    </nav>
  );
}