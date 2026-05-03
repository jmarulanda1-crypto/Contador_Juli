
let cuenta = 0;
const pantalla = document.getElementById('numero');
const btnSumar = document.getElementById('sumar');
const btnRestar = document.getElementById('restar');
const btnReset = document.getElementById('reset');

//inner.text se usa para actualizar
function actualizar() {
    pantalla.innerText = cuenta;

    //Alerta
    if (cuenta > 10) {
        alert("Exceso de felicidad🍫");
    }

    if (cuenta <= 0) {
        alert("Una al año no hace daño 🍫");
        cuenta = 0; 
        pantalla.innerText = cuenta;
    }

   //condicionn. 
    if (cuenta === 10) {
        pantalla.classList.add('meta-alcanzada');
    } else {
        pantalla.classList.remove('meta-alcanzada');
    }
}


btnSumar.onclick = () => {
    cuenta++;
    actualizar();
};

btnRestar.onclick = () => {
    cuenta--;
    actualizar();
};

btnReset.onclick = () => {
    cuenta = 0;
    actualizar();
};