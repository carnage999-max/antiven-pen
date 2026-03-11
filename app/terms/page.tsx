import { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Antiven Pen® Terms of Service and Medical Disclaimer.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main style={{ padding: 'var(--nav-height) 0 var(--space-20)', minHeight: '80vh' }}>
        <div className="container" style={{ maxWidth: '800px', margin: 'var(--space-20) auto' }}>
          <h1 style={{ fontSize: 'var(--font-size-4xl)', fontWeight: 800, marginBottom: 'var(--space-8)', color: 'var(--color-primary)' }}>
            Terms of Service
          </h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-10)', fontSize: 'var(--font-size-md)' }}>
            Last Updated: March 11, 2026
          </p>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>1. Acceptance of Terms</h2>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              By accessing or using the Antiven Pen® website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>2. Medical Disclaimer</h2>
            <p style={{ marginBottom: 'var(--space-6)', fontWeight: 600, color: 'var(--color-accent)' }}>
              The content on this website is for informational purposes only. Antiven Pen® is a medical device that should be used according to its specific instructions. It is NOT a replacement for emergency medical care. Always seek immediate professional medical assistance following any venomous bite or sting.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>3. Intellectual Property</h2>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              All content on this website, including text, graphics, logos, and images, is the property of Antiven Pen® or its content suppliers and is protected by international copyright and trademark laws.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>4. Limitation of Liability</h2>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              Antiven Pen® shall not be liable for any damages arising out of the use or inability to use the materials on this website, even if we have been notified of the possibility of such damage.
            </p>
          </section>

          <section style={{ marginBottom: 'var(--space-12)' }}>
            <h2 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>5. Governing Law</h2>
            <p style={{ marginBottom: 'var(--space-6)' }}>
              Any claim relating to the Antiven Pen® website shall be governed by the laws of the jurisdiction in which our company is headquartered, without regard to its conflict of law provisions.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
