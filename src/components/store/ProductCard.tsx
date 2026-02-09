import { motion } from 'framer-motion';
import { Package, ShoppingBag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

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

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect(product)}
      className="glass-card overflow-hidden cursor-pointer group hover:border-primary/30 transition-all duration-300"
    >
      <div className="aspect-square bg-secondary/50 flex items-center justify-center overflow-hidden">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
        ) : (
          <Package className="w-16 h-16 text-muted-foreground/30" />
        )}
      </div>

      <div className="p-4 space-y-2">
        {product.brand && (
          <span className="text-xs text-muted-foreground uppercase tracking-wider">{product.brand}</span>
        )}
        <h3 className="font-semibold text-foreground line-clamp-2 leading-tight">{product.name}</h3>
        <p className="text-xs text-muted-foreground">Cód: {product.code}</p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-lg font-bold text-primary">
            {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
          <Badge variant={inStock ? 'default' : 'destructive'} className="text-[10px]">
            {inStock ? 'Disponível' : 'Indisponível'}
          </Badge>
        </div>
        <button className="w-full mt-2 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all">
          <ShoppingBag className="w-4 h-4" />
          Ver Detalhes
        </button>
      </div>
    </motion.div>
  );
}
