import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '(425) 673-6444',
      href: 'tel:(425)673-6444',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contact@darcieslaundrywa.com',
      href: 'mailto:contact@darcieslaundrywa.com',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '4615 196th St SW Suite 135, Lynnwood, WA 98036',
      href: 'https://maps.google.com/?q=4615+196th+St+SW+Suite+135+Lynnwood+WA+98036',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon-Sun: 6:00 AM - 9:00 PM',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us using any of the methods below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : '_self'}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : ''}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg hover:border-accent border-2 border-transparent transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="font-bold text-foreground">{info.label}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {info.value}
                </p>
              </a>
            );
          })}
        </div>

        {/* Map Section */}
        <div className="rounded-lg overflow-hidden shadow-lg h-96 mb-12">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2714.5678901234567!2d-122.31234567890123!3d47.81234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905c5c5c5c5c5d%3A0x1234567890abcdef!2s4615%20196th%20St%20SW%20Suite%20135%2C%20Lynnwood%2C%20WA%2098036!5e0!3m2!1sen!2sus!4v1234567890123"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience the Darcie's Laundry difference?
          </p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black"
            onClick={() => window.location.href = 'tel:(425)673-6444'}
          >
            Call Us Today
          </Button>
        </div>
      </div>
    </section>
  );
}
