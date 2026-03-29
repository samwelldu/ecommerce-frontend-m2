// Aquí declaro los botones de "añadir al carrito", de cada producto
const anadirNaruto = document.querySelector('#addNaruto');
const anadirJujutsu = document.querySelector('#addJujutsu');
const anadirTensura = document.querySelector('#addTensura');
const anadirKimetsu = document.querySelector('#addKimetsu');


// Este es el botón para limpiar el carrito :3
const botonLimpiar = document.querySelector('#limpiarCarrito');

// Aquí declaro el contador visual del carrito, al badge del HTML
const contadorVisual = document.querySelector('#contadorCarrito');

// Aquí declaramos el contador del carrito
let carritoCount = 0;

// Aquí manifiesto que el span/texto del contador visual debe mostrar la variable del contador del carrito, para que se vaya actualizando
contadorVisual.innerText = carritoCount;

anadirNaruto.addEventListener('click', () => {
    carritoCount++; // Aumentamos 1 la cantidad del carrito.

    console.log('Carrito total: ' + carritoCount); // Mostramos por consola la actualización
    contadorVisual.innerText = carritoCount; // Actualizamos el dato visible en el front.
});

anadirJujutsu.addEventListener('click', () => {
    carritoCount++;

    console.log('Carrito total: ' + carritoCount);
    contadorVisual.innerText = carritoCount;
});

anadirTensura.addEventListener('click', () => {
    carritoCount++;

    console.log('Carrito total: ' + carritoCount);
    contadorVisual.innerText = carritoCount;
});

anadirKimetsu.addEventListener('click', () => {
    carritoCount++;

    console.log('Carrito total: ' + carritoCount);
    contadorVisual.innerText = carritoCount;
});


botonLimpiar.addEventListener('click', () => {

    carritoCount = 0; // Volvemos a darle un valor 0 al carrito

    contadorVisual.innerText = carritoCount; // Actualizamos con el nuevo valor en 0 en el front.

    console.log('Carrito limpio'); // Mostramos por consola la actualización del localStorage
});