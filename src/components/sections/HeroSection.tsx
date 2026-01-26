import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

export function HeroSection() {
  const handleExploreClick = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-8 py-12 md:py-16 bg-pastel-blue/40 dark:bg-dark-surface/50"
    >
      <AnimatedSection animation="slide-in-left" className="md:w-1/2 space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-pastel-purple dark:text-pastel-blue mb-4">
          Temukan Karakter Unikmu Bersama{' '}
          <span className="text-pastel-green dark:text-pastel-yellow">Macscents</span>
        </h1>
        <p className="text-lg text-gray-700 dark:text-dark-muted">
          Wangian bukan sekadar aroma, tapi ekspresi karakter. Macscents menghadirkan parfum
          dengan keunikan dan kualitas premium, siap menemani setiap momen spesialmu.
        </p>
        <Button onClick={handleExploreClick} size="lg">
          Explore Our Scents
        </Button>
      </AnimatedSection>

      <AnimatedSection animation="slide-in-right" delay={200} className="md:w-1/2 mt-10 md:mt-0">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80"
          alt="Macscents Perfume"
          className="w-full rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
        />
      </AnimatedSection>
    </section>
  );
}
