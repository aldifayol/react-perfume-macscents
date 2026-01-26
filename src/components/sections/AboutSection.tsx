import { AnimatedSection } from '../ui/AnimatedSection';

export function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 md:px-8 py-12 md:py-16 bg-pastel-yellow/60 dark:bg-dark-surface/30 text-center"
    >
      <AnimatedSection animation="fade-in-down">
        <h2 className="text-2xl md:text-3xl font-bold text-pastel-purple dark:text-pastel-blue mb-4">
          Tentang Macscents
        </h2>
      </AnimatedSection>

      <AnimatedSection animation="fade-in-up" delay={200}>
        <p className="text-lg text-gray-700 dark:text-dark-muted max-w-2xl mx-auto">
          Macscents adalah brand parfum lokal yang menghadirkan aroma berbeda dari yang lain.
          Setiap varian kami dirancang untuk menonjolkan karakter unik, dengan bahan berkualitas
          dan sentuhan modern. Jadikan harimu lebih percaya diri dengan aroma khas Macscents.
        </p>
      </AnimatedSection>
    </section>
  );
}
