const form = document.getElementById('contact');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');
var formErro = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if(validarForm(nome, email, mensagem)) {
        alert("Mensagem enviada com sucesso!\nObrigado " + nome.value + "!");

        toggleInputErrorAll();

        nome.value = '';
        email.value = '';
        mensagem.value = '';
    } else {
        toggleInputErrorAll();

        formErro.forEach((erro) => {
           erro.target.classList.toggle('erro');

           alert("Erro! " + erro.mensagem + "\nPor favor, corrija o campo: " + erro.target.name);
        });

        formErro = [];
    }
})

function validarForm(nome, email, mensagem) {
    if (nome.value.trim().length < 3) {
        formErro.push({mensagem: 'O nome deve ter pelo menos 3 caracteres.', target: nome});
    }

    if (email.value.trim().length < 10) {
        formErro.push({mensagem: 'O email deve ter pelo menos 10 caracteres.', target: email});
    }

    if (mensagem.value.trim().length < 10) {
        formErro.push({mensagem: 'A mensagem deve ter pelo menos 10 caracteres.', target: mensagem});
    }

    if (formErro.length <= 0) {
        return true;
    } else {
        return false;
    }
}

function toggleInputErrorAll() {
    let erroInput = document.querySelectorAll('.erro');

    erroInput.forEach((input) => {
        input.classList.toggle('erro');
    });
}