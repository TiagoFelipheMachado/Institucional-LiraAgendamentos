# Discovery técnico — Site institucional Lira Agenda

**Data**: 2026-11-15 · **Etapa**: L1 (lgpd-legacy-retrofit) · **Escopo**: somente este repositório (site institucional Next.js + Payload CMS). O produto SaaS Lira (painel, WhatsApp, agendamentos) **não está neste repo** e não foi inspecionado.

## 1. Modelos de dados (Payload CMS / PostgreSQL)

| Coleção | Dados pessoais | Evidência |
|---|---|---|
| `users` (admins do CMS) | nome, e-mail, hash+salt de senha (PBKDF2 do Payload), tokens de reset, tentativas de login | [src/collections/Users/index.ts](../src/collections/Users/index.ts) |
| `form-submissions` (plugin form-builder) | o que o visitante digitar em formulários do CMS (`FormBlock`); `create` público, `read` autenticado (padrão do plugin) | [src/plugins/index.ts](../src/plugins/index.ts), [src/blocks/Form/Component.tsx:66](../src/blocks/Form/Component.tsx) |
| `posts.authors` | nome de autor (vínculo a `users`) | [src/collections/Posts](../src/collections/Posts) |
| `media` | arquivos enviados; podem conter imagem de pessoas | [src/collections/Media.ts](../src/collections/Media.ts) |

Banco: Postgres via `DATABASE_URI` ([src/payload.config.ts](../src/payload.config.ts)); migrations em `src/migrations/`.

## 2. Rotas e fluxos que coletam dados

- **Formulário de contato** (`/contato` e seção da home): nome, e-mail, WhatsApp, segmento, volume mensal de agendamentos e mensagem.
  - Server Action [src/utilities/lira/sendContactEmail.ts](../src/utilities/lira/sendContactEmail.ts): revalida no servidor e **envia por e-mail via Resend** para `CONTACT_TO_EMAIL` (padrão: `atendimento@liragenda.com.br`). **Não grava no banco.**
  - Antispam: honeypot + tempo mínimo ([src/utilities/lira/security.ts](../src/utilities/lira/security.ts)). Não usa CAPTCHA de terceiros.
  - Erro: `console.error('Failed to send contact email', err)` loga o objeto de erro, **não** os campos do formulário. OK.
  - **Não há aviso de privacidade nem link para a política junto ao botão de envio** ([ContactPage.tsx](../src/components/lira/ContactPage.tsx), [ContactSection.tsx](../src/components/lira/ContactSection.tsx)).
- **API REST/GraphQL do Payload** em `/api/*`; CORS restrito a `getServerSideURL()`.
- **Compartilhar no WhatsApp** nos posts do blog: só abre um link `api.whatsapp.com/send` com título e URL. Nenhum dado pessoal é enviado.

## 3. Dependências, SDKs e terceiros (site)

| Terceiro | Papel provável | Dados | Local |
|---|---|---|---|
| **Resend** (e-mail) | Operador | conteúdo integral do formulário de contato | EUA (verificar região da conta) |
| **Host via Coolify/Nixpacks** ([nixpacks.toml](../nixpacks.toml)) | Operador | logs de acesso (IP), banco | **Desconhecido**: validar provedor e região |
| **Provedor de e-mail da caixa `atendimento@`** | Operador | leads recebidos | **Desconhecido**: validar |
| **GitHub** (repositório **PÚBLICO**) | não deveria receber dados pessoais | ver achado crítico §6 | EUA |

**Não foram encontrados** Google Analytics/GTM, Meta Pixel, Hotjar, Clarity, PostHog, Vercel Analytics ou pixels semelhantes no código.

## 4. Cookies e armazenamento local

- `localStorage['payload-theme']`: preferência de tema, estritamente funcional ([src/components/ThemeSwitch/index.tsx:124](../src/components/ThemeSwitch/index.tsx)).
- Cookie de sessão `payload-token`: apenas para admins em `/admin`.
- Nenhum cookie de marketing ou analytics, então **não é preciso banner de consentimento de cookies** enquanto continuar assim. A política ([politica-de-privacidade/page.tsx:304](../src/app/(frontend)/politica-de-privacidade/page.tsx)) declara isso de forma coerente.

## 5. Configuração e segredos

- `secret: process.env.PAYLOAD_SECRET || 'lira-default-payload-secret-key-change-in-production'` ([src/payload.config.ts](../src/payload.config.ts)): **fallback hardcoded e público**. Se a variável faltar em produção, qualquer pessoa consegue forjar o JWT de admin.
- `.env` está no `.gitignore`; o histórico do git não mostra `.env` real commitado (só `.env.example`). `test.env` só contém `NODE_OPTIONS`.
- `docker-compose.yml` é o template do Payload (Mongo + Node 18) e não é usado em produção (o app usa Postgres): resquício.

## 6. ⚠ Achado crítico: banco SQLite com dados pessoais versionado em repositório público

- `payload.db` (SQLite, 1,4 MB) está **versionado no git** (8 commits no histórico), e o repositório `TiagoFelipheMachado/Institucional-LiraAgendamentos` está **PÚBLICO** no GitHub.
- A tabela `users` contém **2 contas** com e-mail (um domínio corporativo e um Gmail pessoal), **`hash` e `salt` de senha** e campos de reset.
- `form_submissions` está vazia hoje. As versões anteriores no histórico não foram inspecionadas.
- Consequência: dados de autenticação (Res. 15/2024, Art. 5º, IV) expostos publicamente. Pelo Art. 5º, isso pode configurar **incidente de segurança notificável** se houver risco ou dano relevante; a triagem é decisão humana/jurídica.

## 7. Textos públicos versionados

- **Política de Privacidade** ([src/app/(frontend)/politica-de-privacidade/page.tsx](../src/app/(frontend)/politica-de-privacidade/page.tsx)): cobre o SaaS e o site, papéis controlador/operador, terceiros, retenção, direitos, cookies e contato.
  - Seção "Contato e encarregado (DPO)" aponta para `atendimento@liragenda.com.br` **sem identificar o encarregado**. Com ATPP há dispensa de encarregado, mas é obrigatório ter canal (Res. 2/2022, Art. 11). Se for designado, a Res. 18/2024 exige identidade.
  - **Resend** e o host do site não são citados. A transferência internacional é descrita de forma genérica ("cláusulas contratuais").
  - Não identifiquei razão social nem CNPJ do controlador na política (Art. 9º, III exige a identificação do controlador).
  - Não há prazo de retenção específico para **leads do formulário de contato**.
- [ContactPage.tsx:297](../src/components/lira/ContactPage.tsx) afirma "criptografia SSL 256-bit e **conformidade integral com a LGPD**": é uma alegação absoluta, sem lastro documental hoje.
- **Termos de Uso**: presentes em `/termos-de-uso`.

## 8. Fora do alcance do código (validação externa)

DPAs assinados (Resend, host, e-mail), região do Postgres e backups, quem acessa a caixa `atendimento@`, controle de acesso ao `/admin` em produção, enquadramento ATPP (faturamento/grupo econômico) e todo o produto SaaS (outro repositório).
