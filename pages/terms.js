// pages/terms.js
import Head from 'next/head'
import React from 'react'

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>NoirHive — Terms of Use</title>
        <meta name="description" content="NoirHive Terms of Use — personal media management platform" />
      </Head>

      <main style={styles.container}>
        <article style={styles.card}>
          <header>
            <h1 style={styles.title}>NoirHive – Terms of Use</h1>
            <p style={styles.effective}><strong>Effective Date:</strong> 15-08-2025</p>
          </header>

          <section style={styles.section}>
            <p>
              Welcome to NoirHive. By accessing or using this platform, you agree to comply with and be bound by these Terms of Use (“Terms”). If you do not agree, you must not use NoirHive.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>1. Purpose of NoirHive</h2>
            <p>
              NoirHive is a personal media management platform designed to organize, track, and enjoy movies, series, and related content. NoirHive itself does not host, sell, or distribute copyrighted media.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>2. Permitted Use</h2>
            <p>You may use NoirHive only for:</p>
            <ul>
              <li>Personal and non-commercial purposes.</li>
              <li>Streaming or managing media files you are legally entitled to access.</li>
              <li>Educational, testing, or demonstration purposes.</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>3. Prohibited Use</h2>
            <p>You agree not to use NoirHive to:</p>
            <ul>
              <li>Upload, share, or distribute pirated or unauthorized content.</li>
              <li>Resell, sublicense, or exploit the platform for commercial purposes.</li>
              <li>Circumvent copyright, DRM, or regional restrictions.</li>
              <li>Engage in illegal, abusive, or harmful activities.</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>4. Intellectual Property</h2>
            <p>
              All platform code, features, and branding of NoirHive remain the intellectual property of its developers. All movies, series, or other media accessed via NoirHive remain the property of their respective rights holders. NoirHive does not claim ownership over user-uploaded or third-party content.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>5. User Responsibility</h2>
            <p>
              You are solely responsible for ensuring compliance with copyright and media laws in your region. NoirHive’s creators do not endorse or condone piracy. Any misuse of NoirHive is your responsibility alone.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>6. Disclaimer of Warranties</h2>
            <p>
              NoirHive is provided “as is” and “as available” without warranties of any kind, whether express or implied. We do not guarantee uninterrupted or error-free access.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law:
            </p>
            <ul>
              <li>NoirHive and its developers shall not be liable for any damages, data loss, or legal issues arising from your use of the platform.</li>
              <li>Your sole remedy for dissatisfaction with NoirHive is to discontinue its use.</li>
            </ul>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>8. Changes to Terms</h2>
            <p>
              We may update or revise these Terms at any time. Continued use of NoirHive after updates constitutes your acceptance of the revised Terms.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>9. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of <strong>[Insert Jurisdiction]</strong>. Any disputes shall be resolved in the courts of <strong>[Insert Location]</strong>.
            </p>
            <p style={{ marginTop: 8, fontSize: 14, color: '#444' }}>
              <em>Tip:</em> Replace the placeholders above with your preferred governing law & jurisdiction before publishing.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.h2}>10. Contact</h2>
            <p>
              For questions regarding these Terms, please contact us at:
              <br />
              <a href="mailto:noirhive@proton.me">noirhive@proton.me</a>
            </p>
          </section>

          <footer style={styles.footer}>
            <p><strong>Summary:</strong> NoirHive is for personal, non-commercial use only. Do not use it for piracy or redistribution. By using NoirHive, you accept full responsibility for how you access and manage your media.</p>
          </footer>
        </article>
      </main>
    </>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    padding: '40px 20px',
    background: '#f8fafc',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    color: '#0f172a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  card: {
    width: '100%',
    maxWidth: 920,
    background: '#fff',
    borderRadius: 10,
    padding: 28,
    boxShadow: '0 6px 24px rgba(15,23,42,0.08)',
  },
  title: {
    margin: 0,
    fontSize: 28,
    fontWeight: 700,
    color: '#0b1220',
  },
  effective: {
    marginTop: 8,
    marginBottom: 18,
    color: '#334155',
    fontSize: 14,
  },
  section: {
    marginBottom: 18,
    lineHeight: 1.6,
    color: '#1f2937',
  },
  h2: {
    fontSize: 18,
    marginBottom: 8,
    color: '#0b1220',
  },
  footer: {
    marginTop: 8,
    paddingTop: 12,
    borderTop: '1px solid #e6eef6',
    color: '#334155',
    fontSize: 14,
  },
}
