import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { products } from '../../constants/products';
import { whatsappOrderLink } from '../../constants/contact';
import { ProductCard } from '../ui/ProductCard';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';

export function ProductsSection() {
  return (
    <section
      id="products"
      className="px-6 md:px-8 py-12 md:py-16 bg-pastel-green/40 dark:bg-dark-bg/50"
    >
      <AnimatedSection animation="fade-in-down">
        <h2 className="text-2xl md:text-3xl font-bold text-pastel-purple dark:text-pastel-blue mb-8 text-center">
          Produk Unggulan
        </h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <AnimatedSection key={product.id} animation="scale-in" delay={index * 150}>
            <ProductCard product={product} />
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection animation="bounce-in" delay={500} className="flex justify-center mt-10">
        <a href={whatsappOrderLink} target="_blank" rel="noopener noreferrer">
          <Button size="lg">
            <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
            Explore Our Scents
          </Button>
        </a>
      </AnimatedSection>
    </section>
  );
}
