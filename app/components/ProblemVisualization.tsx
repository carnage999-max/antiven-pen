'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ProblemVisualization.module.css';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
  isVisible: boolean;
}

function AnimatedCounter({ end, suffix = '', prefix = '', label, description, isVisible }: CounterProps) {
  const [count, setCount] = useState(0);
  const animatedRef = useRef(false);

  // Logic to handle whole numbers or "mil/k" decimals
  const isLarge = end >= 1000;
  
  useEffect(() => {
    if (!isVisible || animatedRef.current) return;
    animatedRef.current = true;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      
      // Calculate display value
      setCount(eased * end);
      
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isVisible, end]);

  const displayValue = () => {
    if (end >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else if (end >= 1000) {
      return (count / 1000).toFixed(0) + 'K';
    }
    return Math.floor(count).toLocaleString();
  };

  return (
    <div className={styles.counter}>
      <div className={styles.counterValue}>
        {prefix}<span>{displayValue()}</span>{suffix}
      </div>
      <div className={styles.counterLabel}>{label}</div>
      <p className={styles.counterDescription}>{description}</p>
    </div>
  );
}

export default function ProblemVisualization() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="problem-visualization" className={`${styles.section} section`} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Global Crisis</span>
          <h2 className="section-title">
            Venom Emergencies Are a<br />
            <span style={{ color: 'var(--color-accent)' }}>Silent Pandemic</span>
          </h2>
          <p className="section-subtitle">
            Every year, millions of people are bitten by venomous creatures. Without rapid intervention, many cases result in permanent disability or death. Antiven Pen® changes the calculus.
          </p>
        </div>

        {/* Stats grid */}
        <div className={`${styles.statsGrid} ${isVisible ? styles.visible : ''}`}>
          <AnimatedCounter
            end={5400000}
            suffix="+"
            label="Venomous bites per year"
            description="An average of one snakebite every 5 seconds globally"
            isVisible={isVisible}
          />
          <AnimatedCounter
            end={138000}
            suffix="+"
            label="Annual deaths"
            description="Mostly in tropical regions with limited medical access"
            isVisible={isVisible}
          />
          <AnimatedCounter
            end={400000}
            suffix="+"
            label="Permanent disabilities"
            description="Amputations and nerve damage from delayed treatment"
            isVisible={isVisible}
          />
          <AnimatedCounter
            end={76}
            suffix="%"
            label="In rural areas"
            description="Far from hospitals — the pen bridges the critical gap"
            isVisible={isVisible}
          />
        </div>

      </div>

      {/* Shape divider */}
      <div className={styles.shapeDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,100 L1440,40 L1440,100 Z" fill="var(--color-bg-alt)" />
          <path d="M0,100 L1440,60 L1440,100 Z" fill="var(--color-bg-alt)" opacity="0.3" />
        </svg>
      </div>
    </section>
  );
}
