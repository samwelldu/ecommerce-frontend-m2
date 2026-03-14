const anadirNaruto = document.querySelector('#addNaruto');
const anadirJujutsu = document.querySelector('#addJujutsu');
const anadirTensura = document.querySelector('#addTensura');
const anadirKimetsu = document.querySelector('#addKimetsu');
const botonLimpiar = document.querySelector('#limpiarCarrito');

let contadorVisual = document.querySelector('#contadorCarrito');

let carritoCount = Number(localStorage.getItem('carrito-contador')) || 0;
let carritoCountNaruto = Number(localStorage.getItem('naruto-contador')) || 0;
let carritoCountJujutsu = Number(localStorage.getItem('jujutsu-contador')) || 0;
let carritoCountTensura = Number(localStorage.getItem('tensura-contador')) || 0;
let carritoCountKimetsu = Number(localStorage.getItem('kimetsu-contador')) || 0;

contadorVisual.innerText = carritoCount;

//Añadir Naruto
anadirNaruto.addEventListener('click', () => {
    carritoCount++;
    carritoCountNaruto++;

    localStorage.setItem('carrito-contador', carritoCount);
    localStorage.setItem('naruto-contador', carritoCountNaruto);

    console.log('Naruto: ' + carritoCountNaruto);
    console.log('Carrito total: ' + carritoCount);
    contadorVisual.innerText = carritoCount;
});

//Añadir Jujutsu
anadirJujutsu.addEventListener('click', () => {
    carritoCount++;
    carritoCountJujutsu++;

    localStorage.setItem('carrito-contador', carritoCount);
    localStorage.setItem('jujutsu-contador', carritoCountJujutsu);

    console.log('Naruto: ' + carritoCountJujutsu);
    console.log('Carrito total: ' + carritoCount);
    contadorVisual.innerText = carritoCount;
});

//Añadir Tensura
anadirTensura.addEventListener('click', () => {
    carritoCount++;
    carritoCountTensura++;

    localStorage.setItem('carrito-contador', carritoCount);
    localStorage.setItem('tensura-contador', carritoCountTensura);

    console.log('Naruto: ' + carritoCountTensura);
    console.log('Carrito total: ' + carritoCount);
    contadorVisual.innerText = carritoCount;
});

//Añadir Kimetsu
anadirKimetsu.addEventListener('click', () => {
    carritoCount++;
    carritoCountKimetsu++;

    localStorage.setItem('carrito-contador', carritoCount);
    localStorage.setItem('kimetsu-contador', carritoCountKimetsu);

    console.log('Naruto: ' + carritoCountKimetsu);
    console.log('Carrito total: ' + carritoCount);
    contadorVisual.innerText = carritoCount;
});

//Botón para limpiar el carrito

botonLimpiar.addEventListener('click', () => {
    localStorage.clear();

    // Estaba usando esta, pero siento que es muy tosca: location.reload();

    carritoCount = 0;
    carritoCountNaruto = 0;
    carritoCountJujutsu = 0;
    carritoCountTensura = 0;
    carritoCountKimetsu = 0;

    contadorVisual.innerText = carritoCount;

    console.log('Has limpiado el localStorage de este sitio correctamente');
    

});
