'use client';

import { useEffect } from 'react';
import { ShieldOff, Syringe, Clock, PhoneCall, Ban, AlertTriangle, X } from 'lucide-react';
import styles from './EmergencyModal.module.css';

const steps = [
  {
    number: 1,
    Icon: ShieldOff,
    title: 'Stay Calm',
    body: 'Keep the patient calm and still. Raised heart rate means faster venom spread. Immobilise the bitten limb.',
  },
  {
    number: 2,
    Icon: Syringe,
    title: 'Use the Antiven Pen®',
    body: 'Remove the blue cap. Press firmly to the outer thigh or arm. Hold for 10 seconds. Do not remove before 10 seconds.',
  },
  {
    number: 3,
    Icon: Clock,
    title: 'Note the Time',
    body: 'Record exactly when the bite occurred and when Antiven was administered. Tell medical staff on arrival.',
  },
  {
    number: 4,
    Icon: PhoneCall,
    title: 'Call Emergency Services',
    body: 'Dial local emergency services immediately. Antiven buys time — hospital care is still critical.',
  },
  {
    number: 5,
    Icon: Ban,
    title: 'What NOT To Do',
    body: 'Do NOT cut the wound. Do NOT suck the venom. Do NOT apply ice. Do NOT use a tourniquet. Do NOT give aspirin or alcohol.',
  },
];

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmergencyModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.backdrop}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      role="dialog"
      aria-modal="true"
      aria-label="Emergency first aid instructions"
    >
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <span className={styles.emergencyBadge}>
              <AlertTriangle size={12} strokeWidth={2.5} aria-hidden="true" />
              EMERGENCY PROTOCOL
            </span>
            <h2 className={styles.title}>Venom Emergency<br />First Aid Guide</h2>
          </div>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close emergency modal"
          >
            <X size={18} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </div>

        <div className={styles.body}>
          {steps.map((step) => {
            const Icon = step.Icon;
            return (
              <div
                key={step.number}
                className={`${styles.step} ${step.number === 2 ? styles.stepHighlight : ''}`}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <div className={styles.stepTitle}>
                    <Icon size={18} strokeWidth={2} aria-hidden="true" />
                    {step.title}
                  </div>
                  <p className={styles.stepBody}>{step.body}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={styles.footer}>
          <div className={styles.footerNote}>
            <AlertTriangle size={14} strokeWidth={2} aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }} />
            This guide complements — it does not replace — emergency medical care.
            Always seek hospital treatment after any venomous bite, even after Antiven administration.
          </div>
          <button className="btn btn-primary" onClick={onClose}>
            Close &amp; Return
          </button>
        </div>
      </div>
    </div>
  );
}
