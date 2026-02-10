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
    <div className="overflow-x-auto scrollbar-hide -mx-3 sm:-mx-0 px-3 sm:px-0">
      <div className="flex gap-2 w-max pb-1 sm:flex-wrap sm:w-auto sm:justify-center">
        <button
          onClick={() => onSelect(null)}
          className={cn(
            'px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all border whitespace-nowrap',
            !selected
              ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
              : 'bg-card/60 text-muted-foreground hover:text-foreground border-border/50'
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
              'px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all border whitespace-nowrap',
              selected === cat.id
                ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25'
                : 'bg-card/60 text-muted-foreground hover:text-foreground border-border/50'
            )}
          >
            {cat.name}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
