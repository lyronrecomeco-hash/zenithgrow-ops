import { MapPin, Clock, MessageCircle, ShieldCheck, CreditCard, Handshake } from 'lucide-react';

interface StoreFooterProps {
  companyName: string;
  phone?: string | null;
  address?: string | null;
}

export default function StoreFooter({ companyName, phone, address }: StoreFooterProps) {
  return (
    <footer className="border-t border-border/50 mt-16 bg-card/30">
      {/* Trust badges */}
      <div className="border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Handshake className="w-4.5 h-4.5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Crediário de Confiança</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">
                  Facilitamos suas compras com crediário próprio para clientes de confiança. Sem burocracia.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <CreditCard className="w-4.5 h-4.5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Parcele suas Compras</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">
                  Condições especiais de parcelamento negociadas diretamente com o vendedor.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4.5 h-4.5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">Compra Segura</p>
                <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">
                  Produtos com garantia e atendimento personalizado via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-foreground">{companyName}</h4>
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Loja local com atendimento personalizado. Trabalhamos com crediário próprio para clientes indicados e de confiança.
            </p>
          </div>

          {/* Info */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-foreground">Funcionamento</h4>
            <div className="space-y-1.5">
              {address && (
                <p className="text-[11px] text-muted-foreground flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  {address}
                </p>
              )}
              <p className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                Seg - Sáb: 8h às 18h
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-2">
            <h4 className="text-sm font-bold text-foreground">Fale Conosco</h4>
            {phone && (
              <a
                href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp: {phone}
              </a>
            )}
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Dúvidas sobre crediário ou produtos? Entre em contato pelo WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-muted-foreground/50">
            © {new Date().getFullYear()} {companyName}. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-[11px] text-muted-foreground/40">
            <span>Preços sujeitos a alteração</span>
            <span>•</span>
            <span>Estoque limitado</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
