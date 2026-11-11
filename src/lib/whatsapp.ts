// Número oficial do WhatsApp (somente dígitos, ex.: 5511999999999). Pendente: enviar pelos sócios.
export const WHATSAPP_NUMBER = "";

// Cada botão usa uma mensagem diferente para saber de onde veio o contato.
export const whatsappLink = (origem: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Olá! Vim pelo site e quero agendar uma conversa. (${origem})`
  )}`;
