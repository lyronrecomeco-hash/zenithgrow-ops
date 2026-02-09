interface StoreFooterProps {
  companyName: string;
}

export default function StoreFooter({ companyName }: StoreFooterProps) {
  return (
    <footer className="border-t border-border/50 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} {companyName}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
