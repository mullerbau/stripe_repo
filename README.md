# Projeto Stripe - Trabalho Faculdade

Projeto simples de integração com Stripe para teste de pagamento e redirecionamento.

## Funcionalidades
- Landing page com botão de pagamento
- Pagamento de R$ 1,00 via Stripe
- Redirecionamento para área VIP após pagamento
- Área VIP com vídeo do YouTube

## Como configurar

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar chaves do Stripe
1. Acesse [dashboard.stripe.com](https://dashboard.stripe.com)
2. Crie uma conta (use modo teste)
3. Vá em "Developers" > "API keys"
4. Copie o arquivo `.env.example` para `.env`:
   ```bash
   copy .env.example .env
   ```
5. Edite o arquivo `.env` com suas chaves:
   - `STRIPE_PUBLISHABLE_KEY` (pk_test_...)
   - `STRIPE_SECRET_KEY` (sk_test_...)

### 3. Atualizar chave pública no HTML
Edite o arquivo `public/index.html` na linha:
```javascript
const stripe = Stripe('sua_chave_publica_aqui');
```

### 4. Executar o projeto
```bash
npm start
```

Acesse: http://localhost:3000

## Estrutura do projeto
```
├── server.js          # Servidor Express + Stripe
├── package.json       # Dependências
├── .env              # Chaves do Stripe
└── public/
    ├── index.html    # Landing page
    ├── success.html  # Área VIP
    └── style.css     # Estilos
```

## Para testar pagamentos
Use os cartões de teste do Stripe:
- **Sucesso**: 4242 4242 4242 4242
- **Falha**: 4000 0000 0000 0002
- Qualquer data futura e CVC

## Personalização
- Altere o vídeo do YouTube em `success.html`
- Modifique os estilos em `style.css`
- Ajuste o valor em `server.js` (linha `unit_amount`)