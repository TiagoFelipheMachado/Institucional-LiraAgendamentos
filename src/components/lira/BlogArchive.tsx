'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import type { Post, Category } from '@/payload-types'
import { LiraNavbar } from './Navbar'
import { LiraFooter } from './Footer'
import { LiraWhatsAppButton } from './WhatsAppButton'
import { Icon } from './Icon'

export interface BlogArchiveProps {
  posts?: Post[]
  categories?: Category[]
}

// Fallback demo posts if the database has not seeded any post yet,
// so the user immediately sees the full template layout.
const SAMPLE_FALLBACK_POSTS: Partial<Post>[] = [
  {
    id: 1,
    title: 'Como eliminar até 68% das faltas e no-shows no seu salão ou barbearia',
    slug: 'como-eliminar-faltas-e-no-shows-salao-barbearia',
    publishedAt: '2026-10-15T12:00:00.000Z',
    meta: {
      description:
        'Descubra a estratégia de cobrança de sinal via Pix automático e lembretes inteligentes pelo WhatsApp que transformaram a pontualidade e o faturamento das principais clínicas e salões.',
    },
    categories: [{ id: 1, title: 'Gestão & Finanças', slug: 'gestao' } as Category],
    populatedAuthors: [{ name: 'Equipe Lira' }],
  },
  {
    id: 2,
    title: 'Atendimento com IA no WhatsApp: o guia definitivo para agendar clientes 24h por dia',
    slug: 'atendimento-com-ia-no-whatsapp-guia-definitivo',
    publishedAt: '2026-10-12T10:30:00.000Z',
    meta: {
      description:
        'Não perca mais clientes que mandam mensagem à noite ou no domingo. Veja como a inteligência artificial responde dúvidas, verifica horários e confirma pagamentos automaticamente.',
    },
    categories: [{ id: 2, title: 'Automação & IA', slug: 'automacao' } as Category],
    populatedAuthors: [{ name: 'Carlos Mendes' }],
  },
  {
    id: 3,
    title: 'Comissões de profissionais sem dor de cabeça: como calcular e fechar o mês no azul',
    slug: 'comissoes-de-profissionais-como-calcular-fechar-o-mes',
    publishedAt: '2026-10-08T15:00:00.000Z',
    meta: {
      description:
        'Regras de rateio, desconto de taxas de cartão e relatórios transparentes para manter sua equipe motivada e a gestão financeira do seu espaço sob controle total.',
    },
    categories: [{ id: 1, title: 'Gestão & Finanças', slug: 'gestao' } as Category],
    populatedAuthors: [{ name: 'Mariana Alves' }],
  },
  {
    id: 4,
    title: 'Marketing de Recorrência: estratégias para fazer seu cliente voltar a cada 15 dias',
    slug: 'marketing-de-recorrencia-como-fazer-cliente-voltar',
    publishedAt: '2026-10-02T09:00:00.000Z',
    meta: {
      description:
        'Planos de assinatura para barbearias e programas de fidelização para estética: aumente o LTV (Lifetime Value) e mantenha sua agenda cheia o ano todo.',
    },
    categories: [{ id: 3, title: 'Marketing & Vendas', slug: 'marketing' } as Category],
    populatedAuthors: [{ name: 'Equipe Lira' }],
  },
]

export const LiraBlogArchive: React.FC<BlogArchiveProps> = ({
  posts = [],
  categories = [],
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  // If database has published posts, use them; otherwise use sample posts
  const hasRealPosts = posts.length > 0
  const allPosts = hasRealPosts ? posts : (SAMPLE_FALLBACK_POSTS as Post[])

  // Filter posts by category and search
  const filteredPosts = useMemo(() => {
    return allPosts.filter((post) => {
      // Category filter
      if (selectedCategory !== 'all') {
        const postCategories = (post.categories || []).map((cat) =>
          typeof cat === 'object' && cat ? cat.slug : ''
        )
        if (!postCategories.includes(selectedCategory)) {
          return false
        }
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const titleMatch = post.title?.toLowerCase().includes(q)
        const descMatch = post.meta?.description?.toLowerCase().includes(q)
        return titleMatch || descMatch
      }

      return true
    })
  }, [allPosts, selectedCategory, searchQuery])

  // Extract unique category options
  const categoryList = useMemo(() => {
    if (categories.length > 0) return categories

    // Fallback categories if empty
    return [
      { id: 1, title: 'Gestão & Finanças', slug: 'gestao' },
      { id: 2, title: 'Automação & IA', slug: 'automacao' },
      { id: 3, title: 'Marketing & Vendas', slug: 'marketing' },
    ] as Category[]
  }, [categories])

  const featuredPost = filteredPosts[0]
  const restPosts = filteredPosts.slice(1)

  const formatPostDate = (dateStr?: string | null) => {
    if (!dateStr) return 'Recente'
    try {
      const d = new Date(dateStr)
      return new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(d)
    } catch {
      return 'Recente'
    }
  }

  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#070708] text-neutral-900 dark:text-[#E5E2E3] selection:bg-[#00D3F2]/30 selection:text-cyan-800 dark:selection:text-[#00D3F2] transition-colors duration-200">
      <LiraNavbar />

      <main className="pt-24 sm:pt-28 pb-20 sm:pb-28 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#9034F3]/10 via-[#00D3F2]/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-[#8E92A0]">
              <li>
                <Link href="/" className="hover:text-cyan-600 dark:hover:text-[#00D3F2] transition-colors">
                  Início
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-900 dark:text-white font-semibold">Blog</li>
            </ol>
          </nav>

          {/* Hero Header */}
          <div className="max-w-3xl mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-semibold tracking-[-0.03em] text-neutral-900 dark:text-[#E5E2E3] leading-[1.1] mb-5">
              Inteligência, gestão e crescimento para quem{' '}
              <span className="italic bg-gradient-to-r from-neutral-900 via-cyan-600 to-cyan-500 dark:from-white dark:via-[#CEFAFE] dark:to-[#00D3F2] bg-clip-text text-transparent">
                vive de agenda.
              </span>
            </h1>
            <p className="text-base sm:text-lg text-neutral-600 dark:text-[#9A9DA3] leading-relaxed font-normal">
              Artigos práticos, guias de automação e estratégias de mercado para transformar seu espaço de beleza e estética em uma operação lucrativa, organizada e sem faltas.
            </p>
          </div>

          {/* Admin Informational Callout (if managing via Payload Admin) */}
          <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-neutral-50 dark:bg-[#0D0F16] border border-neutral-200 dark:border-[#1E2333] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-50 dark:bg-[#121E24] border border-cyan-200 dark:border-[#00D3F2]/30 flex items-center justify-center text-cyan-600 dark:text-[#00D3F2] shrink-0">
                <Icon name="edit_note" size={20} />
              </div>
              <div>
                <span className="text-xs font-semibold text-neutral-900 dark:text-white block">
                  Blog 100% Dinâmico via Painel Administrativo
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-[#8E92A0]">
                  Crie, edite e publique novos artigos diretamente pelo Payload CMS Admin.
                </span>
              </div>
            </div>

            <Link
              href="/admin/collections/posts"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 text-white dark:bg-white dark:text-[#070708] hover:bg-neutral-800 dark:hover:bg-neutral-100 text-xs font-semibold shadow-xs transition-all shrink-0 cursor-pointer"
            >
              <span>Gerenciar Artigos no Admin</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-neutral-200 dark:border-[#1A1D28]">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-neutral-900 text-white dark:bg-[#00D3F2] dark:text-[#070708] font-bold shadow-sm'
                    : 'bg-neutral-100 dark:bg-[#0E1017] text-neutral-600 dark:text-[#8E92A0] hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-[#1B1E28]'
                }`}
              >
                Todos os artigos
              </button>

              {categoryList.map((cat) => {
                const isSelected = selectedCategory === cat.slug
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.slug || 'all')}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-neutral-900 text-white dark:bg-[#00D3F2] dark:text-[#070708] font-bold shadow-sm'
                        : 'bg-neutral-100 dark:bg-[#0E1017] text-neutral-600 dark:text-[#8E92A0] hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-[#1B1E28]'
                    }`}
                  >
                    {cat.title}
                  </button>
                )
              })}
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <span className="material-symbols-rounded absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-[#7A8299] text-[18px] pointer-events-none select-none">
                search
              </span>
              <input
                type="text"
                placeholder="Buscar por tema ou título..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-neutral-50 dark:bg-[#0B0D14] border border-neutral-200 dark:border-[#1E2230] text-xs text-neutral-900 dark:text-white outline-none focus:border-cyan-500 dark:focus:border-[#00D3F2]/60 transition-all"
              />
            </div>
          </div>

          {/* Main Posts Layout */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20 bg-neutral-50 dark:bg-[#0B0D14] border border-neutral-200 dark:border-[#1A1D28] rounded-3xl p-8">
              <span className="material-symbols-rounded text-neutral-400 text-5xl mb-3 block">
                article
              </span>
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-sm text-neutral-600 dark:text-[#8E92A0] max-w-md mx-auto mb-6">
                Não encontramos posts com os termos selecionados. Tente mudar os filtros ou adicione uma nova publicação pelo Painel Administrativo.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('all')
                  setSearchQuery('')
                }}
                className="px-5 py-2.5 rounded-xl bg-cyan-600 dark:bg-[#00D3F2] text-white dark:text-[#070708] text-xs font-bold shadow-xs cursor-pointer"
              >
                Limpar filtros
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {/* Featured Post Card (Top Highlight) */}
              {featuredPost && (
                <div className="group relative rounded-3xl overflow-hidden bg-neutral-50 dark:bg-[#0B0D14] border border-neutral-200 dark:border-[#1E2230] hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 shadow-sm hover:shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
                    {/* Left: Image / Visual Banner */}
                    <div className="lg:col-span-6 relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] sm:min-h-[340px] bg-neutral-900 overflow-hidden">
                      {featuredPost.heroImage && typeof featuredPost.heroImage === 'object' && featuredPost.heroImage.url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={featuredPost.heroImage.url}
                          alt={featuredPost.heroImage.alt || featuredPost.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#0F1E2A] via-[#090F16] to-[#070708] text-center">
                          <span className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center mb-3">
                            <Icon name="auto_awesome" size={24} />
                          </span>
                          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold">
                            Artigo em Destaque
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Right: Content details */}
                    <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
                      <div>
                        {/* Categories & Meta */}
                        <div className="flex items-center gap-3 text-xs mb-4">
                          <span className="px-3 py-1 rounded-full bg-cyan-50 dark:bg-[#0D2128] text-cyan-700 dark:text-[#53EAFD] border border-cyan-200 dark:border-[#00D3F2]/40 font-semibold font-mono text-[11px]">
                            {featuredPost.categories?.[0] && typeof featuredPost.categories[0] === 'object'
                              ? featuredPost.categories[0].title
                              : 'Destaque'}
                          </span>
                          <span className="text-neutral-400 dark:text-[#6B7280]">
                            {formatPostDate(featuredPost.publishedAt)}
                          </span>
                          <span className="text-neutral-400 dark:text-[#6B7280]">•</span>
                          <span className="text-neutral-400 dark:text-[#6B7280]">4 min de leitura</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4 group-hover:text-cyan-600 dark:group-hover:text-[#00D3F2] transition-colors">
                          <Link href={`/blog/${featuredPost.slug}`}>
                            {featuredPost.title}
                          </Link>
                        </h2>

                        {/* Excerpt */}
                        <p className="text-sm text-neutral-600 dark:text-[#9A9DA3] leading-relaxed line-clamp-3 mb-6">
                          {featuredPost.meta?.description ||
                            'Confira este artigo completo no blog Lira com estratégias práticas para o crescimento sustentável do seu negócio.'}
                        </p>
                      </div>

                      {/* Author + CTA */}
                      <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-[#161824]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-[#1E2230] flex items-center justify-center text-xs font-bold text-neutral-700 dark:text-white">
                            {featuredPost.populatedAuthors?.[0]?.name?.charAt(0) || 'L'}
                          </div>
                          <span className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                            {featuredPost.populatedAuthors?.[0]?.name || 'Equipe Lira'}
                          </span>
                        </div>

                        <Link
                          href={`/blog/${featuredPost.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-[#00D3F2] group-hover:translate-x-1 transition-transform"
                        >
                          <span>Ler artigo completo</span>
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Grid of Remaining Posts */}
              {restPosts.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
                    Últimas Publicações
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {restPosts.map((post) => {
                      const categoryTitle =
                        post.categories?.[0] && typeof post.categories[0] === 'object'
                          ? post.categories[0].title
                          : 'Artigo'

                      return (
                        <article
                          key={post.id}
                          className="group rounded-2xl overflow-hidden bg-neutral-50 dark:bg-[#0B0D14] border border-neutral-200 dark:border-[#1E2230] hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between shadow-xs hover:shadow-xl"
                        >
                          <div>
                            {/* Card Image */}
                            <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden">
                              {post.heroImage && typeof post.heroImage === 'object' && post.heroImage.url ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={post.heroImage.url}
                                  alt={post.heroImage.alt || post.title}
                                  loading="lazy"
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                              ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#101924] to-[#07090E]">
                                  <span className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-400/30 text-cyan-400 flex items-center justify-center mb-2">
                                    <Icon name="article" size={20} />
                                  </span>
                                  <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                                    {categoryTitle}
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Card Body */}
                            <div className="p-5 sm:p-6">
                              {/* Meta Info */}
                              <div className="flex items-center gap-2 text-[11px] font-mono text-neutral-500 dark:text-[#7A8299] mb-3">
                                <span className="px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-[#0E2026] text-cyan-700 dark:text-[#53EAFD] border border-cyan-200 dark:border-[#00D3F2]/30 font-semibold text-[10px]">
                                  {categoryTitle}
                                </span>
                                <span>•</span>
                                <span>{formatPostDate(post.publishedAt)}</span>
                              </div>

                              {/* Title */}
                              <h4 className="text-base sm:text-lg font-bold tracking-tight text-neutral-900 dark:text-white mb-2.5 leading-snug group-hover:text-cyan-600 dark:group-hover:text-[#00D3F2] transition-colors line-clamp-2">
                                <Link href={`/blog/${post.slug}`}>
                                  {post.title}
                                </Link>
                              </h4>

                              {/* Excerpt */}
                              <p className="text-xs text-neutral-600 dark:text-[#9A9DA3] leading-relaxed line-clamp-3">
                                {post.meta?.description ||
                                  'Aprenda como aplicar as melhores técnicas de gestão e ferramentas de IA para impulsionar os resultados da sua equipe.'}
                              </p>
                            </div>
                          </div>

                          {/* Card Footer */}
                          <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-neutral-200 dark:border-[#161824] flex items-center justify-between">
                            <span className="text-[11px] text-neutral-500 dark:text-[#7A8299] font-mono">
                              {post.populatedAuthors?.[0]?.name || 'Equipe Lira'}
                            </span>

                            <Link
                              href={`/blog/${post.slug}`}
                              className="text-xs font-semibold text-cyan-600 dark:text-[#53EAFD] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                            >
                              <span>Ler artigo</span>
                              <span aria-hidden="true">→</span>
                            </Link>
                          </div>
                        </article>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Newsletter / CTA Box */}
          <div className="mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white dark:bg-[#0A0D14] border border-neutral-800 dark:border-[#1E2333] relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D3F2]/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-2 block">
                NEWSLETTER LIRA
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Receba insights de gestão de agenda diretamente no seu e-mail
              </h3>
              <p className="text-sm text-neutral-300 dark:text-[#9A9DA3] mb-6 leading-relaxed">
                Toda semana, estratégias comprovadas sobre redução de faltas, automação com WhatsApp e cases reais de quem acelerou o faturamento.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  alert('Obrigado por se inscrever! Em breve você receberá nossos artigos exclusivos.')
                }}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <input
                  type="email"
                  required
                  placeholder="Seu melhor e-mail profissional"
                  className="px-4 py-3 rounded-xl bg-neutral-800/80 dark:bg-[#121520] border border-neutral-700 dark:border-[#222736] text-sm text-white placeholder-neutral-400 outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 flex-1"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#070708] font-bold text-sm shadow-md transition-all cursor-pointer shrink-0"
                >
                  Quero receber
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <LiraFooter />
      <LiraWhatsAppButton />
    </div>
  )
}
