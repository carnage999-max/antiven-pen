'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {
        // Autoplay blocked — video stays on poster
      });
    }
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero} aria-label="Hero section">
      {/* Background Video */}
      <div className={styles.videoWrapper} aria-hidden="true">
        <video
          ref={videoRef}
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          poster="/media/images/anti-ven-pen.png"
          aria-label="Man's feet walking across a dry rocky desert"
        >
          <source src="/media/hero/hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content} aria-label="Hero content">
        <div className={styles.productImageWrap}>
          <Image
            src="/media/images/anti-ven-pen.png"
            alt="Antiven Pen Auto-Injector — the antidote in your pocket"
            width={320}
            height={420}
            className={styles.productImage}
            priority
          />
        </div>

        <div className={styles.copy}>
          <div className={styles.badge}>
            <ShieldCheck size={16} strokeWidth={2.5} aria-hidden="true" />
            Life-Saving Technology
          </div>

          <h1 className={styles.headline}>
            The Antidote<br />
            <span className={styles.highlight}>in Your Pocket</span>
          </h1>

          <p className={styles.subhead}>
            Immediate antivenom delivery when seconds matter.
            The Antiven Pen® auto-injector delivers rapid field response
            for snakebite, spider bite and scorpion sting emergencies.
          </p>

          <div className={styles.stats} aria-label="Key statistics">
            <div className={styles.stat}>
              <strong>5.4M</strong>
              <span>Bites per year</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>138K+</strong>
              <span>Annual deaths</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <strong>&lt;60s</strong>
              <span>Time to administer</span>
            </div>
          </div>

          <div className={styles.cta}>
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('how-it-works')}
              aria-label="See how Antiven Pen works"
            >
              See How It Works
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
              aria-label="Get Antiven Pen"
            >
              Get Antiven
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </div>

      <hr className={styles.divider} aria-hidden="true" />
    </section>
  );
}
