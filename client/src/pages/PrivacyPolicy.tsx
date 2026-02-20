import { useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  const handleNavigate = (section: string) => {
    // Navigation handler for header
    window.location.href = section === 'home' ? '/' : `/#${section}`;
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header onNavigate={handleNavigate} />
      {/* Header Section */}
      <div className="bg-primary text-primary-foreground py-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-lg opacity-90">Last updated: February 2026</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="container py-12">
        <div className="max-w-3xl mx-auto prose prose-lg">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Darcie's Laundry ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect information about you in a variety of ways. The information we may collect on the site includes:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact information you voluntarily provide</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
              <li><strong>Service Information:</strong> Details about laundry services requested or inquiries made</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li>Process your requests and provide customer service</li>
              <li>Send you marketing and promotional communications</li>
              <li>Improve our website and services</li>
              <li>Respond to your inquiries and provide support</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Disclosure of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share information we have collected about you in certain situations:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
              <li><strong>By Law or to Protect Rights:</strong> If required by law or if we believe in good faith that disclosure is necessary to protect our rights</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your information with vendors, consultants, and service providers who assist us in operating our website</li>
              <li><strong>Business Transfers:</strong> Your information may be transferred as part of a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Security of Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-secondary p-4 rounded-lg">
              <p className="text-foreground font-medium">Darcie's Laundry</p>
              <p className="text-muted-foreground">4615 196th St SW Suite 135</p>
              <p className="text-muted-foreground">Lynnwood, WA 98036</p>
              <p className="text-muted-foreground">Phone: (425) 673-6444</p>
              <p className="text-muted-foreground">Email: contact@darcieslaundrywa.com</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes by updating the "Last updated" date of this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise these rights, please contact us using the information provided above.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website may use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser preferences. Disabling cookies may affect the functionality of our website.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
