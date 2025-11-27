// inicializa o stripe com a chave pública
const stripe = Stripe('pk_test_51SXM9kASn2QfWFFqgLWD6yxVUonfEIrBjlKYFckgTCuMVYQ808hRZuJ8UclKhFwH7xPVVCVC8UQepd7WePtuue8t0044VTIX8b');

// pega o botão e adiciona um evento de clique
document.getElementById('checkout-button').addEventListener('click', async () => {
    const button = document.getElementById('checkout-button');
    button.disabled = true; // desativa o botão pra evitar cliques repetidos
    button.textContent = 'Processando...'; // muda o texto do botão

    try {
        // faz uma requisição pra criar uma sessão de checkout
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // pega a sessão criada
        const session = await response.json();

        // redireciona o usuário pro checkout do stripe
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        // se der erro no redirecionamento, mostra uma mensagem
        if (result.error) {
            alert(result.error.message);
        }
    } catch (error) {
        // se algo der errado, mostra no console e alerta o usuário
        console.error('Erro:', error);
        alert('Erro ao processar pagamento');
    } finally {
        // reativa o botão e volta o texto original
        button.disabled = false;
        button.textContent = 'Pagar e Acessar Agora!';
    }
});