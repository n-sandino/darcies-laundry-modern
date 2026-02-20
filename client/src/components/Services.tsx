import { Shirt, Droplet, Truck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Wash & Fold',
      description: 'Professional laundry cleaning and folding service. Drop off your clothes and we handle the rest with care and attention to detail.',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/LFHPbmgYt9sZwtx87BG5mE/sandbox/eFW14cz0fTPtC6jBqXJXFx-img-2_1771611750000_na1fn_d2FzaC1mb2xkLXNlcnZpY2U.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80',
      icon: Shirt,
    },
    {
      id: 2,
      title: 'Self-Service Laundry',
      description: 'High-quality machines available 24/7. Wash and dry your clothes at your convenience in our clean, well-maintained facility.',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/LFHPbmgYt9sZwtx87BG5mE/sandbox/eFW14cz0fTPtC6jBqXJXFx-img-3_1771611752000_na1fn_c2VsZi1zZXJ2aWNlLW1hY2hpbmVz.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80',
      icon: Droplet,
    },
    {
      id: 3,
      title: 'Pick-Up & Delivery',
      description: 'We come to you! Schedule a pick-up from your home and receive freshly cleaned and folded laundry at your doorstep.',
      image: 'https://private-us-east-1.manuscdn.com/sessionFile/LFHPbmgYt9sZwtx87BG5mE/sandbox/eFW14cz0fTPtC6jBqXJXFx-img-4_1771611748000_na1fn_cGlja3VwLWRlbGl2ZXJ5.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80',
      icon: Truck,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive laundry solutions tailored to your lifestyle and needs.
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
              >
                {/* Image */}
                <div className={isEven ? 'md:order-1' : 'md:order-2'}>
                  <div className="relative overflow-hidden rounded-lg shadow-lg h-80 md:h-96">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={isEven ? 'md:order-2' : 'md:order-1'}>
                  <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-black" />
                  </div>
                    <h3 className="text-3xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
