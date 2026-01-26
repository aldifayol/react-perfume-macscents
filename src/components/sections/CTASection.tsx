import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { whatsappOrderLink } from '../../constants/contact';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

export function CTASection() {
  return (
    <section className="px-6 md:px-8 py-12 md:py-16 bg-pastel-blue/40 dark:bg-dark-surface/30 text-center">
      <AnimatedSection animation="scale-in">
        <h2 className="text-xl md:text-2xl font-bold text-pastel-purple dark:text-pastel-blue mb-4">
          Tertarik Memesan?
        </h2>
      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" delay={150}>
        <p className="text-lg text-gray-700 dark:text-dark-muted mb-8 max-w-xl mx-auto">
          Klik tombol di bawah untuk konsultasi dan pemesanan langsung via WhatsApp.
        </p>
      </AnimatedSection>

      <AnimatedSection animation="bounce-in" delay={300}>
        <a href={whatsappOrderLink} target="_blank" rel="noopener noreferrer">
          <Button size="lg">
            <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
            Hubungi Kami
          </Button>
        </a>
      </AnimatedSection>
    </section>
  );
}
