const stripe = Stripe('pk_test_sua_chave_publica_aqui'); // Substitua pela sua chave pública

document.getElementById('checkout-button').addEventListener('click', async () => {
    const button = document.getElementById('checkout-button');
    button.disabled = true;
    button.textContent = 'Processando...';

    try {
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            alert(result.error.message);
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao processar pagamento');
    } finally {
        button.disabled = false;
        button.textContent = '🔒 Pagar e Acessar Agora';
    }
});