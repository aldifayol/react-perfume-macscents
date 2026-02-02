// Backup of the Contentful integration version
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { whatsappOrderLink } from '../../constants/contact';
import { ProductCard } from '../ui/ProductCard';
import { Button } from '../ui/Button';
import { AnimatedSection } from '../ui/AnimatedSection';
import { useProducts } from '../../hooks/useProducts';

export function ProductsSection() {
  const { products, loading, error } = useProducts();

  if (loading) {
    return (
      <section id="products" className="px-6 md:px-8 py-12 md:py-16 bg-pastel-green/40 dark:bg-dark-bg/50">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pastel-purple"></div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="products" className="px-6 md:px-8 py-12 md:py-16 bg-pastel-green/40 dark:bg-dark-bg/50">
        <div className="text-center text-red-500">
          <p className="text-xl font-semibold mb-2">Ops! Gagal memuat produk.</p>
          <p className="text-sm opacity-75">{error.message}</p>
        </div>
      </section>
    );
  }

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
