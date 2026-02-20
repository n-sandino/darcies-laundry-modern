import { Award, Users, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    {
      icon: Award,
      value: '25+',
      label: 'Years of Excellence',
    },
    {
      icon: Users,
      value: '1000s',
      label: 'Happy Customers',
    },
    {
      icon: Clock,
      value: '7 Days',
      label: 'Open Weekly',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div>
            <div className="relative overflow-hidden rounded-lg shadow-lg h-96">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/LFHPbmgYt9sZwtx87BG5mE/sandbox/eFW14cz0fTPtC6jBqXJXFx-img-5_1771611751000_na1fn_YWJvdXQtc3RvcmUtZnJvbnQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80"
                alt="Darcie's Laundry storefront"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Darcie's Laundry
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Since 1998, Darcie's Laundry has been Lynnwood's trusted laundromat. We're not your grandfather's laundromat—we're a modern, clean, and professional facility dedicated to making laundry day easier for you.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our team takes pride in being diligent and detail-oriented. We ensure every garment is handled with care, maintaining the highest standards of cleanliness and efficiency. We manage our time efficiently to process loads quickly while maintaining premium quality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We prioritize providing excellent customer service, always ready to address any concerns and ensure our customers are satisfied. Whether you need professional wash and fold, self-service facilities, or convenient pick-up and delivery, we've got you covered.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-8 bg-secondary rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-accent rounded-lg flex items-center justify-center">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-black mb-2">
                  {stat.value}
                </h3>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
