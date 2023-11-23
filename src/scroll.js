window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbars");

    if (window.scrollY > 400) {
        navbar.style.backgroundColor = "black"; // Cor que deseja quando o usuário rolar a página
    } else {
        navbar.style.backgroundColor = "#00000033"; // Cor inicial da barra de navegação
    }
});