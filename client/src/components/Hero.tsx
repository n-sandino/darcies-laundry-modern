import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/LFHPbmgYt9sZwtx87BG5mE/sandbox/eFW14cz0fTPtC6jBqXJXFx-img-1_1771611755000_na1fn_aGVyby1sYXVuZHJ5.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTEZIUGJtZ1l0OXNad3R4ODdCRzVtRS9zYW5kYm94L2VGVzE0Y3owZlRQdEM2akJxWEpYRngtaW1nLTFfMTc3MTYxMTc1NTAwMF9uYTFmbl9hR1Z5Ynkxc1lYVnVaSEo1LnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=uVLohLqaLLSmZEJcUzP2AdCmh048OHAFZ-e8RfuRh82ERxEdcKkhgtegKBe~Fz3ELtQuPTfwgL4mERQWH7NUFXU5g-RlI~oQAp0ztHk0yCVXeaMu6i-f8MBtxm~n5wBAtZE7hah7D7mZSAd~dP4dwf5eeKN4qbZcTQIdVVy0ZL8veOeoualgEt0APwgh64CxIEl1FP57xm3EDX2MypkDs-Cyrzi5l2OsbxOKNwKxgQWkFMcXmdjeQAY-B7HSu1v82KCqF2gpBc01Io9Vy9DllO5Wcye12fokOiUMrV0EN~JkAfQe6bTbVgIgDdWwf904KiBhIjeZ1OK-CADV1-R-HQ__')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Fresh, Clean Laundry<br />Made Easy
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-95 leading-relaxed">
            Lynnwood's premier laundromat since 1998. Professional wash & fold, self-service, and convenient pick-up and delivery services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black"
              onClick={() => onNavigate('services')}
            >
              Explore Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => onNavigate('contact')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
