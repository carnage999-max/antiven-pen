'use client';

import Image from 'next/image';
import { BadgeCheck, ShieldCheck, Globe } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = [
  {
    heading: 'Products',
    items: [
      { label: 'Auto-Injector', href: '/#products' },
      { label: 'Sublingual Strips', href: '/#products' },
      { label: 'Emergency Field Kit', href: '/#products' },
      { label: 'Medical Pack', href: '/#products' },
    ],
  },
  {
    heading: 'Learn',
    items: [
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Venom Emergencies', href: '/#venom-emergencies' },
      { label: 'The Science', href: '/#science' },
      { label: 'Field Use Cases', href: '/#field-use' },
    ],
  },
  {
    heading: 'Contact',
    items: [
      { label: 'Get In Touch', href: '/#contact' },
      { label: 'Distribution', href: '/#contact' },
      { label: 'info@antiven.com', href: 'mailto:info@antiven.com' },
      { label: '207-947-1999', href: 'tel:2079471999' },
      { label: 'PO Box 52, Detroit, ME 04929', href: '/#contact' },
    ],
  },
];

const certBadges = [
  { Icon: BadgeCheck, label: 'CE Marked' },
  { Icon: ShieldCheck, label: 'ISO 13485' },
  { Icon: Globe, label: 'WHO Listed' },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.getElementById(href.slice(1));
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className="container">
          <div className={styles.grid}>
            {/* Brand */}
            <div className={styles.brand}>
              <div className={styles.brandLogo}>
                <Image
                  src="/images/anti-ven-pen-icon.png"
                  alt="Antiven Pen"
                  width={44}
                  height={44}
                  className={styles.brandIcon}
                />
                <span className={styles.brandName}>
                  antiven<span className={styles.brandPen}>pen</span>
                  <sup className={styles.brandTm}>®</sup>
                </span>
              </div>
              <p className={styles.brandTagline}>
                The antidote in your pocket. Life-saving antivenom technology for field and clinical use worldwide.
              </p>
              <div className={styles.certBadges}>
                {certBadges.map(({ Icon, label }) => (
                  <span key={label} className={styles.badge}>
                    <Icon size={14} strokeWidth={2} aria-hidden="true" />
                    {label}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className={styles.links}>
              {footerLinks.map((group) => (
                <div key={group.heading} className={styles.linkGroup}>
                  <h4 className={styles.linkHeading}>{group.heading}</h4>
                  <ul className={styles.linkList}>
                    {group.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className={styles.link}
                          onClick={(e) => {
                            if (window.location.pathname === '/' && item.href.startsWith('/#')) {
                              e.preventDefault();
                              scrollTo(item.href.replace('/', ''));
                            }
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Antiven Pen® — All rights reserved.
            </p>
            <div className={styles.legal}>
              <a href="/privacy" className={styles.legalLink}>Privacy Policy</a>
              <a href="/terms" className={styles.legalLink}>Terms of Use</a>
              <a href="/terms" className={styles.legalLink}>Medical Disclaimer</a>
            </div>
          </div>
          <p className={styles.disclaimer}>
            Antiven Pen® is a medical device. Always consult a healthcare professional.
            This product does not replace emergency medical treatment. Always seek care after any venomous bite.
          </p>
        </div>
      </div>
    </footer>
  );
}
