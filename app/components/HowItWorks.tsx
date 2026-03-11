'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Zap, Syringe, ShieldCheck, Timer } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    number: '01',
    title: 'Bite Occurs',
    description:
      'Venom enters the bloodstream within seconds through a bite or sting. Time is critical — every moment of delay allows toxins to spread further.',
    icon: Zap,
    color: '#c0392b',
  },
  {
    number: '02',
    title: 'Antiven Administered',
    description:
      'Remove the cap, press the Antiven Pen firmly against the outer thigh or arm. A single press delivers the precise antivenom dose automatically.',
    icon: Syringe,
    color: '#1a5fb4',
  },
  {
    number: '03',
    title: 'Venom Neutralised',
    description:
      'The antibody fragments and peptide inhibitors bind to venom toxins, neutralising them before they can cause permanent tissue damage or systemic collapse.',
    icon: ShieldCheck,
    color: '#27ae60',
  },
  {
    number: '04',
    title: 'Time Gained',
    description:
      'Antiven buys critical hours for the patient to reach a medical facility for advanced care. Minutes become hours — enough time to save a life.',
    icon: Timer,
    color: '#8e44ad',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    const el = sectionRef.current;
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="how-it-works" className={`section section--alt ${styles.section}`} ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Step by Step</span>
          <h2 className="section-title">How Antiven Works</h2>
          <p className="section-subtitle">
            Four simple steps from emergency to recovery. Designed for non-medical personnel operating in the field.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Steps */}
          <div className={styles.steps}>
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <button
                  key={step.number}
                  className={`${styles.step} ${activeStep === i ? styles.stepActive : ''} ${isVisible ? styles.stepVisible : ''}`}
                  style={{ animationDelay: `${i * 0.15}s`, '--step-color': step.color } as React.CSSProperties}
                  onClick={() => setActiveStep(i)}
                  aria-label={`Step ${step.number}: ${step.title}`}
                  aria-pressed={activeStep === i}
                >
                  <div className={styles.stepNumberWrap}>
                    <span className={styles.stepNumber}>{step.number}</span>
                    <span className={styles.stepIcon}>
                      <Icon size={18} strokeWidth={2} aria-hidden="true" />
                    </span>
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                  <div className={styles.stepConnector} aria-hidden="true" />
                </button>
              );
            })}
          </div>

          {/* Animated diagram */}
          <div className={styles.diagram} aria-label="Visual diagram of Antiven Pen administration">
            <div className={styles.diagramCard}>
              <div className={styles.diagramInner}>
                {/* Active step display */}
                <div className={styles.diagramStep}>
                  {(() => {
                    const ActiveIcon = steps[activeStep].icon;
                    return (
                      <div
                        className={styles.diagramIcon}
                        style={{ background: `${steps[activeStep].color}22`, borderColor: `${steps[activeStep].color}44` }}
                      >
                        <ActiveIcon size={32} strokeWidth={1.5} color={steps[activeStep].color} aria-hidden="true" />
                      </div>
                    );
                  })()}
                  <h3 className={styles.diagramTitle} style={{ color: steps[activeStep].color }}>
                    Step {steps[activeStep].number}
                  </h3>
                  <h4 className={styles.diagramName}>{steps[activeStep].title}</h4>
                  <p className={styles.diagramDesc}>{steps[activeStep].description}</p>
                </div>

                {/* Progress dots */}
                <div className={styles.progressDots} role="tablist" aria-label="Step indicators">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      className={`${styles.dot} ${activeStep === i ? styles.dotActive : ''}`}
                      onClick={() => setActiveStep(i)}
                      aria-label={`Step ${i + 1}`}
                      role="tab"
                      aria-selected={activeStep === i}
                    />
                  ))}
                </div>
              </div>

              {/* Product image in diagram */}
              <div className={styles.diagramProduct}>
                <Image
                  src="/images/single-pen-close-up.png"
                  alt="Antiven Pen close-up"
                  width={200}
                  height={280}
                  className={styles.diagramProductImg}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Use case images */}
        <div className={styles.useImages}>
          <div className={styles.useImageCard}>
            <Image
              src="/images/man-with-snake-bite-using-antiven-pen.png"
              alt="Man using Antiven Pen after snakebite in the field"
              fill
              className={styles.useCaseImage}
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <div className={styles.useImageOverlay}>
              <span className={styles.useImageLabel}>Field Use</span>
              <p>Immediate response within reach</p>
            </div>
          </div>
          <div className={styles.useImageCard}>
            <Image
              src="/images/woman-applying-antiven-pen-on-snake-bite.png"
              alt="Woman applying Antiven Pen on a snakebite"
              fill
              className={styles.useCaseImage}
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <div className={styles.useImageOverlay}>
              <span className={styles.useImageLabel}>Self-administered</span>
              <p>No medical training required</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.shapeDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,0 Q360,80 720,40 Q1080,0 1440,60 L1440,80 L0,80 Z" fill="var(--color-bg)" />
        </svg>
      </div>
    </section>
  );
}
