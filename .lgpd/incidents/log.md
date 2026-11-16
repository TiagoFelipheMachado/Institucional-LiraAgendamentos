# Registro interno de incidentes de segurança

Guarda mínima de 5 anos (Res. CD/ANPD nº 15/2024, Art. 10), inclusive dos incidentes não comunicados à ANPD.

## INC-2026-001: Banco SQLite com dados de admins em repositório público

| Campo | Valor |
|---|---|
| **T+0 (ciência)** | 2026-11-15, durante a auditoria LGPD (L1) |
| **Descrição** | `payload.db` (SQLite local) versionado no repositório GitHub público `Institucional-LiraAgendamentos`, presente em 8 commits do histórico |
| **Dados afetados** | 2 contas admin do CMS: nome, e-mail, hash e salt de senha (PBKDF2 do Payload) e campos de reset. Histórico de `form_submissions`: **não verificado** |
| **Titulares** | 2 (administradores internos) |
| **Categoria Art. 5º Res. 15/2024** | IV: dados de autenticação em sistemas |
| **Período de exposição** | Desde o primeiro commit do arquivo até a remoção do histórico (pendente) |
| **Contenção** | 2026-11-15: arquivo removido do índice (`git rm --cached`) e `*.db` adicionado ao `.gitignore`; fallback hardcoded de `PAYLOAD_SECRET` removido. 2026-11-15: histórico **local** reescrito com `git filter-branch` (main, dev-tiago, feat/checkout-links, dev-vinicius), com backup em bundle. **Pendente:** force-push das 4 branches, pedido ao GitHub para purgar o cache e as referências de PR, reclonar as cópias de outros colaboradores e trocar as senhas |
| **Notificável?** | ⏸ **DECISÃO HUMANA/JURÍDICA.** Avaliar risco ou dano relevante (força das senhas, reutilização em produção ou outros serviços). Prazo ATPP: 6 dias úteis a partir de T+0, se notificável |
| **Decisão e justificativa** | _a preencher_ |
| **Comunicação ANPD / titulares** | _a preencher_ |
