// Aquí declaro los botones de "añadir al carrito", de cada producto
const anadirNaruto = document.querySelector('#addNaruto');
const anadirJujutsu = document.querySelector('#addJujutsu');
const anadirTensura = document.querySelector('#addTensura');
const anadirKimetsu = document.querySelector('#addKimetsu');


// Este es el botón para limpiar el carrito :3
const botonLimpiar = document.querySelector('#limpiarCarrito');

// Aquí declaro el contador visual del carrito, al badge del HTML
const contadorVisual = document.querySelector('#contadorCarrito');
const contadorVisualNaruto = document.querySelector('#cantidadCarritoNaruto');
const contadorVisualJujutsu = document.querySelector('#cantidadCarritoJujutsu');
const contadorVisualTensura = document.querySelector('#cantidadCarritoTensura');
const contadorVisualKimetsu = document.querySelector('#cantidadCarritoKimetsu');

// Aquí declaramos el contador general y el contador de cada producto
let carritoCount = Number(localStorage.getItem('carrito-contador')) || 0;

// Aquí manifiesto que el span/texto del contador visual debe mostrar la variable del contador del carrito, para que se vaya actualizando
contadorVisual.innerText = carritoCount;


// Botón de añadir al carrito Naruto
anadirNaruto.addEventListener('click', () => {
    carritoCount++;

    localStorage.setItem('carrito-contador', carritoCount);

    console.log('Carrito total: ' + carritoCount);
    contadorVisual.innerText = carritoCount;
});

// Botón de añadir al carrito Jujutsu Kaisen
anadirJujutsu.addEventListener('click', () => {
    carritoCount++;

    localStorage.setItem('carrito-contador', carritoCount);

    console.log('Carrito total: ' + carritoCount);
    contadorVisual.innerText = carritoCount;
});

// Botón de añadir al carrito Tensura
anadirTensura.addEventListener('click', () => {
    carritoCount++;

    localStorage.setItem('carrito-contador', carritoCount);

    console.log('Carrito total: ' + carritoCount);
    contadorVisual.innerText = carritoCount;
});

// Botón de añadir al carrito Kimetsu no Yaiba
anadirKimetsu.addEventListener('click', () => {
    carritoCount++;

    localStorage.setItem('carrito-contador', carritoCount);

    console.log('Carrito total: ' + carritoCount);
    contadorVisual.innerText = carritoCount;
});


// Función flecha para el click de Limpiar el localStorage (carrito)
botonLimpiar.addEventListener('click', () => {
    localStorage.clear();

    //location.reload(); Estaba usando esta, pero no se ve pro

    //Reinicio los datos, para que no debamos actualizar la página.
    carritoCount = 0;

    contadorVisual.innerText = carritoCount;

    console.log('Has limpiado el localStorage de este sitio correctamente');
});

