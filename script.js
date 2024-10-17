// Função que exibe o alerta
function showAlert() {
    alert("YOU ARE AN IDIOT!");
}

// Função que inicia os alertas repetidos
function startMadness() {
    setInterval(() => {
        showAlert();
    }, 1000);
}

// Função que abre janelas pop-up repetidamente
function openPopups() {
    setInterval(() => {
        window.open(window.location.href, "_blank", "width=200,height=100");
    }, 2000);
}

// Inicia os alertas e as pop-ups quando a página é carregada
window.onload = function() {
    startMadness();
    openPopups();
};
