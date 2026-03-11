'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Siren } from 'lucide-react';
import styles from './Navbar.module.css';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Venom Emergencies', href: '/#venom-emergencies' },
  { label: 'Products', href: '/#products' },
  { label: 'Science', href: '/#science' },
  { label: 'Field Use', href: '/#field-use' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section tracking
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (href: string) => {
    setMenuOpen(false);
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="navigation" aria-label="Main navigation">
        <div className={styles.container}>
          {/* Logo */}
          <a
            href="/"
            className={styles.logo}
            onClick={(e) => { 
              if (window.location.pathname === '/') {
                e.preventDefault(); 
                handleLinkClick('#home'); 
              }
            }}
            aria-label="Antiven Pen — go to top"
          >
            <Image
              src="/images/anti-ven-pen-icon.png"
              alt="Antiven Pen logo"
              width={36}
              height={36}
              className={styles.logoIcon}
              priority
            />
            <span className={styles.logoText}>antiven<span className={styles.logoPen}>pen</span></span>
          </a>

          {/* Desktop links */}
          <ul className={styles.links} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.link} ${activeSection === link.href.slice(1) ? styles.active : ''}`}
                  onClick={(e) => { 
                    if (window.location.pathname === '/') {
                      e.preventDefault(); 
                      handleLinkClick(link.href.replace('/', '')); 
                    }
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Emergency CTA (desktop) */}
          <a
            href="#contact"
            className={`${styles.emergencyBtn} btn btn-primary`}
            onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }}
          >
            Get Antiven
          </a>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`${styles.mobileOverlay} ${menuOpen ? styles.mobileOverlayOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className={styles.mobileLinks} role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.mobileLink}
                onClick={(e) => { 
                  if (window.location.pathname === '/') {
                    e.preventDefault(); 
                    handleLinkClick(link.href.replace('/', '')); 
                  }
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/#contact"
          className={`${styles.mobileCta} btn btn-primary`}
          onClick={(e) => { 
            if (window.location.pathname === '/') {
              e.preventDefault(); 
              handleLinkClick('#contact'); 
            }
          }}
        >
          <Siren size={20} className={styles.mobileCtaIcon} />
          Get Antiven Now
        </a>
      </div>
    </>
  );
}
