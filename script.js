function openTab(evt, tabName) {
    var i, tabcontent, tabbuttons;

    // Masquer tous les contenus des onglets avec une animation de disparition
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
        tabcontent[i].style.animation = "fadeOut 0.5s ease-in-out";
    }

    // Retirer la classe active de tous les boutons
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    // Afficher le contenu de l'onglet actuel et ajouter la classe active au bouton
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
    document.getElementById(tabName).style.animation = "fadeIn 0.5s ease-in-out"; // Animation pour l'apparition
}

const scroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true,
    inertia: 0.8  // Ajustez l’inertie (0.8 pour un effet léger)
});
