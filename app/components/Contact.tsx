'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Siren, Send, CheckCircle, AlertCircle } from 'lucide-react';
import styles from './Contact.module.css';
import EmergencyModal from './EmergencyModal';

const REASONS = [
  'General enquiry',
  'Request a product sample',
  'Distributor / partnership',
  'Investor relations',
  'Press / media',
  'Medical professional',
  'Emergency services',
];

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@antiven.com';

const infoCards = [
  { Icon: Mail, title: 'General Enquiries', value: CONTACT_EMAIL },
  { Icon: Phone, title: 'Phone', value: '207-947-1999' },
  { Icon: MapPin, title: 'Mailing Address', value: 'PO Box 52,\nDetroit, ME 04929' },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [emergencyOpen, setEmergencyOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', reason: '', message: '' });
      } else {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (err: unknown) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <section id="contact" className={`section section--alt ${styles.section}`}>
        <div className="container">
          <div className={styles.header}>
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">Contact Antiven Pen®</h2>
            <p className="section-subtitle">
              Whether you are a healthcare professional, distributor, investor or emergency responder — we want to hear from you.
            </p>
          </div>

          <div className={styles.layout}>
            {/* Left: info cards */}
            <div className={styles.info}>
              {infoCards.map(({ Icon, title, value }) => (
                <div key={title} className={styles.infoCard}>
                  <span className={styles.infoIcon}>
                    <Icon size={22} strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <div>
                    <h4 className={styles.infoTitle}>{title}</h4>
                    <p className={styles.infoValue}>{value}</p>
                  </div>
                </div>
              ))}

              {/* Emergency button */}
              <div className={styles.emergencyWrap}>
                <button
                  className={styles.emergencyBtn}
                  onClick={() => setEmergencyOpen(true)}
                  aria-label="Open emergency first aid instructions"
                >
                  <Siren size={18} strokeWidth={2} aria-hidden="true" />
                  Emergency First Aid Instructions
                </button>
                <p className={styles.emergencyNote}>
                  Immediate guidance for venom emergencies — no waiting.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className={styles.formWrap}>
              {status === 'success' ? (
                <div className={styles.successState} aria-live="polite">
                  <div className={styles.successIcon}>
                    <CheckCircle size={52} strokeWidth={1.5} color="#27ae60" aria-hidden="true" />
                  </div>
                  <h3 className={styles.successTitle}>Message Sent</h3>
                  <p className={styles.successText}>
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <button
                    className="btn btn-outline"
                    onClick={() => setStatus('idle')}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  className={styles.form}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                >
                  <h3 className={styles.formTitle}>Send a Message</h3>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="name">Full Name *</label>
                      <input
                        className={styles.input}
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        aria-required="true"
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="email">Email Address *</label>
                      <input
                        className={styles.input}
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={handleChange}
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="phone">Phone (optional)</label>
                      <input
                        className={styles.input}
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+44 7911 123456"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className={styles.field}>
                      <label className={styles.label} htmlFor="reason">Reason for Enquiry *</label>
                      <select
                        className={styles.select}
                        id="reason"
                        name="reason"
                        required
                        value={form.reason}
                        onChange={handleChange}
                        aria-required="true"
                      >
                        <option value="">Select a reason…</option>
                        {REASONS.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="message">Message *</label>
                    <textarea
                      className={styles.textarea}
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us more about your enquiry…"
                      value={form.message}
                      onChange={handleChange}
                      aria-required="true"
                    />
                  </div>

                  {status === 'error' && (
                    <div className={styles.errorState} role="alert" aria-live="assertive">
                      <AlertCircle size={16} strokeWidth={2} aria-hidden="true" />
                      {errorMessage}
                    </div>
                  )}

                  <button
                    type="submit"
                    className={`btn btn-primary ${styles.submitBtn}`}
                    disabled={status === 'loading'}
                    aria-label="Submit contact form"
                  >
                    {status === 'loading' ? (
                      <><span className={styles.spinner} aria-hidden="true" /> Sending…</>
                    ) : (
                      <><Send size={16} strokeWidth={2} aria-hidden="true" /> Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <EmergencyModal isOpen={emergencyOpen} onClose={() => setEmergencyOpen(false)} />
    </>
  );
}
