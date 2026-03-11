import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Antiven Pen® Privacy Policy. Learn how we handle and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 'var(--nav-height) 0 var(--space-20)', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px', margin: 'var(--space-20) auto' }}>
          <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 800, marginBottom: 'var(--space-8)', color: 'var(--color-primary)' }}>
            Privacy Policy
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-10)', fontSize: 'var(--font-size-md)' }}>
            Last Updated: March 11, 2026
          </p>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>1. Introduction</h2>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              Antiven Pen® ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>2. Information Collection</h2>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              We collect information that you provide directly to us when you fill out our contact form, including your name, email address, phone number, and any message you send.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>3. Use of Information</h2>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              We use the information we collect to respond to your enquiries, provide product information, and improve our services. We do not sell or share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>4. Medical Data</h2>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              Antiven Pen® does not collect or store individual health records on this website. Any medical enquiries sent via the contact form are treated as confidential business communications.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>5. Contact Us</h2>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              If you have any questions about this Privacy Policy, please contact us at info@antiven.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
