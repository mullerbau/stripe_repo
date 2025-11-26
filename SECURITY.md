# 🔒 Segurança

## ⚠️ IMPORTANTE - Credenciais

**NUNCA** commite o arquivo `.env` no Git! Ele contém suas chaves secretas do Stripe.

### Arquivos protegidos:
- `.env` - Contém chaves secretas (ignorado pelo Git)
- `node_modules/` - Dependências (ignorado pelo Git)

### Para configurar em outro ambiente:
1. Copie `.env.example` para `.env`
2. Adicione suas chaves reais do Stripe
3. Atualize a chave pública no `index.html`

### Chaves do Stripe:
- **Chave Pública** (pk_test_...): Pode ser exposta no frontend
- **Chave Secreta** (sk_test_...): NUNCA exponha no frontend ou Git

### Modo de teste vs Produção:
- **Teste**: pk_test_... e sk_test_...
- **Produção**: pk_live_... e sk_live_...

**Sempre use modo teste para desenvolvimento!**