function validateEmail() {

    let spanval = document.querySelector(".validation-js");
    const emailInput = document.getElementById('email-newsletter');
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let mainContainer = document.querySelector('.main-container')
    let successSubscription = document.querySelector('.success-subscription');


    if (emailRegex.test(email)) {
        // E-mail é válido
        spanval.classList.remove('is-invalid');
        spanval.classList.add('is-valid');


        emailInput.classList.remove('email-invalid')

        mainContainer.classList.add('is-valid')


        successSubscription.classList.remove('is-valid');
        successSubscription.classList.add('is-invalid');

        exibirValor();


    } else {
        // E-mail é inválido
        spanval.classList.remove('is-valid');
        spanval.classList.add('is-invalid');


        emailInput.classList.add('email-invalid')

    }
}

function exibirValor() {
    // Obtém o valor digitado pelo usuário
    var valor = document.getElementById('email-newsletter').value;

    // Define o valor no elemento <p> para exibição
    document.getElementById('valorExibido').textContent = valor;

    document.getElementById('valorExibido').style.fontWeight = "bold";
}




const subscribeBtn = document.getElementById('subscribe-btn');
subscribeBtn.addEventListener('click', validateEmail);

