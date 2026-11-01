import type { GlobalConfig } from 'payload'
import { revalidatePlans } from './hooks/revalidatePlans'

export const defaultPlansData = [
  {
    id: 'start',
    name: 'Lira Start',
    audience: 'Ideal para: Profissionais autônomos',
    monthlyPrice: 69.9,
    annualPricePerMonth: 55.92,
    popular: false,
    recommendedBadge: 'Plano Recomendado',
    conditionText: 'Plano Anual equivalente a R$ 55,92 / mês (20% off)',
    savingsPill: 'PLANO ANUAL: R$ 55,92 / MÊS',
    couponText: 'ECONOMIZE 20% NO ANUAL',
    features: [
      { feature: 'Agendamento online automatizado' },
      { feature: 'Confirmação via WhatsApp IA' },
      { feature: 'Integração Pix integrada' },
      { feature: 'Cadastro de serviços e clientes' },
      { feature: 'Suporte via chat' },
    ],
  },
  {
    id: 'plus',
    name: 'Lira Plus',
    audience: 'Ideal para: Equipes e barbearias estruturadas',
    monthlyPrice: 99.9,
    annualPricePerMonth: 79.92,
    popular: true,
    recommendedBadge: 'Plano Recomendado',
    conditionText: 'Plano Anual equivalente a R$ 79,92 / mês (20% off)',
    savingsPill: 'PLANO ANUAL: R$ 79,92 / MÊS',
    couponText: 'ECONOMIZE 20% NO ANUAL',
    features: [
      { feature: 'Tudo do plano Start' },
      { feature: 'Agenda para múltiplos profissionais' },
      { feature: 'Central de Atendimento via chat' },
      { feature: 'Antecipação de comissão via maquininha' },
      { feature: 'Relatórios financeiros avançados' },
    ],
  },
  {
    id: 'vega',
    name: 'Lira Vega',
    audience: 'Ideal para: Redes e múltiplas unidades/filiais',
    monthlyPrice: 139.9,
    annualPricePerMonth: 111.92,
    popular: false,
    recommendedBadge: 'Plano Recomendado',
    conditionText: 'Plano Anual equivalente a R$ 111,92 / mês (20% off)',
    savingsPill: 'PLANO ANUAL: R$ 111,92 / MÊS',
    couponText: 'ECONOMIZE 20% NO ANUAL',
    features: [
      { feature: 'Tudo do plano Plus' },
      { feature: 'Gestão de múltiplas unidades / filiais' },
      { feature: 'API dedicada e relatórios customizados' },
      { feature: 'Integração WordPress white-label' },
      { feature: 'Gerente de conta exclusivo' },
    ],
  },
]

export const Plans: GlobalConfig = {
  slug: 'plans',
  label: 'Planos e Preços',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Conteúdo',
    description: 'Gerencie os planos de preços, valores, descontos e recursos exibidos no site.',
  },
  fields: [
    {
      name: 'sectionTitle',
      type: 'text',
      label: 'Título da Seção',
      defaultValue: 'Conheça os planos',
    },
    {
      name: 'sectionSubtitle',
      type: 'textarea',
      label: 'Subtítulo da Seção',
      defaultValue:
        'Todos os planos começam com 14 dias grátis, sem cartão de crédito. Escolha o seu:',
    },
    {
      name: 'annualDiscountPercent',
      type: 'number',
      label: 'Desconto Anual Padrão (%)',
      defaultValue: 20,
      min: 0,
      max: 100,
    },
    {
      name: 'plans',
      type: 'array',
      label: 'Planos',
      defaultValue: defaultPlansData,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/globals/Plans/RowLabel#RowLabel',
        },
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Nome do Plano (ex: Lira Start)',
          required: true,
        },
        {
          name: 'id',
          type: 'text',
          label: 'Identificador / ID do Plano (ex: start, plus, vega)',
          required: true,
        },
        {
          name: 'audience',
          type: 'text',
          label: 'Público Ideal (ex: Ideal para: Profissionais autônomos)',
          required: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'monthlyPrice',
              type: 'number',
              label: 'Preço Mensal (R$)',
              required: true,
              min: 0,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'annualPricePerMonth',
              type: 'number',
              label: 'Preço Mensal no Anual (R$ - opcional, calculado auto se vazio)',
              min: 0,
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'popular',
              type: 'checkbox',
              label: 'Destacar como Plano Recomendado / Popular (Roxo)',
              defaultValue: false,
              admin: {
                width: '50%',
              },
            },
            {
              name: 'recommendedBadge',
              type: 'text',
              label: 'Texto da Badge de Destaque',
              defaultValue: 'Plano Recomendado',
              admin: {
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'conditionText',
          type: 'text',
          label: 'Texto da Condição Mensal (opcional)',
        },
        {
          name: 'savingsPill',
          type: 'text',
          label: 'Pill de Economia Anual (opcional)',
        },
        {
          name: 'couponText',
          type: 'text',
          label: 'Texto do Cupom / Desconto (opcional)',
        },
        {
          name: 'customCheckoutUrl',
          type: 'text',
          label: 'Link de Checkout Personalizado (opcional)',
        },
        {
          name: 'features',
          type: 'array',
          label: 'Funcionalidades Incluídas',
          fields: [
            {
              name: 'feature',
              type: 'text',
              label: 'Item de Funcionalidade',
              required: true,
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidatePlans],
  },
}
