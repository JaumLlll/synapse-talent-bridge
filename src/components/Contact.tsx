import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", type: "empresa", message: "" });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("contacts").insert({
        name: form.name,
        email: form.email,
        type: form.type,
        message: form.message,
      });
      if (error) throw error;
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });
      setForm({ name: "", email: "", type: "empresa", message: "" });
    } catch {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-glow opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary font-medium mb-3 tracking-widest uppercase text-sm">Contato</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
              Vamos <span className="text-gradient-hero">construir juntos</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Seja empresa ou jovem talento, queremos ouvir você.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="glass rounded-xl p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Nome</label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Seu nome"
                  required
                  className="bg-muted/50 border-border"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="seu@email.com"
                  required
                  className="bg-muted/50 border-border"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Eu sou</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, type: "empresa" })}
                  className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                    form.type === "empresa"
                      ? "bg-gradient-primary text-primary-foreground shadow-glow-primary"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Uma Empresa
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, type: "jovem" })}
                  className={`flex-1 py-3 rounded-lg text-sm font-medium transition-all ${
                    form.type === "jovem"
                      ? "bg-gradient-secondary text-secondary-foreground shadow-glow-secondary"
                      : "bg-muted text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Um Jovem
                </button>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Mensagem</label>
              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Conte-nos como podemos ajudar..."
                rows={4}
                required
                className="bg-muted/50 border-border resize-none"
              />
            </div>

            <Button variant="hero" size="lg" type="submit" className="w-full text-base" disabled={loading}>
              {loading ? <><Loader2 className="mr-2 animate-spin" size={18} /> Enviando...</> : <>Enviar mensagem <Send className="ml-2" size={18} /></>}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
