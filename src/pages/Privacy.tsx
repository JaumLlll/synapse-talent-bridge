import { Link } from "react-router-dom";

const Privacy = () => (
  <main className="container mx-auto px-4 py-16 max-w-3xl">
    <Link to="/" className="text-secondary text-sm hover:underline">← Voltar ao site</Link>
    <h1 className="text-3xl md:text-4xl font-heading font-bold mt-6 mb-8">Política de Privacidade (LGPD)</h1>
    <div className="space-y-6 text-muted-foreground leading-relaxed">
      <p>A DataBridge respeita a Lei Geral de Proteção de Dados (Lei nº 13.709/2018). Esta página explica como tratamos as informações de quem fala com a gente.</p>
      <h2 className="text-xl font-heading font-semibold text-foreground">Quais dados coletamos</h2>
      <p>Apenas os dados que você nos envia ao entrar em contato (como nome, telefone e mensagem) e os dados necessários para a solução contratada funcionar.</p>
      <h2 className="text-xl font-heading font-semibold text-foreground">Como usamos</h2>
      <p>Para responder seu contato, preparar propostas e prestar o serviço. Usamos só o necessário e não compartilhamos seus dados com terceiros.</p>
      <h2 className="text-xl font-heading font-semibold text-foreground">Seus direitos</h2>
      <p>Você pode pedir a qualquer momento acesso, correção ou exclusão dos seus dados pelo e-mail [e-mail].</p>
    </div>
  </main>
);

export default Privacy;
