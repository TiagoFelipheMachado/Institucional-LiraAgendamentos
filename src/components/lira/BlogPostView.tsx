'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import type { Post } from '@/payload-types'
import { LiraNavbar } from './Navbar'
import { LiraFooter } from './Footer'
import { LiraWhatsAppButton } from './WhatsAppButton'
import { Icon } from './Icon'
import RichText from '@/components/RichText'

export interface BlogPostViewProps {
  post: Post
  relatedPosts?: Post[]
}

export const LiraBlogPostView: React.FC<BlogPostViewProps> = ({
  post,
  relatedPosts = [],
}) => {
  const [copied, setCopied] = useState(false)

  const formatPostDate = (dateStr?: string | null) => {
    if (!dateStr) return 'Publicação recente'
    try {
      const d = new Date(dateStr)
      return new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(d)
    } catch {
      return 'Publicação recente'
    }
  }

  const categoryTitle =
    post.categories?.[0] && typeof post.categories[0] === 'object'
      ? post.categories[0].title
      : 'Artigo'

  const authorName = post.populatedAuthors?.[0]?.name || 'Equipe Lira'

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const shareWhatsAppUrl = typeof window !== 'undefined'
    ? `https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`
    : '#'

  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#070708] text-neutral-900 dark:text-[#E5E2E3] selection:bg-[#00D3F2]/30 selection:text-cyan-800 dark:selection:text-[#00D3F2] transition-colors duration-200">
      <LiraNavbar />

      <article className="pt-24 sm:pt-28 pb-20 sm:pb-28 relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#9034F3]/10 via-[#00D3F2]/10 to-transparent blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-mono text-neutral-500 dark:text-[#8E92A0] overflow-hidden whitespace-nowrap text-ellipsis">
              <li>
                <Link href="/" className="hover:text-cyan-600 dark:hover:text-[#00D3F2] transition-colors">
                  Início
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/blog" className="hover:text-cyan-600 dark:hover:text-[#00D3F2] transition-colors">
                  Blog
                </Link>
              </li>
              <li>/</li>
              <li className="text-neutral-900 dark:text-white font-semibold truncate max-w-[200px] sm:max-w-xs">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-10 sm:mb-12">
            {/* Category badge */}
            <div className="flex items-center gap-3 text-xs mb-4">
              <span className="px-3.5 py-1 rounded-full bg-cyan-50 dark:bg-[#0D2128] text-cyan-700 dark:text-[#53EAFD] border border-cyan-200 dark:border-[#00D3F2]/40 font-semibold font-mono text-[11px]">
                {categoryTitle}
              </span>
              <span className="text-neutral-400 dark:text-[#6B7280]">
                {formatPostDate(post.publishedAt)}
              </span>
              <span className="text-neutral-400 dark:text-[#6B7280]">•</span>
              <span className="text-neutral-400 dark:text-[#6B7280]">4 min de leitura</span>
            </div>

            {/* Post Title */}
            <h1 className="text-3xl sm:text-5xl font-semibold tracking-[-0.03em] text-neutral-900 dark:text-white leading-[1.12] mb-6">
              {post.title}
            </h1>

            {/* Lead Excerpt */}
            {post.meta?.description && (
              <p className="text-base sm:text-xl text-neutral-600 dark:text-[#9A9DA3] leading-relaxed font-normal mb-8">
                {post.meta.description}
              </p>
            )}

            {/* Author bar + Social sharing */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4 border-y border-neutral-200 dark:border-[#1A1D28]">
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-cyan-100 dark:bg-[#15232A] border border-cyan-300 dark:border-[#00D3F2]/40 flex items-center justify-center text-sm font-bold text-cyan-800 dark:text-[#00D3F2]">
                  {authorName.charAt(0)}
                </div>
                <div>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white block">
                    {authorName}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-[#8E92A0]">
                    Especialista em Gestão de Agendas
                  </span>
                </div>
              </div>

              {/* Share links */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-neutral-500 dark:text-[#8E92A0] mr-1 hidden sm:inline">
                  Compartilhar:
                </span>

                <a
                  href={shareWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Compartilhar no WhatsApp"
                  className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-[#0C1E17] border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-medium hover:brightness-105 transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Icon name="chat" size={16} />
                  <span>WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-[#141722] border border-neutral-200 dark:border-[#222736] text-neutral-700 dark:text-[#D5D8E4] text-xs font-medium hover:bg-neutral-200 dark:hover:bg-[#1B2030] transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <Icon name="content_copy" size={16} />
                  <span>{copied ? 'Copiado!' : 'Copiar link'}</span>
                </button>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          {post.heroImage && typeof post.heroImage === 'object' && post.heroImage.url && (
            <div className="mb-12 rounded-3xl overflow-hidden border border-neutral-200 dark:border-[#1E2333] shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.heroImage.url}
                alt={post.heroImage.alt || post.title}
                className="w-full h-auto max-h-[520px] object-cover"
              />
            </div>
          )}

          {/* Post Content Body */}
          <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none mb-16 leading-relaxed">
            {post.content ? (
              <RichText data={post.content} enableGutter={false} />
            ) : (
              <p>Este post ainda não possui conteúdo cadastrado no painel.</p>
            )}
          </div>

          {/* Author Box */}
          <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-[#0B0D14] border border-neutral-200 dark:border-[#1E2230] mb-14 flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-[#12222A] border-2 border-cyan-300 dark:border-[#00D3F2]/40 flex items-center justify-center text-xl font-bold text-cyan-800 dark:text-[#00D3F2] shrink-0">
              {authorName.charAt(0)}
            </div>
            <div>
              <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1">
                Sobre {authorName}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-[#9A9DA3] leading-relaxed">
                Produz análises e conteúdos estratégicos sobre o ecossistema de salões de beleza, barbearias e clínicas de estética, focando em redução de faltas, automação no WhatsApp e crescimento sustentável.
              </p>
            </div>
          </div>

          {/* Conversion CTA Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 text-white dark:bg-[#0A0D14] border border-neutral-800 dark:border-[#1E2333] relative overflow-hidden shadow-2xl mb-16 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="max-w-lg">
              <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase mb-2 block">
                PRONTO PARA MODERNIZAR SUA AGENDA?
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
                Elimine o no-show e coloque seu atendimento no automático
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 dark:text-[#9A9DA3] leading-relaxed">
                Junte-se a centenas de negócios que aumentaram seu faturamento com o Lira Agendamentos.
              </p>
            </div>

            <Link
              href="/contato"
              className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-[#070708] font-bold text-sm shadow-md transition-all shrink-0 cursor-pointer"
            >
              Falar com especialista →
            </Link>
          </div>

          {/* Related Articles */}
          {relatedPosts.length > 0 && (
            <div className="pt-10 border-t border-neutral-200 dark:border-[#1A1D28]">
              <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6">
                Artigos Recomendados
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.slice(0, 3).map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.slug}`}
                    className="group p-4 rounded-xl bg-neutral-50 dark:bg-[#0B0D14] border border-neutral-200 dark:border-[#1E2230] hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-[#00D3F2] transition-colors line-clamp-2 mb-2">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-[#8E92A0] line-clamp-2">
                        {item.meta?.description || 'Saiba mais neste artigo completo no blog Lira.'}
                      </p>
                    </div>
                    <span className="text-xs font-semibold text-cyan-600 dark:text-[#53EAFD] mt-3 block group-hover:translate-x-1 transition-transform">
                      Ler artigo →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <LiraFooter />
      <LiraWhatsAppButton />
    </div>
  )
}
