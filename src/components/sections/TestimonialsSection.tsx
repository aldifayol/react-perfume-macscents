import { testimonials } from '../../constants/testimonials';
import { TestimonialCard } from '../ui/TestimonialCard';
import { AnimatedSection } from '../ui/AnimatedSection';

export function TestimonialsSection() {
  return (
    <section className="px-6 md:px-8 py-12 md:py-16 bg-pastel-pink/60 dark:bg-dark-surface/40">
      <AnimatedSection animation="fade-in-down">
        <h2 className="text-2xl md:text-3xl font-bold text-pastel-purple dark:text-pastel-blue mb-8 text-center">
          Testimoni Pelanggan
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <AnimatedSection key={testimonial.id} animation="fade-in-up" delay={index * 150}>
            <TestimonialCard testimonial={testimonial} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
