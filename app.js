
const carrito = document.getElementById('carrito')
const template = document.getElementById('template')
const fragment = document.createDocumentFragment()
/* Crea un nuevo DocumentFragment vacio, dentro del cual un nodo del DOM puede ser adicionado para construir un nuevo arbol DOM fuera de pantalla. */

const btnesBotones = document.querySelectorAll('.card .btn')


/* donde almacenamos los productos */
const carritoObjeto = {}


/* dataset es para acceder al identificador (cada punto avanza uno..despues del guión de data, pj) */
const agregarAlCarrito = (e) => {

    console.log(e.target.dataset.fruta)


/*     ésto es un carritoObjeto. Que tiene propiedades y valores */
        const producto = {
            titulo: e.target.dataset.fruta,
            id: e.target.dataset.fruta,
            cantidad: 1
        };

/* El método hasOwnProperty() devuelve un booleano indicando si el objeto tiene la propiedad especificada */
        if(carritoObjeto.hasOwnProperty(producto.id)){
            producto.cantidad = carritoObjeto[producto.id].cantidad + 1
        }

    carritoObjeto[producto.titulo] = producto


    pintarCarrito()

    /* console.log(carritoObjeto) */
}


const pintarCarrito = () => {

    carrito.textContent= ' '
    
    Object.values(carritoObjeto).forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)

};


/* recorrido de cada boton para detectarlo */

btnesBotones.forEach((btn)=> btn.addEventListener( "click", agregarAlCarrito ))




































