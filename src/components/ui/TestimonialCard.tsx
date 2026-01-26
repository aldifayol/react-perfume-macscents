import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className = '' }: TestimonialCardProps) {
  return (
    <div
      className={`
        bg-white dark:bg-dark-surface
        rounded-2xl shadow-lg
        p-6 flex flex-col items-center
        transform transition-all duration-300
        hover:shadow-xl
        ${className}
      `}
    >
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon
            key={i}
            icon={faStar}
            className={`text-lg ${
              i < testimonial.rating
                ? 'text-yellow-400'
                : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-700 dark:text-dark-muted italic mb-4 text-center">
        "{testimonial.review}"
      </p>
      <span className="font-semibold text-pastel-purple dark:text-pastel-blue">
        - {testimonial.name}
      </span>
    </div>
  );
}
