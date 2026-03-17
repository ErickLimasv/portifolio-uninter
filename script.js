const DOMIdade = document.querySelectorAll(".idade");
const mobileMenu = document.getElementById("mobile-menu-items");

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

function toggleMobileMenu() {
    mobileMenu.style.display = mobileMenu.style.display == "flex" ? "none" : "flex";
}

document.addEventListener("click", (event) => {
    if (mobileMenu.style.display == "flex") {
        event.target.id != "button-menu" && toggleMobileMenu()
    }
});