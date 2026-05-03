// Seleccionamos el elemento (en este caso el cuerpo de la página)
const body = document.querySelector('body');

// Función que genera y aplica el color
const cambiarColor = () => {
    const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    body.style.backgroundColor = colorAleatorio;
    console.log(`Nuevo color: ${colorAleatorio}`);
};

// Ejecutar la función
cambiarColor();

