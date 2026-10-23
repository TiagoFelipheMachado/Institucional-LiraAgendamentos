import type { Metadata } from 'next'
import React from 'react'
import { LiraLegalPage, type LegalSection } from '@/components/lira/LegalPage'

export const metadata: Metadata = {
  title: 'Termos de Uso | Lira Agendamentos',
  description:
    'Termos e condições de uso da plataforma Lira Agendamentos: painel de gestão, agendamento online, chatbot de WhatsApp, pagamentos e API.',
}

const sections: LegalSection[] = [
  {
    id: 'aceite',
    title: 'Aceite dos termos',
    content: (
      <p>
        Ao criar uma conta, contratar um plano ou usar qualquer funcionalidade da Lira Agendamentos
        (&quot;Lira&quot;), você declara ter lido e concordado com estes Termos de Uso e com a{' '}
        <a href="/politica-de-privacidade">Política de Privacidade</a>. Se você usa a plataforma em
        nome de uma empresa, declara ter poderes para aceitá-los em nome dela. Se não concordar, não
        utilize a plataforma.
      </p>
    ),
  },
  {
    id: 'servico',
    title: 'O que a plataforma oferece',
    content: (
      <>
        <p>
          A Lira é um software como serviço (SaaS) para negócios de serviços
          (&quot;Estabelecimentos&quot;). Conforme o plano contratado, inclui:
        </p>
        <ul>
          <li>agenda online, cadastro de clientes, serviços, profissionais e bloqueios de horário;</li>
          <li>página pública de agendamento e integração com sites WordPress;</li>
          <li>gestão de comissões, repasses, saques, caixa e maquininhas de cartão;</li>
          <li>planos e pacotes de serviços vendidos pelo Estabelecimento aos seus clientes;</li>
          <li>
            assistente virtual com inteligência artificial e atendimento humano via WhatsApp Business;
          </li>
          <li>cobrança online (Pix, boleto e cartão) por meio de provedores de pagamento parceiros;</li>
          <li>API para integração com sistemas e chatbots de terceiros.</li>
        </ul>
        <p>
          Podemos evoluir, alterar ou descontinuar funcionalidades, preservando o núcleo do serviço
          contratado.
        </p>
      </>
    ),
  },
  {
    id: 'conta',
    title: 'Cadastro e conta',
    content: (
      <ul>
        <li>Você deve ter 18 anos ou mais e fornecer informações verdadeiras e atualizadas.</li>
        <li>
          Você é responsável por manter suas credenciais em sigilo e por todas as ações realizadas na
          sua conta e pelos usuários (colaboradores) que convidar.
        </li>
        <li>
          Avise-nos imediatamente em caso de uso não autorizado pelo e-mail{' '}
          <a href="mailto:suporte@liragenda.com.br">suporte@liragenda.com.br</a>.
        </li>
      </ul>
    ),
  },
  {
    id: 'planos-pagamento',
    title: 'Planos, pagamento e cancelamento da assinatura',
    content: (
      <>
        <p>
          Os planos, valores e funcionalidades vigentes estão publicados neste site. A assinatura é
          cobrada antecipadamente, no período escolhido (mensal ou outro disponível), por meio do
          nosso provedor de pagamentos.
        </p>
        <p>
          A falta de pagamento pode levar à suspensão do acesso até a regularização. Você pode cancelar
          a assinatura a qualquer momento; o acesso permanece até o fim do período já pago, sem
          reembolso proporcional, ressalvado o direito de arrependimento de 7 dias previsto no Código
          de Defesa do Consumidor, quando aplicável.
        </p>
        <p>
          Reajustes de preço serão comunicados com antecedência mínima de 30 dias e valerão a partir
          do período seguinte.
        </p>
      </>
    ),
  },
  {
    id: 'pagamentos-online',
    title: 'Pagamentos online dos clientes do Estabelecimento',
    content: (
      <>
        <p>
          Quando o Estabelecimento ativa a cobrança online, os pagamentos são processados por
          provedores parceiros (como Asaas e Mercado Pago), sujeitos também aos termos desses
          provedores. A Lira não armazena dados de cartão e não é instituição financeira.
        </p>
        <p>
          Pode incidir uma taxa da plataforma sobre cada pagamento online, conforme o plano, além das
          tarifas do próprio provedor. Reembolsos, estornos, chargebacks e a relação de consumo com o
          cliente final são de responsabilidade do Estabelecimento.
        </p>
      </>
    ),
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp e assistente virtual',
    content: (
      <>
        <p>
          A integração com o WhatsApp usa a WhatsApp Business Platform da Meta. Ao conectar seu número,
          o Estabelecimento autoriza a Lira a enviar e receber mensagens em seu nome e se compromete a
          cumprir os{' '}
          <a href="https://www.whatsapp.com/legal/business-terms" target="_blank" rel="noopener noreferrer">
            Termos do WhatsApp Business
          </a>{' '}
          e a{' '}
          <a href="https://business.whatsapp.com/policy" target="_blank" rel="noopener noreferrer">
            Política Comercial do WhatsApp
          </a>
          , incluindo obter o consentimento (opt-in) dos clientes antes de enviar mensagens
          proativas e não enviar spam.
        </p>
        <p>
          Eventuais cobranças da Meta por conversas, bem como bloqueios ou restrições aplicados pela
          Meta ao número do Estabelecimento, não são de responsabilidade da Lira.
        </p>
        <p>
          O assistente virtual usa inteligência artificial e pode cometer erros. O Estabelecimento deve
          revisar as configurações, acompanhar as conversas e assumir o atendimento sempre que
          necessário. As respostas da IA não constituem aconselhamento profissional (médico, estético,
          jurídico ou outro).
        </p>
      </>
    ),
  },
  {
    id: 'responsabilidades',
    title: 'Responsabilidades do Estabelecimento',
    content: (
      <>
        <p>O Estabelecimento é responsável por:</p>
        <ul>
          <li>
            os dados de clientes e colaboradores que insere na plataforma, atuando como controlador
            desses dados nos termos da LGPD e possuindo base legal para tratá-los;
          </li>
          <li>a prestação dos serviços agendados, preços, políticas de cancelamento e reembolso;</li>
          <li>o conteúdo das mensagens enviadas aos clientes e das configurações do assistente;</li>
          <li>o cumprimento das leis aplicáveis à sua atividade, inclusive fiscais e de consumo.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'uso-proibido',
    title: 'Uso proibido',
    content: (
      <>
        <p>É proibido:</p>
        <ul>
          <li>usar a plataforma para atividades ilegais, fraude, spam ou envio de mensagens não solicitadas;</li>
          <li>inserir conteúdo ofensivo, discriminatório ou que viole direitos de terceiros;</li>
          <li>
            tentar acessar dados de outros Estabelecimentos, burlar limites de uso, realizar engenharia
            reversa ou sobrecarregar a API;
          </li>
          <li>revender ou sublicenciar o acesso sem autorização por escrito da Lira.</li>
        </ul>
        <p>O descumprimento pode levar à suspensão ou ao encerramento da conta.</p>
      </>
    ),
  },
  {
    id: 'api',
    title: 'API e integrações',
    content: (
      <p>
        Chaves de API e credenciais de integração são pessoais e intransferíveis e devem ser mantidas
        em sigilo. A Lira pode aplicar limites de requisições e revogar chaves usadas de forma abusiva
        ou insegura. Integrações de terceiros conectadas pelo Estabelecimento são regidas pelos termos
        desses terceiros.
      </p>
    ),
  },
  {
    id: 'propriedade',
    title: 'Propriedade intelectual',
    content: (
      <p>
        O software, a marca, o layout e os conteúdos da Lira pertencem à Lira Agendamentos. A
        assinatura concede apenas uma licença de uso limitada, não exclusiva e intransferível durante
        sua vigência. Os dados inseridos pelo Estabelecimento continuam sendo dele.
      </p>
    ),
  },
  {
    id: 'disponibilidade',
    title: 'Disponibilidade e limitação de responsabilidade',
    content: (
      <>
        <p>
          Empregamos esforços razoáveis para manter a plataforma disponível e segura, mas podem
          ocorrer interrupções por manutenção, falhas de terceiros (como Meta, provedores de pagamento
          e de hospedagem) ou eventos fora do nosso controle.
        </p>
        <p>
          Na máxima extensão permitida pela lei, a Lira não responde por lucros cessantes, perda de
          clientes ou danos indiretos, e sua responsabilidade total fica limitada ao valor pago pelo
          Estabelecimento nos 12 meses anteriores ao evento.
        </p>
      </>
    ),
  },
  {
    id: 'encerramento',
    title: 'Encerramento da conta e dados',
    content: (
      <p>
        Você pode encerrar sua conta a qualquer momento. Podemos encerrá-la em caso de violação destes
        termos ou inadimplência prolongada. Após o encerramento, você pode solicitar a exportação dos
        seus dados em até 30 dias; depois disso, eles são excluídos conforme a{' '}
        <a href="/politica-de-privacidade#exclusao-de-dados">Política de Privacidade</a>.
      </p>
    ),
  },
  {
    id: 'alteracoes',
    title: 'Alterações dos termos',
    content: (
      <p>
        Podemos atualizar estes termos. Mudanças relevantes serão comunicadas por e-mail ou pelo
        painel com antecedência razoável. O uso continuado após a vigência indica concordância.
      </p>
    ),
  },
  {
    id: 'foro',
    title: 'Lei aplicável e contato',
    content: (
      <p>
        Estes termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro do
        domicílio do Estabelecimento contratante para dirimir eventuais controvérsias. Dúvidas:{' '}
        <a href="mailto:atendimento@liragenda.com.br">atendimento@liragenda.com.br</a>.
      </p>
    ),
  },
]

export default function TermosDeUsoPage() {
  return (
    <LiraLegalPage
      title="Termos de Uso"
      updatedAt="22 de outubro de 2026"
      intro={
        <p>
          Estes Termos de Uso regulam o acesso e o uso da plataforma Lira Agendamentos — painel de
          gestão, página de agendamento online, API e atendimento via WhatsApp — por Estabelecimentos,
          seus colaboradores e clientes finais.
        </p>
      }
      sections={sections}
    />
  )
}
