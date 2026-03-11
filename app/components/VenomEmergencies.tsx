'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Worm, Bug, AlertTriangle, Waves, TriangleAlert, CheckCircle2, AlertCircle } from 'lucide-react';
import styles from './VenomEmergencies.module.css';

const venomTypes = [
  {
    id: 'snake',
    Icon: Worm,
    title: 'Snake Bites',
    color: '#c0392b',
    stats: '3.8M bites/year',
    symptoms: ['Severe pain and swelling', 'Tissue necrosis', 'Neurotoxic paralysis', 'Haemotoxic bleeding'],
    firstAid: [
      'Remain calm — keep heart rate low',
      'Immobilise the affected limb below heart level',
      'Administer Antiven Pen immediately',
      'Do NOT cut, suck or tourniquet the bite',
      'Get to a medical facility within 4 hours',
    ],
    image: '/images/close-up-on-antiven-pen-with-rodents-in-background.png',
    imageAlt: 'Antiven Pen with rodents and snake in background',
  },
  {
    id: 'spider',
    Icon: Bug,
    title: 'Spider Bites',
    color: '#8e44ad',
    stats: '1.2M bites/year',
    symptoms: ['Intense burning pain', 'Muscle cramps', 'Sweating and fever', 'Systemic toxicity'],
    firstAid: [
      'Do not squeeze or puncture the bite site',
      'Apply Antiven Pen to counter systemic spread',
      'Monitor breathing closely',
      'Keep patient still and hydrated',
      'Seek emergency care immediately',
    ],
    image: '/images/man-with-snake-bite-using-antiven-pen.png',
    imageAlt: 'Man administering Antiven Pen after a bite',
  },
  {
    id: 'scorpion',
    Icon: AlertTriangle,
    title: 'Scorpion Stings',
    color: '#e67e22',
    stats: '1.5M stings/year',
    symptoms: ['Severe local pain', 'Numbness and tingling', 'Respiratory distress', 'Cardiovascular effects'],
    firstAid: [
      'Remove clothing near sting site',
      'Apply Antiven Pen as soon as possible',
      'Monitor vital signs continuously',
      'Place in recovery position if unconscious',
      'Transport to ER urgently',
    ],
    image: '/images/woman-applying-antiven-pen-on-snake-bite.png',
    imageAlt: 'Woman applying Antiven Pen for treatment',
  },
  {
    id: 'marine',
    Icon: Waves,
    title: 'Marine Venom',
    color: '#1abc9c',
    stats: '750K stings/year',
    symptoms: ['Intense stinging and welts', 'Allergic anaphylaxis', 'Heart arrhythmias', 'Paralysis'],
    firstAid: [
      'Remove tentacles using card or gloves (not bare hands)',
      'Do NOT apply fresh water — use hot water',
      'Administer Antiven Pen if systemic symptoms emerge',
      'Watch for anaphylaxis signs',
      'Call emergency services',
    ],
    image: '/images/close-up-on-sublingual-strips-with-rodents-in-background.png',
    imageAlt: 'Antiven sublingual strips for marine venom treatment',
  },
];

export default function VenomEmergencies() {
  const [activeType, setActiveType] = useState(0);

  const active = venomTypes[activeType];
  const ActiveIcon = active.Icon;

  return (
    <section id="venom-emergencies" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Emergency Guide</span>
          <h2 className="section-title">Venom Emergencies</h2>
          <p className="section-subtitle">
            Envenomation requires immediate response. Learn to identify symptoms and apply the correct protocol for different venom types.
          </p>
        </div>

        {/* Type selector */}
        <div className={styles.typeSelector} role="tablist" aria-label="Venom type tabs">
          {venomTypes.map((type, i) => {
            const TabIcon = type.Icon;
            return (
              <button
                key={type.id}
                className={`${styles.typeTab} ${activeType === i ? styles.typeTabActive : ''}`}
                style={{ '--tab-color': type.color } as React.CSSProperties}
                onClick={() => setActiveType(i)}
                role="tab"
                aria-selected={activeType === i}
                aria-controls={`panel-${type.id}`}
              >
                <span className={styles.typeIcon}>
                  <TabIcon size={22} strokeWidth={1.75} aria-hidden="true" />
                </span>
                <div className={styles.typeTextStack}>
                  <span className={styles.typeLabel}>{type.title}</span>
                  <span className={styles.typeStats}>{type.stats}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active panel */}
        <div
          key={active.id}
          id={`panel-${active.id}`}
          className={styles.panel}
          role="tabpanel"
          aria-label={active.title}
          style={{ '--panel-color': active.color } as React.CSSProperties}
        >
          <div className={styles.panelImage}>
            <Image
              src={active.image}
              alt={active.imageAlt}
              fill
              className={styles.panelImg}
              sizes="(max-width:768px) 100vw, 50vw"
            />
            <div className={styles.panelImageOverlay}>
              <div className={styles.panelBadge} style={{ background: active.color }}>
                <ActiveIcon size={14} strokeWidth={2} aria-hidden="true" style={{ flexShrink: 0 }} />
                {active.title}
              </div>
            </div>
          </div>

          <div className={styles.panelContent}>
            <div className={styles.panelSection}>
              <h3 className={styles.panelSectionTitle}>
                <TriangleAlert size={18} strokeWidth={2} aria-hidden="true" style={{ color: '#e67e22' }} />
                Symptoms to Watch For
              </h3>
              <ul className={styles.symptomList}>
                {active.symptoms.map((s) => (
                  <li key={s} className={styles.symptomItem}>
                    <span className={styles.symptomDot} style={{ background: active.color }} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.panelSection}>
              <h3 className={styles.panelSectionTitle}>
                <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" style={{ color: '#27ae60' }} />
                First Aid Protocol
              </h3>
              <ol className={styles.firstAidList}>
                {active.firstAid.map((step, i) => (
                  <li key={step} className={styles.firstAidItem}>
                    <span className={styles.stepNumber} style={{ background: active.color }}>
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Get Antiven Pen for emergencies"
            >
              <AlertCircle size={16} strokeWidth={2} aria-hidden="true" />
              Get Antiven — Be Prepared
            </a>
          </div>
        </div>
      </div>

      <div className={styles.shapeDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,80 Q360,0 720,40 Q1080,80 1440,20 L1440,80 L0,80 Z" fill="var(--color-bg-alt)" />
        </svg>
      </div>
    </section>
  );
}
