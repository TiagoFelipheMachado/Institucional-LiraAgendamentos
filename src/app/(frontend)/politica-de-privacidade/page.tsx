import type { Metadata } from 'next'
import React from 'react'
import { LiraLegalPage, type LegalSection } from '@/components/lira/LegalPage'

export const metadata: Metadata = {
  title: 'Política de Privacidade | Lira Agendamentos',
  description:
    'Saiba como a Lira Agendamentos coleta, usa, compartilha e protege dados pessoais na plataforma de agendamentos, no chatbot de WhatsApp e nos pagamentos online, em conformidade com a LGPD.',
}

const sections: LegalSection[] = [
  {
    id: 'quem-somos',
    title: 'Quem somos e a quem esta política se aplica',
    content: (
      <>
        <p>
          A <strong>Lira Agendamentos</strong> (&quot;Lira&quot;, &quot;nós&quot;) oferece uma plataforma
          SaaS de gestão de agendamentos para salões, barbearias, clínicas, estúdios e outros negócios
          de serviços (&quot;Estabelecimentos&quot;). A plataforma é composta pelo painel web, pela página
          pública de agendamento, pela API e pelo assistente virtual de atendimento via WhatsApp.
        </p>
        <p>Esta política se aplica a:</p>
        <ul>
          <li>
            <strong>Estabelecimentos e seus usuários</strong> (proprietários, administradores e
            colaboradores) que contratam e usam a plataforma;
          </li>
          <li>
            <strong>Clientes finais</strong> dos Estabelecimentos, que agendam serviços pela página de
            agendamento, pelo WhatsApp ou são cadastrados pelo Estabelecimento;
          </li>
          <li>
            <strong>Visitantes</strong> deste site institucional e de seus formulários de contato.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 'papeis',
    title: 'Controlador e operador (LGPD)',
    content: (
      <>
        <p>
          Em relação aos dados das contas dos Estabelecimentos, cobrança da assinatura e visitantes do
          site, a Lira atua como <strong>controladora</strong>.
        </p>
        <p>
          Em relação aos dados dos clientes finais (agendamentos, histórico de atendimento e conversas
          no WhatsApp), o <strong>Estabelecimento é o controlador</strong> e a Lira atua como{' '}
          <strong>operadora</strong>, tratando esses dados apenas conforme as instruções do
          Estabelecimento e para prestar o serviço contratado. Solicitações de titulares sobre esses
          dados podem ser feitas diretamente ao Estabelecimento ou à Lira, que as encaminhará.
        </p>
      </>
    ),
  },
  {
    id: 'dados-coletados',
    title: 'Dados que coletamos',
    content: (
      <>
        <p>
          <strong>Conta e Estabelecimento:</strong> nome, e-mail, telefone, senha (armazenada apenas em
          formato criptografado/hash), função, especialidade e foto de perfil; razão social ou nome
          fantasia, CNPJ ou CPF, endereço, cidade, estado, horário de funcionamento, logotipo e cores da
          marca.
        </p>
        <p>
          <strong>Colaboradores:</strong> nome, especialidade, telefone, foto, serviços que realizam,
          taxas de comissão, repasses, adiantamentos e solicitações de saque.
        </p>
        <p>
          <strong>Clientes finais:</strong> nome, e-mail e telefone; agendamentos (data, horário,
          serviço, profissional, valor, forma de pagamento, status, cancelamentos); planos e
          assinaturas de cliente contratados junto ao Estabelecimento e seu uso.
        </p>
        <p>
          <strong>Atendimento via WhatsApp:</strong> número de telefone e nome de perfil do contato,
          conteúdo das mensagens trocadas com o Estabelecimento, identificadores da conversa e
          registros de quando a conversa foi atendida pelo assistente virtual ou transferida a um
          atendente humano.
        </p>
        <p>
          <strong>Integração com a Meta (WhatsApp Business):</strong> ao conectar o WhatsApp, recebemos
          da Meta o ID da conta do WhatsApp Business (WABA), o ID do número de telefone, o ID do
          Business Manager, o número exibido, o nome verificado e tokens de acesso necessários para
          enviar e receber mensagens em nome do Estabelecimento.
        </p>
        <p>
          <strong>Pagamentos:</strong> valores, status e identificadores de cobranças e links de
          pagamento. <strong>Não armazenamos dados de cartão</strong>: eles são digitados diretamente
          nas páginas seguras dos provedores de pagamento. Para recebimentos online pelo
          Estabelecimento, armazenamos CPF/CNPJ e e-mail da conta recebedora e credenciais de
          integração (criptografadas).
        </p>
        <p>
          <strong>Segurança e uso:</strong> endereço IP, registros de auditoria de ações na conta, códigos
          de verificação (OTP) por e-mail, SMS ou WhatsApp e tokens de redefinição de senha.
        </p>
        <p>
          <strong>Site institucional:</strong> dados enviados nos formulários de contato (nome, e-mail,
          WhatsApp, tipo de negócio e mensagem) e preferências de tema armazenadas no seu navegador.
        </p>
      </>
    ),
  },
  {
    id: 'finalidades',
    title: 'Como usamos os dados e bases legais',
    content: (
      <ul>
        <li>
          <strong>Prestar o serviço</strong> — criar e gerenciar agendamentos, agenda de
          profissionais, bloqueios de horário, comissões, planos e caixa (execução de contrato).
        </li>
        <li>
          <strong>Atender clientes pelo WhatsApp</strong> — receber e responder mensagens, consultar
          horários, agendar, remarcar e cancelar, e transferir a conversa a um atendente humano
          (execução de contrato e legítimo interesse do Estabelecimento).
        </li>
        <li>
          <strong>Processar pagamentos</strong> da assinatura e de serviços agendados (execução de
          contrato).
        </li>
        <li>
          <strong>Autenticação e segurança</strong> — login, verificação de e-mail e telefone,
          prevenção a fraudes e abusos, registros de auditoria (legítimo interesse e cumprimento de
          obrigação legal, incluindo o Marco Civil da Internet).
        </li>
        <li>
          <strong>Comunicações</strong> — e-mails transacionais (confirmações, lembretes, recuperação de
          senha) e retorno a contatos comerciais (execução de contrato e legítimo interesse).
        </li>
        <li>
          <strong>Obrigações legais e fiscais</strong> — emissão e guarda de registros de cobrança.
        </li>
      </ul>
    ),
  },
  {
    id: 'ia',
    title: 'Assistente virtual com inteligência artificial',
    content: (
      <>
        <p>
          Quando o Estabelecimento ativa o assistente virtual, o conteúdo das mensagens recebidas no
          WhatsApp e informações necessárias da agenda (serviços, profissionais e horários
          disponíveis) são enviados a provedores de modelos de linguagem para gerar as respostas.
        </p>
        <p>
          Esses dados são usados apenas para responder à conversa em andamento. A Lira não usa as
          conversas dos clientes finais para treinar modelos próprios e contrata provedores que não
          devem utilizá-las para treinar seus modelos. O Estabelecimento pode desativar a IA a qualquer
          momento, e qualquer conversa pode ser assumida por um atendente humano.
        </p>
      </>
    ),
  },
  {
    id: 'compartilhamento',
    title: 'Compartilhamento com terceiros',
    content: (
      <>
        <p>Não vendemos dados pessoais. Compartilhamos dados apenas com:</p>
        <ul>
          <li>
            <strong>Meta Platforms (WhatsApp Business Platform / Cloud API)</strong> — envio e
            recebimento de mensagens no número do Estabelecimento;
          </li>
          <li>
            <strong>Chatwoot</strong> — caixa de entrada de atendimento usada pelos atendentes do
            Estabelecimento;
          </li>
          <li>
            <strong>Provedores de IA</strong> (via OpenRouter) — geração das respostas do assistente
            virtual;
          </li>
          <li>
            <strong>Asaas e Mercado Pago</strong> — processamento de cobranças e pagamentos;
          </li>
          <li>
            <strong>Twilio e provedores de e-mail</strong> — envio de códigos de verificação e
            mensagens transacionais;
          </li>
          <li>
            <strong>Provedores de infraestrutura</strong> — hospedagem, banco de dados e cache;
          </li>
          <li>
            <strong>Autoridades</strong> — quando exigido por lei ou ordem judicial.
          </li>
        </ul>
        <p>
          Alguns desses fornecedores podem tratar dados fora do Brasil. Nesses casos, adotamos as
          salvaguardas previstas no art. 33 da LGPD, como cláusulas contratuais e a escolha de
          fornecedores com padrões adequados de proteção.
        </p>
      </>
    ),
  },
  {
    id: 'meta',
    title: 'Uso de dados das plataformas Meta',
    content: (
      <>
        <p>
          Os dados obtidos por meio das APIs da Meta (WhatsApp Business Platform e Login/Cadastro
          Incorporado do Facebook) são usados <strong>exclusivamente</strong> para conectar o número de
          WhatsApp do Estabelecimento à Lira e para enviar e receber mensagens de atendimento e
          agendamento em nome dele.
        </p>
        <p>
          Não usamos esses dados para publicidade, criação de perfis, venda ou qualquer finalidade
          diferente da prestação do serviço, e cumprimos os Termos da Plataforma Meta e a Política
          Comercial do WhatsApp. O Estabelecimento pode desconectar o WhatsApp a qualquer momento pelo
          painel ou removendo a permissão nas configurações do Business Manager da Meta.
        </p>
      </>
    ),
  },
  {
    id: 'retencao',
    title: 'Retenção dos dados',
    content: (
      <>
        <p>
          Mantemos os dados enquanto a conta do Estabelecimento estiver ativa ou pelo tempo necessário
          para as finalidades descritas. Após o encerramento da conta, os dados são excluídos ou
          anonimizados, exceto quando a lei exigir sua guarda — por exemplo, registros de acesso por 6
          meses (Marco Civil da Internet) e registros de cobrança pelo prazo fiscal aplicável.
        </p>
        <p>
          Códigos de verificação e tokens de redefinição de senha expiram automaticamente em pouco
          tempo. Credenciais de integração desconectadas são invalidadas e descartadas.
        </p>
      </>
    ),
  },
  {
    id: 'seguranca',
    title: 'Segurança',
    content: (
      <p>
        Adotamos medidas técnicas e organizacionais para proteger os dados: tráfego criptografado
        (HTTPS), senhas com hash, criptografia de tokens e credenciais de integração, autenticação por
        JWT com revogação, isolamento de dados por Estabelecimento, verificação de assinatura em
        webhooks, controle de acesso por perfil e registros de auditoria. Nenhum sistema é totalmente
        imune a incidentes; caso ocorra um incidente relevante, comunicaremos os afetados e a ANPD
        conforme a LGPD.
      </p>
    ),
  },
  {
    id: 'direitos',
    title: 'Seus direitos',
    content: (
      <>
        <p>Nos termos do art. 18 da LGPD, você pode solicitar:</p>
        <ul>
          <li>confirmação da existência de tratamento e acesso aos dados;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
          <li>portabilidade dos dados;</li>
          <li>informação sobre com quem compartilhamos seus dados;</li>
          <li>revogação do consentimento, quando ele for a base legal;</li>
          <li>oposição a tratamentos realizados com base em legítimo interesse.</li>
        </ul>
        <p>
          Para exercer seus direitos, escreva para{' '}
          <a href="mailto:contato@liraagendamentos.com.br">contato@liraagendamentos.com.br</a>.
          Responderemos em até 15 dias.
        </p>
      </>
    ),
  },
  {
    id: 'exclusao-de-dados',
    title: 'Como solicitar a exclusão dos seus dados',
    content: (
      <>
        <p>
          <strong>Estabelecimentos:</strong> para excluir sua conta e os dados associados, inclusive
          os dados recebidos da Meta, envie um e-mail para{' '}
          <a href="mailto:contato@liraagendamentos.com.br?subject=Exclus%C3%A3o%20de%20dados">
            contato@liraagendamentos.com.br
          </a>{' '}
          a partir do e-mail cadastrado, com o assunto &quot;Exclusão de dados&quot;. Você também pode
          desconectar o WhatsApp a qualquer momento no painel da Lira ou remover o acesso do aplicativo
          nas configurações de integrações do seu Business Manager da Meta.
        </p>
        <p>
          <strong>Clientes finais:</strong> envie o pedido ao Estabelecimento em que você agendou ou
          diretamente para o mesmo e-mail, informando seu nome, telefone e o nome do Estabelecimento.
        </p>
        <p>
          Confirmaremos o recebimento e concluiremos a exclusão em até 30 dias, mantendo apenas os
          registros cuja guarda seja exigida por lei.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    title: 'Cookies e armazenamento local',
    content: (
      <p>
        O painel e a página de agendamento usam armazenamento local do navegador apenas para manter
        sua sessão autenticada e preferências (como tema claro/escuro). Não usamos cookies de
        publicidade.
      </p>
    ),
  },
  {
    id: 'criancas',
    title: 'Menores de idade',
    content: (
      <p>
        A plataforma não é destinada a menores de 18 anos para criação de contas. Agendamentos para
        menores devem ser feitos por seus responsáveis legais.
      </p>
    ),
  },
  {
    id: 'alteracoes',
    title: 'Alterações desta política',
    content: (
      <p>
        Podemos atualizar esta política periodicamente. A data da última atualização aparece no topo
        desta página e, em caso de mudanças relevantes, avisaremos os Estabelecimentos por e-mail ou
        pelo painel.
      </p>
    ),
  },
  {
    id: 'contato',
    title: 'Contato e encarregado (DPO)',
    content: (
      <p>
        Dúvidas sobre esta política ou sobre o tratamento de dados pessoais podem ser enviadas ao
        nosso encarregado pelo e-mail{' '}
        <a href="mailto:contato@liraagendamentos.com.br">contato@liraagendamentos.com.br</a> ou pela
        página de <a href="/contato">contato</a>.
      </p>
    ),
  },
]

export default function PoliticaDePrivacidadePage() {
  return (
    <LiraLegalPage
      title="Política de Privacidade"
      updatedAt="22 de outubro de 2026"
      intro={
        <p>
          Esta Política de Privacidade explica como a Lira Agendamentos trata dados pessoais no painel
          de gestão, na página de agendamento online, na API e no atendimento automatizado via
          WhatsApp, de acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
        </p>
      }
      sections={sections}
    />
  )
}
