import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  name: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selected: string | null;
  onSelect: (id: string | null) => void;
}

export default function CategoryFilter({ categories, selected, onSelect }: CategoryFilterProps) {
  if (categories.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onSelect(null)}
        className={cn(
          'px-4 py-2 rounded-full text-sm font-medium transition-all border',
          !selected
            ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
            : 'glass-input text-muted-foreground hover:text-foreground border-border'
        )}
      >
        Todos
      </button>
      {categories.map((cat) => (
        <motion.button
          key={cat.id}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(cat.id)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium transition-all border',
            selected === cat.id
              ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
              : 'glass-input text-muted-foreground hover:text-foreground border-border'
          )}
        >
          {cat.name}
        </motion.button>
      ))}
    </div>
  );
}
