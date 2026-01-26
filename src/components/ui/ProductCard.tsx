import type { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-dark-surface
        rounded-2xl shadow-lg
        p-6 flex flex-col items-center
        transform transition-all duration-300
        hover:scale-105 hover:shadow-xl
        ${className}
      `}
    >
      <div className="relative w-32 h-32 mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover rounded-full border-4 border-pastel-purple/20 dark:border-pastel-blue/30"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pastel-purple/0 to-pastel-purple/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-xl font-semibold text-pastel-purple dark:text-pastel-blue mb-2">
        {product.name}
      </h3>
      <p className="text-gray-600 dark:text-dark-muted text-center mb-4">{product.description}</p>
      {product.price && (
        <span className="text-lg font-bold text-pastel-purple dark:text-pastel-yellow">
          {product.price}
        </span>
      )}
    </div>
  );
}
