const mobileMenu = document.getElementById("mobile-menu-items");

function toggleMobileMenu() {
    mobileMenu.style.display = mobileMenu.style.display == "flex" ? "none" : "flex";
}

document.addEventListener("click", (event) => {
    if (mobileMenu.style.display == "flex") {
        event.target.id != "button-menu" && toggleMobileMenu()
    }
});