'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Products.module.css';

const products = [
  {
    id: 'auto-injector',
    name: 'Antiven Pen® Auto-Injector',
    tagline: 'Instant field-ready antivenom',
    description:
      'The flagship Antiven Pen® delivers a precisely calibrated antivenom dose via auto-injector mechanism. No medical training required — remove cap, press, hold for 10 seconds.',
    image: '/media/images/single-pen-close-up.png',
    packImage: '/media/images/branded-pack-of-anti-ven.png',
    specs: [
      { label: 'Dose', value: '2 mg precision-calibrated' },
      { label: 'Delivery', value: 'Auto-injector, intramuscular' },
      { label: 'Onset', value: '<2 minutes systemic absorption' },
      { label: 'Duration', value: 'Active for 4–6 hours' },
      { label: 'Storage', value: '2–25°C, 36-month shelf life' },
      { label: 'Weight', value: '28g (ready to use)' },
    ],
    coverage: ['Snake venom', 'Spider venom', 'Scorpion venom'],
    highlight: true,
    badge: 'Flagship',
    badgeColor: 'var(--color-accent)',
  },
  {
    id: 'sublingual-strips',
    name: 'Antiven Sublingual Strips',
    tagline: 'Oral route for secondary response',
    description:
      'Sublingual strips dissolve under the tongue for rapid mucosal absorption. Ideal for patients who struggle with injections or as a secondary maintenance dose following the pen administration.',
    image: '/media/images/pack-of-antiven-sublingual-strips.png',
    packImage: '/media/images/close-up-on-sublingual-strips-with-rodents-in-background.png',
    specs: [
      { label: 'Form', value: 'Dissolving film strip' },
      { label: 'Route', value: 'Sublingual (under tongue)' },
      { label: 'Onset', value: '3–5 minutes via mucosa' },
      { label: 'Pack size', value: '6 strips per pack' },
      { label: 'Storage', value: 'Room temperature, 24 months' },
      { label: 'Use', value: 'Secondary dose or mild cases' },
    ],
    coverage: ['Snake venom (mild)', 'Scorpion sting', 'Marine venom'],
    highlight: false,
    badge: 'Oral Route',
    badgeColor: 'var(--color-primary)',
  },
  {
    id: 'field-kit',
    name: 'Emergency Field Kit',
    tagline: 'Complete field response bundle',
    description:
      'A comprehensive carry-anywhere kit including two Antiven Pens, a strip pack, alcohol swabs, tourniquet, emergency card and field instructions. Used by military, rangers and outdoor professionals.',
    image: '/media/images/pen-types-displayed-product-view.png',
    packImage: '/media/images/anti-ven-pen-packs-in-store-rack.png',
    specs: [
      { label: 'Contents', value: '2× Pen + 6× Strips + kit' },
      { label: 'Case', value: 'Hard-shell water-resistant' },
      { label: 'Weight', value: '180g complete' },
      { label: 'Storage', value: '2–30°C, 3 years' },
      { label: 'Instructions', value: '12-language quick guide' },
      { label: 'Target users', value: 'Military, rangers, medics' },
    ],
    coverage: ['Full-spectrum coverage', 'Snake', 'Spider', 'Scorpion', 'Marine'],
    highlight: false,
    badge: 'Bundle',
    badgeColor: '#27ae60',
  },
  {
    id: 'medical-pack',
    name: 'Professional Medical Pack',
    tagline: 'Clinical-grade multi-dose supply',
    description:
      'Designed for clinics, hospitals and NGOs operating in high-risk regions. Contains 10 pens, 30 strips, clinical monitoring tools and a CMS-linked stock management system.',
    image: '/media/images/single-pen-close-up.png',
    packImage: '/media/images/branded-pack-of-anti-ven.png',
    specs: [
      { label: 'Contents', value: '10× Pen + 30× Strips' },
      { label: 'Temperature', value: 'Cold chain 2–8°C' },
      { label: 'Certification', value: 'ISO 13485 / CE marked' },
      { label: 'Tracking', value: 'QR batch-coded vials' },
      { label: 'Supply', value: '6-month supply/clinic' },
      { label: 'Target users', value: 'Clinics, NGOs, Emergency services' },
    ],
    coverage: ['All venom types', 'Paediatric dosing', 'Cross-reactive formulas'],
    highlight: false,
    badge: 'Clinical',
    badgeColor: '#2980b9',
  },
];

interface ProductCardProps {
  product: (typeof products)[0];
  isActive: boolean;
  onClick: () => void;
}

function ProductCard({ product, isActive, onClick }: ProductCardProps) {
  return (
    <button
      className={`${styles.card} ${isActive ? styles.cardActive : ''} ${product.highlight ? styles.cardFeatured : ''}`}
      onClick={onClick}
      aria-pressed={isActive}
      aria-label={`View ${product.name}`}
    >
      {product.badge && (
        <span className={styles.badge} style={{ background: product.badgeColor }}>
          {product.badge}
        </span>
      )}
      <div className={styles.cardImageWrap}>
        <Image
          src={product.image}
          alt={product.name}
          width={160}
          height={200}
          className={styles.cardImage}
        />
      </div>
      <h3 className={styles.cardName}>{product.name}</h3>
      <p className={styles.cardTagline}>{product.tagline}</p>
    </button>
  );
}

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0);
  const product = products[activeProduct];

  return (
    <section id="products" className={`section section--alt ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-label">Our Products</span>
          <h2 className="section-title">The Antiven Product Range</h2>
          <p className="section-subtitle">
            From personal carry to clinical supply — a complete antivenom solution for every scenario and scale.
          </p>
        </div>

        {/* Product selector */}
        <div className={styles.selector} role="list">
          {products.map((p, i) => (
            <ProductCard
              key={p.id}
              product={p}
              isActive={activeProduct === i}
              onClick={() => setActiveProduct(i)}
            />
          ))}
        </div>

        {/* Active product detail */}
        <div key={product.id} className={styles.detail} aria-live="polite">
          <div className={styles.detailImage}>
            <div className={styles.detailImageInner}>
              <Image
                src={product.packImage}
                alt={`${product.name} packaging`}
                fill
                className={styles.detailImg}
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
            <div className={styles.detailProductFloat}>
              <Image
                src={product.image}
                alt={product.name}
                width={180}
                height={240}
                className={styles.detailProductImg}
              />
            </div>
          </div>

          <div className={styles.detailContent}>
            <span className={styles.detailBadge} style={{ background: product.badgeColor }}>
              {product.badge}
            </span>
            <h3 className={styles.detailName}>{product.name}</h3>
            <p className={styles.detailTagline}>{product.tagline}</p>
            <p className={styles.detailDesc}>{product.description}</p>

            {/* Specs */}
            <div className={styles.specs}>
              <h4 className={styles.specsTitle}>Technical Specifications</h4>
              <div className={styles.specsGrid}>
                {product.specs.map((spec) => (
                  <div key={spec.label} className={styles.spec}>
                    <span className={styles.specLabel}>{spec.label}</span>
                    <span className={styles.specValue}>{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Coverage */}
            <div className={styles.coverage}>
              <h4 className={styles.coverageTitle}>Venom Coverage</h4>
              <div className={styles.coverageTags}>
                {product.coverage.map((c) => (
                  <span key={c} className={styles.coverageTag}>{c}</span>
                ))}
              </div>
            </div>

            <div className={styles.detailCta}>
              <button
                className="btn btn-primary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Enquire About This Product
              </button>
              <button
                className="btn btn-outline"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Request Samples
              </button>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.shapeDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path d="M0,40 Q360,80 720,20 Q1080,-20 1440,40 L1440,80 L0,80 Z" fill="var(--color-bg)" />
        </svg>
      </div>
    </section>
  );
}
