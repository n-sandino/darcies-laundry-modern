import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-2">Darcie's Laundry</h3>
            <p className="text-sm opacity-90">
              Premier laundromat in Lynnwood, WA. <br />
              Serving the community since 1998.
            </p>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Hours
            </h4>
            <div className="text-sm space-y-1 opacity-90">
              <p>Monday - Sunday</p>
              <p>6:00 AM - 9:00 PM</p>
              <p className="text-xs mt-2">*Holiday hours may vary</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Contact
            </h4>
            <div className="text-sm space-y-2 opacity-90">
              <a
                href="tel:(425)673-6444"
                className="hover:opacity-100 transition-opacity block"
              >
                (425) 673-6444
              </a>
              <a
                href="mailto:contact@darcieslaundrywa.com"
                className="hover:opacity-100 transition-opacity block"
              >
                contact@darcieslaundrywa.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Location
            </h4>
            <div className="text-sm opacity-90">
              <p>4615 196th St SW</p>
              <p>Suite 135</p>
              <p>Lynnwood, WA 98036</p>
              <a
                href="https://maps.google.com/?q=4615+196th+St+SW+Suite+135+Lynnwood+WA+98036"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline mt-2 inline-block"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>&copy; 2026 Darcie's Laundry. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:opacity-100 transition-opacity">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
