# Gap Analysis LGPD — Site institucional Lira Agenda

**Data**: 2026-11-15 · **Regime**: ATPP declarado (Res. CD/ANPD nº 2/2022), sujeito a verificação · **Fonte**: [discovery.md](discovery.md)

## Matriz

| Dimensão | Status | Evidência | Tipo |
|---|---|---|---|
| Inventário de dados e cookies/SDKs | PARCIAL | Site enxuto, sem trackers; não há `data-map.md` | Técnica + Governança |
| Base legal por atividade | GAP | Nada documentado (contato → provável Art. 7º, V pré-contratual; admins → Art. 7º, V/IX) | Jurídica |
| Encarregado ou canal ATPP | PARCIAL | Canal `atendimento@` existe, mas é rotulado "encarregado (DPO)" sem identidade | Organizacional + Web |
| DSAR (ATPP: 15d simplificado / 30d completo) | PARCIAL | Canal por e-mail; sem fluxo nem registro de atendimento | Operacional |
| Ledger de consentimento | N/A | Nenhum tratamento baseado em consentimento no site; sem cookies de marketing | — |
| Criptografia em trânsito / repouso | VALIDAÇÃO EXTERNA | HTTPS e criptografia do volume dependem do host | Infra |
| Segurança de autenticação admin | **GAP** | Fallback de `PAYLOAD_SECRET` hardcoded; `payload.db` com hashes público | Técnica |
| Trilha de auditoria sem PII em claro | OK (no código) | `console.error` não loga os campos do formulário | Técnica |
| Retenção (leads, admins, backups) | GAP | Sem prazo para leads na caixa de e-mail nem em `form-submissions` | Técnica + Jurídica |
| Terceiros e DPAs (Art. 39) | GAP | Resend e host não classificados nem listados na política | Contratual |
| Transferência internacional | GAP | Resend (EUA): exige mecanismo do Art. 33 (ex.: SCCs da Res. 19/2024) | Contratual |
| Runbook e log de incidentes de 5 anos | GAP | Inexistente, e há um provável incidente aberto (P0-1) | Operacional |
| ECA Digital | N/A (provisório) | Site B2B informativo, fora das 8 categorias presumidas; sem cadastro aberto | Produto |

## P0: exposição imediata

### Ações de engenharia (repositório)
> 2026-11-15: itens 1 (parcial: só o índice e o `.gitignore`) e 3 (só o código) aplicados. Histórico, force-push, senhas e rotação do segredo continuam pendentes. Ver [incidents/log.md](incidents/log.md).

1. **Remover `payload.db` do repositório e do histórico.**
   - `git rm --cached payload.db`, adicionar `*.db` ao `.gitignore`, reescrever o histórico (`git filter-repo --path payload.db --invert-paths`) e fazer force-push. Isso é coordenado com o dono do repo, porque reescreve o histórico de todos.
   - Pedir ao GitHub a limpeza de cache e forks se necessário. Assumir que o arquivo **já foi copiado**: a remoção não desfaz a exposição.
2. **Trocar as senhas das 2 contas admin** (as locais e, se forem as mesmas, as de produção) e de qualquer outro serviço onde essas senhas sejam reutilizadas.
3. **Remover o fallback de `PAYLOAD_SECRET`** em [src/payload.config.ts](../src/payload.config.ts): falhar no boot se a variável faltar. Fazer rotação do segredo em produção (isso invalida as sessões).

### Ações jurídicas / organizacionais
4. **Triagem de incidente (Res. 15/2024, Art. 5º).** Envolve dados de autenticação (critério IV); falta avaliar risco ou dano relevante. Registrar `T+0` (data de ciência: 2026-11-15) em `.lgpd/incidents/log.md`. ATPP: **6 dias úteis** para comunicar à ANPD, se for notificável. Decisão humana/jurídica.

## P1: fundamentos

### Engenharia
5. Adicionar aviso curto junto ao botão de envio do formulário de contato ("Usaremos seus dados para responder ao contato. Veja a [Política de Privacidade]").
6. Rever a frase "conformidade integral com a LGPD" em `ContactPage.tsx:297`. É uma alegação absoluta, sem lastro.
7. Política de privacidade: incluir a identificação do controlador (razão social e CNPJ), Resend e o host do site entre os terceiros, retenção dos leads e transferência para os EUA com o mecanismo usado. Trocar "encarregado (DPO)" por "canal de privacidade" (ATPP) **ou** identificar o encarregado (Res. 18/2024).
8. Decidir sobre `form-submissions`: se não for usado, remover o plugin form-builder (menos superfície pública de `create`). Se for usado, definir retenção.

### Jurídico / organizacional
9. Confirmar o enquadramento ATPP (faturamento, grupo econômico, ausência de alto risco). **Atenção:** o produto SaaS usa IA (OpenRouter) sobre conversas de clientes finais. Isso pode atender a um critério específico do Art. 4º (tecnologia emergente); avaliar junto com a escala.
10. Assinar ou registrar o DPA do Resend e do host; verificar a região de dados.
11. Definir prazo de retenção dos leads na caixa `atendimento@` (sugestão: 12 a 24 meses sem conversão) e quem tem acesso a ela.
12. Criar um procedimento mínimo de DSAR (prazos ATPP) e o log de incidentes de 5 anos.

## P2: maturidade
13. Limpar resquícios do template (`docker-compose.yml` com Mongo, textos "Payload Website Template" no SEO e seed com `form-submissions`).
14. Ativar 2FA ou SSO no `/admin`, se o Payload/plugin permitir, e revisar periodicamente os usuários admin.

> Observação: a pasta `.lgpd/` em um repositório **público** expõe o diagnóstico (inclusive gaps de segurança). Considere não commitá-la, ou mantê-la em um repositório privado.
