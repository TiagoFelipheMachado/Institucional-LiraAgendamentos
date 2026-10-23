import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { LiraBlogArchive } from '@/components/lira/BlogArchive'
import { LiraBlogPostView } from '@/components/lira/BlogPostView'
import type { Post } from '@/payload-types'

const mockPost: Post = {
  id: 101,
  title: 'Estratégias de Automação para Barbearias e Salões',
  slug: 'estrategias-de-automacao-para-barbearias-e-saloes',
  updatedAt: '2026-10-17T00:00:00.000Z',
  createdAt: '2026-10-17T00:00:00.000Z',
  publishedAt: '2026-10-17T12:00:00.000Z',
  categories: [
    {
      id: 1,
      title: 'Gestão & Tecnologia',
      slug: 'gestao',
      updatedAt: '2026-10-17T00:00:00.000Z',
      createdAt: '2026-10-17T00:00:00.000Z',
    },
  ],
  meta: {
    title: 'Estratégias de Automação para Barbearias e Salões',
    description: 'Guia completo para reduzir faltas e automatizar confirmações no WhatsApp.',
  },
  populatedAuthors: [{ name: 'Equipe Lira' }],
  content: {
    root: {
      type: 'root',
      direction: 'ltr',
      format: 'left',
      indent: 0,
      version: 1,
      children: [],
    },
  },
}

describe('LiraBlogArchive template', () => {
  it('renders breadcrumb, headline, search input and category filter buttons', () => {
    render(<LiraBlogArchive posts={[mockPost]} />)

    expect(screen.getByText('Início')).toBeDefined()
    expect(screen.getAllByText('Blog').length).toBeGreaterThan(0)
    expect(screen.getByPlaceholderText(/Buscar por tema ou título/i)).toBeDefined()
    expect(screen.getByText('Todos os artigos')).toBeDefined()
  })

  it('renders post title and links properly', () => {
    render(<LiraBlogArchive posts={[mockPost]} />)

    expect(screen.getByText('Estratégias de Automação para Barbearias e Salões')).toBeDefined()
    expect(screen.getByText('Gestão & Tecnologia')).toBeDefined()
  })

  it('filters posts dynamically when searching', () => {
    render(<LiraBlogArchive posts={[mockPost]} />)

    const searchInput = screen.getByPlaceholderText(/Buscar por tema ou título/i)
    fireEvent.change(searchInput, { target: { value: 'InexistenteTermoXYZ' } })

    expect(screen.getByText('Nenhum artigo encontrado')).toBeDefined()
  })

  it('renders admin shortcut for dynamic content management', () => {
    render(<LiraBlogArchive posts={[mockPost]} />)

    expect(screen.getByText('Gerenciar Artigos no Admin')).toBeDefined()
  })
})

describe('LiraBlogPostView template', () => {
  it('renders single post layout with title, category, author and sharing tools', () => {
    render(<LiraBlogPostView post={mockPost} />)

    expect(screen.getByRole('heading', { level: 1, name: /Estratégias de Automação para Barbearias e Salões/i })).toBeDefined()
    expect(screen.getAllByText('Gestão & Tecnologia')[0]).toBeDefined()
    expect(screen.getAllByText('Equipe Lira')[0]).toBeDefined()
    expect(screen.getAllByText('WhatsApp')[0]).toBeDefined()
    expect(screen.getByText('Copiar link')).toBeDefined()
  })
})
