import { motion } from 'framer-motion';
import { Package } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  code: string;
  price: number;
  image_url: string | null;
  stock: number;
  brand: string | null;
  description: string | null;
  category_id?: string | null;
}

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export default function ProductCard({ product, onSelect }: ProductCardProps) {
  const inStock = product.stock > 0;
  const formattedPrice = product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.25 }}
      onClick={() => onSelect(product)}
      className="bg-card border border-border/60 overflow-hidden cursor-pointer group hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-200 flex flex-col rounded-xl"
    >
      {/* Image */}
      <div className="aspect-[4/3] bg-secondary/30 flex items-center justify-center overflow-hidden relative">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <Package className="w-10 h-10 text-muted-foreground/30" />
        )}
        {!inStock && (
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm flex items-center justify-center">
            <span className="text-[10px] font-semibold text-destructive bg-destructive/15 px-2.5 py-1 rounded-full border border-destructive/30">
              Esgotado
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3 sm:p-3.5 flex flex-col flex-1 gap-1.5 border-t border-border/40">
        {/* Price */}
        <span className="text-lg sm:text-xl font-bold text-foreground leading-tight">
          {formattedPrice}
        </span>

        {/* Stock badge */}
        {inStock && (
          <span className="text-[10px] sm:text-[11px] font-medium text-green-500 dark:text-green-400 leading-none">
            Disponível
          </span>
        )}

        {/* Product name */}
        <h3 className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-snug mt-0.5">
          {product.name}
        </h3>

        {/* Brand */}
        {product.brand && (
          <span className="text-[10px] text-muted-foreground/50 leading-none mt-auto pt-1">
            {product.brand}
          </span>
        )}
      </div>
    </motion.div>
  );
}
