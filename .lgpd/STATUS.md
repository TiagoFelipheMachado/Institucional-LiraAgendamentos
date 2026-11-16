# LGPD Privacy Engineering Status

**Projeto**: Site institucional Lira Agenda (Next.js + Payload CMS)
**Cenário**: B (Legacy)
**Enquadramento declarativo**: ATPP (Res. 2/2022), sujeito à verificação de alto risco (ver gaps.md #9)
**ECA Digital**: N/A provisório (site B2B informativo)
**Início**: 2026-11-15
**Última atualização**: 2026-11-15
**Encarregado / Canal**: ATPP. Canal atual: atendimento@liragenda.com.br (rotulado como "encarregado"; ajustar)

## Escopo verificado vs. fora do repositório
- **Verificado no código**: coleções do Payload, formulário de contato e Server Action, plugins, config, `.gitignore` e histórico, cookies e localStorage, textos de privacidade e termos.
- **Requer validação externa**: produto SaaS (outro repo), host e região, DPAs, caixa de e-mail, IAM de produção e faturamento (ATPP).

## Pipeline atual
- [x] L0: Setup e enquadramento
- [x] L1: Legacy retrofit (discovery + gaps) ⏸ CHECKPOINT
- [ ] L2: Data mapping
- [ ] L3: Legal basis
- [ ] L4: Encarregado / canal ATPP
- [ ] L5: Vendors + DPA + transferência internacional
- [ ] L6: Retenção / anonimização
- [ ] L7: ECA Digital / consentimento (N/A provisório)
- [ ] L8: Criptografia + audit logging
- [ ] L9: DSAR
- [ ] L10: Incident response
- [ ] L11: ROPA ⏸
- [ ] L12: RIPD ⏸
- [ ] L13: Política de privacidade ⏸
- [ ] L14: Relatório final

## Artefatos gerados
- `.lgpd/discovery.md`: concluído, 2026-11-15
- `.lgpd/gaps.md`: concluído, 2026-11-15

- `.lgpd/incidents/log.md`: INC-2026-001 aberto, 2026-11-15

## Próximo passo
Resolver o P0 (payload.db público + PAYLOAD_SECRET) e a triagem de incidente; depois, L2 (data mapping).
