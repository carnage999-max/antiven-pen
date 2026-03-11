'use client';

import Image from 'next/image';
import { Microscope, Dna, Pill, Zap } from 'lucide-react';
import styles from './Science.module.css';

const mechanisms = [
  {
    Icon: Microscope,
    title: 'Toxin Neutralisation',
    color: '#1a5fb4',
    description:
      'Antiven antibody fragments bind directly to venom toxins, forming inert complexes that are safely metabolised by the body without causing further harm.',
  },
  {
    Icon: Dna,
    title: 'Antibody Fragments (Fab)',
    color: '#8e44ad',
    description:
      'Unlike full-length antibodies, Fab fragments are smaller, faster-acting, and less likely to trigger immune reactions, making them ideal for emergency field doses.',
  },
  {
    Icon: Pill,
    title: 'Peptide Inhibitors',
    color: '#27ae60',
    description:
      'Proprietary peptide inhibitors block venom phospholipase A₂ enzymes, suppressing necrotic tissue spread and buying critical time for hospital care.',
  },
  {
    Icon: Zap,
    title: 'Rapid Systemic Absorption',
    color: '#e67e22',
    description:
      'The intramuscular delivery mechanism penetrates the vascular network within 90 seconds, ensuring systemic distribution before venom can reach critical organs.',
  },
];

export default function Science() {
  return (
    <section id="science" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">The Science</span>
          <h2 className="section-title">How Antivenom Works at<br />the Molecular Level</h2>
          <p className="section-subtitle">
            Behind every Antiven Pen® is decades of toxicology research, antibody engineering and peptide chemistry designed to save lives in seconds.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left: mechanism cards */}
          <div className={styles.mechanisms}>
            {mechanisms.map((m, i) => {
              const Icon = m.Icon;
              return (
                <div
                  key={m.title}
                  className={styles.mechCard}
                  style={{ animationDelay: `${i * 0.12}s` }}
                >
                  <div className={styles.mechIcon} style={{ background: `${m.color}15`, borderColor: `${m.color}30` }}>
                    <Icon size={26} strokeWidth={1.5} color={m.color} aria-hidden="true" />
                  </div>
                  <div className={styles.mechText}>
                    <h3 className={styles.mechTitle} style={{ color: m.color }}>{m.title}</h3>
                    <p className={styles.mechDesc}>{m.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: molecular diagram + image */}
          <div className={styles.visual}>
            <div className={styles.molecularDiagram} aria-label="Molecular diagram of venom neutralisation">
              <svg viewBox="0 0 400 400" className={styles.diagramSvg} aria-hidden="true">
                <defs>
                  <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#0d2650" />
                    <stop offset="100%" stopColor="#050e1e" />
                  </radialGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <rect width="400" height="400" fill="url(#bgGrad)" rx="20" />

                {/* Venom molecule */}
                <g>
                  <circle cx="130" cy="200" r="40" fill="rgba(192,57,43,0.2)" stroke="#c0392b" strokeWidth="2" filter="url(#glow)">
                    <animate attributeName="r" values="38;44;38" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x="130" y="196" textAnchor="middle" fill="#ff8585" fontSize="13" fontWeight="700" fontFamily="system-ui">VENOM</text>
                  <text x="130" y="214" textAnchor="middle" fill="rgba(255,133,133,0.7)" fontSize="10" fontFamily="system-ui">toxin</text>
                </g>

                {/* Antiven molecule */}
                <g>
                  <circle cx="270" cy="200" r="40" fill="rgba(26,95,180,0.2)" stroke="#1a5fb4" strokeWidth="2" filter="url(#glow)">
                    <animate attributeName="r" values="38;44;38" dur="3s" repeatCount="indefinite" begin="1.5s" />
                  </circle>
                  <text x="270" y="196" textAnchor="middle" fill="#4a8fd4" fontSize="11" fontWeight="700" fontFamily="system-ui">ANTIVEN</text>
                  <text x="270" y="214" textAnchor="middle" fill="rgba(74,143,212,0.7)" fontSize="10" fontFamily="system-ui">antibody</text>
                </g>

                {/* Binding arrows */}
                <g stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="6,4" fill="none">
                  <path d="M170,200 Q200,170 230,200">
                    <animate attributeName="stroke-dashoffset" values="20;0;20" dur="2s" repeatCount="indefinite" />
                  </path>
                  <path d="M170,200 Q200,230 230,200">
                    <animate attributeName="stroke-dashoffset" values="20;0;20" dur="2s" repeatCount="indefinite" begin="1s" />
                  </path>
                </g>

                {/* Binding point */}
                <circle cx="200" cy="200" r="8" fill="#27ae60" filter="url(#glow)">
                  <animate attributeName="r" values="6;12;6" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
                </circle>

                {/* Labels */}
                <text x="200" y="290" textAnchor="middle" fill="rgba(39,174,96,0.9)" fontSize="12" fontWeight="700" fontFamily="system-ui">NEUTRALISATION</text>
                <text x="200" y="308" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="system-ui">binding complex</text>

                {/* Floating particles */}
                {[60, 330, 80, 320].map((cx, i) => (
                  <circle key={i} cx={cx} cy={[80, 100, 300, 310][i]} r="3" fill={['#c0392b','#1a5fb4','#27ae60','#e67e22'][i]} opacity="0.5">
                    <animate attributeName="cy" values={`${[80, 100, 300, 310][i]};${[70, 90, 310, 300][i]};${[80, 100, 300, 310][i]}`} dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;1;0.5" dur={`${2 + i * 0.5}s`} repeatCount="indefinite" />
                  </circle>
                ))}
              </svg>
            </div>

            {/* Science image */}
            <div className={styles.scienceImage}>
              <Image
                src="/media/images/close-up-on-antiven-pen-with-rodents-in-background.png"
                alt="Close-up of Antiven Pen in research context"
                fill
                className={styles.scienceImg}
                sizes="(max-width:768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>


      </div>

      <div className={styles.shapeDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,0 L1440,60 L1440,80 L0,80 Z" fill="var(--color-bg-alt)" />
        </svg>
      </div>
    </section>
  );
}
