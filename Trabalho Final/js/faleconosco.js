var textarea = document.querySelector('textarea');
var info = document.getElementById('carResTxtVoce');
var limite = 500;
textarea.addEventListener('keyup', verificar);


function verificar(e) {
    var qtdcaracteres = this.value.length;
    var restantes = limite - qtdcaracteres;
    if (restantes < 1) {
        this.value = this.value.slice(0, limite);
        return info.innerHTML = 0;
    }
    info.innerHTML = restantes;
}

function Enviado(){
    alert("Mensagem enviada!");
}