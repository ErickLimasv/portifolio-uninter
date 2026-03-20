const DOMIdade = document.querySelectorAll(".idade");

DOMIdade.forEach((element) => {
    element.append(calcularIdade() + " anos");
})

function calcularIdade() {
    let hoje = new Date();
    let nascimento = new Date(2003, 11, 6);

    return transformarMilisegundosEmAnos(hoje - nascimento);
}

function transformarMilisegundosEmAnos(milisegundos) {
    return Math.trunc((milisegundos / (1000 * 60 * 60 * 24)) / 365);
}