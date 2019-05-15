let CountProds = 1;
let arrayInputs = [];
let adicionar = [];

function SomaValores() {
    let numero = document.getElementById("num").value;
    if (!isNumber(numero)) {
        mensagem = "Valor inválido";
        AbrirModalDeMensagem(mensagem);
    } else {
        let soma = 0;
        let mensagem = "";
        for (let j = 0; j < arrayInputs.length; j++) {
            let numero = document.getElementById(arrayInputs[j]).value;
            if (numero != "" && isNumber(numero)) {
                soma += filterInt(numero);
            } else {
                mensagem = "Número inválido, conta não pode ser realizada";
                document.getElementById(arrayInputs[j]).focus();
            }
        }
        if (mensagem == "") {
            AbrirModalDeMensagem("Resultado: " + soma);
        } else {
            AbrirModalDeMensagem(mensagem);
        };
    }
}

function AbrirModalDeMensagem(mensagem) {
    const mensagemDoModal = document.getElementById("modal-message");

    mensagemDoModal.innerHTML = mensagem;

    $('#exampleModal').modal('show');
}

function isNumber(n) {
    return !isNaN(parseFloat(n));
}

function filterInt(value) {
    if (/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
        return Number(value);
    return NaN;
}

function AddInput() {
    let numero = document.getElementById("num").value;

    if (!isNumber(numero)) {
        AbrirModalDeMensagem("Número inválido.");
    };

    for (let i = 0; i < numero; i++) {
        let form = document.getElementById("divForm");
        let input = document.createElement("input");

        input.setAttribute("type", "text");
        input.setAttribute("id", "ref" + CountProds);
        input.setAttribute("name", "ref" + CountProds);
        input.setAttribute("class", "form-control");
        input.setAttribute("placeholder", "Digite o número a ser somado...")
        form.appendChild(input);
        adicionar = arrayInputs.push("ref" + CountProds);
        CountProds++;
    }
}