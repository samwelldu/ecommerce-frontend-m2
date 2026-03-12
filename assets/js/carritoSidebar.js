const btnCarrito = document.querySelector('#btnCart');
const carritoTan = document.querySelector('#sidebarCart');

btnCarrito.addEventListener('click', () => {
    if (carritoTan.classList.contains('hiddenCarrito')) {
        carritoTan.classList.remove('hiddenCarrito');
    } else {
        carritoTan.classList.add('hiddenCarrito');
    }
});