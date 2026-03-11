'use client';

import { TreePine, Shield, Wheat, Ambulance, Globe } from 'lucide-react';
import styles from './FieldUse.module.css';

const personas = [
  {
    Icon: TreePine,
    title: 'Outdoor Explorers',
    description: 'Hikers, campers and wilderness adventurers face unpredictable terrain. Antiven Pen fits in any pack and delivers confidence on every trail.',
    stat: '60% of bites occur outdoors',
    tags: ['Hiking', 'Camping', 'Adventure travel'],
  },
  {
    Icon: Shield,
    title: 'Military & Rangers',
    description: 'Operations in remote, hostile environments with limited medical support. Antiven Pen is standard-issue for field teams operating in venomous fauna zones.',
    stat: 'Used by 12 national defence forces',
    tags: ['Military', 'Special ops', 'Rangers'],
  },
  {
    Icon: Wheat,
    title: 'Farmers & Agricultural Workers',
    description: 'Working in fields, barns and rice paddies puts workers in constant contact with venomous snakes and insects. Antiven offers rural protection where hospitals are hours away.',
    stat: '46% of global bites occur in farming',
    tags: ['Agricultural', 'Rural', 'Developing regions'],
  },
  {
    Icon: Ambulance,
    title: 'Emergency Responders',
    description: 'Paramedics and first responders rely on Antiven as first-line treatment before reaching hospital. Professional packs integrate seamlessly into emergency response kits.',
    stat: 'Recommended by WHO Snakebite Initiative',
    tags: ['EMS', 'First responders', 'Paramedics'],
  },
  {
    Icon: Globe,
    title: 'Developing World Clinics',
    description: "In regions without cold-chain access to traditional antivenom, Antiven Pen's 36-month room-temperature stability transforms local capacity to treat envenomation.",
    stat: '76% of deaths occur without treatment',
    tags: ['NGO', 'Rural clinics', 'WHO partner'],
  },
];

export default function FieldUse() {
  return (
    <section id="field-use" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Real World Use</span>
          <h2 className="section-title">Who Uses Antiven Pen®</h2>
          <p className="section-subtitle">
            From mountain trails to military operations, farming communities to city emergency rooms — Antiven Pen® protects lives wherever venom emergencies happen.
          </p>
        </div>

        <div className={styles.grid}>
          {personas.map((persona, i) => {
            const Icon = persona.Icon;
            return (
              <div key={persona.title} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.cardContent}>
                  <span className={styles.cardIcon}>
                    <Icon size={28} strokeWidth={1.5} aria-hidden="true" style={{ color: 'var(--color-primary)' }} />
                  </span>
                  <h3 className={styles.cardTitle}>{persona.title}</h3>
                  <div className={styles.cardStat}>{persona.stat}</div>
                  <p className={styles.cardDesc}>{persona.description}</p>
                  <div className={styles.tags}>
                    {persona.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>


      </div>

      <div className={styles.shapeDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,20 Q720,80 1440,0 L1440,80 L0,80 Z" fill="var(--color-bg)" />
        </svg>
      </div>
    </section>
  );
}
