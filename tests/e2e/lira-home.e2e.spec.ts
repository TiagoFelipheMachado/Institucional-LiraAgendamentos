import { test, expect, Page } from '@playwright/test'

test.describe('Lira Agendamentos — institutional home', () => {
  let page: Page

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext()
    page = await context.newPage()
  })

  test.beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  test('every section from the design system nav is present and reachable by anchor', async () => {
    for (const id of ['desafios', 'pilares', 'produtos', 'como-funciona', 'white-label', 'contato']) {
      await expect(page.locator(`#${id}`)).toBeVisible()
    }
  })

  test('desktop nav link scrolls to the matching section', async () => {
    await page.setViewportSize({ width: 1280, height: 900 })
    await page.getByRole('link', { name: 'Pilares' }).first().click()
    await expect(page.locator('#pilares')).toBeInViewport()
  })

  test('mobile menu toggle opens and closes the navigation drawer', async () => {
    await page.setViewportSize({ width: 390, height: 844 })

    const toggle = page.getByRole('button', { name: /abrir menu/i })
    await expect(toggle).toBeVisible()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await toggle.click()
    await expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await expect(page.locator('#lira-mobile-menu').getByText('Desafios')).toBeVisible()

    await page.getByRole('button', { name: /fechar menu/i }).click()
    await expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  test('contact form shows validation errors for an incomplete submission', async () => {
    await page.getByLabel(/nome completo/i).fill('Ana')
    await page.getByRole('button', { name: /solicitar demonstração/i }).click()

    await expect(page.getByText(/informe seu nome completo/i)).toBeVisible()
    await expect(page.getByText(/informe um whatsapp com ddd/i)).toBeVisible()
  })

  test('contact form succeeds with valid data', async () => {
    await page.getByLabel(/nome completo/i).fill('Marina Alves')
    await page.getByLabel(/whatsapp com ddd/i).fill('41987654321')
    await page.getByLabel(/e-mail profissional/i).fill('marina@salao.com.br')

    await page.getByRole('button', { name: /solicitar demonstração/i }).click()

    await expect(page.getByText(/solicitação enviada com sucesso/i)).toBeVisible()
  })
})
