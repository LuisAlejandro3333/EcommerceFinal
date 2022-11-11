const numProducts = document.getElementById('numProducts')
let numP = 0
// Creamos nuestra variable state vacia

const state = {
    listaCompras: []
}

// función que nos permite borrar los items de la lista de compras, en el cual usamos el index del array para ello, el cual lo pasamos por el evento onClick 
// que tiene el boton, esto nos permite borrar el elemento sin tener que usar el ID 
const deleteItem = (i) => {
    const prevState = getState()
    console.log("State => ", prevState)
    actualState = prevState.listaCompras.filter((item, index) => index != parseInt(i))
    numP --
    numProducts.innerHTML =`${numP}`
    setState({listaCompras: actualState})
    totalPrice()
}

//Template UI

// función Plantilla del script la cual contiene el texto que se va a renderizar mas adelante
const template = () => {

    let obj = getState()
    if (obj.listaCompras.length < 1) {
        return `<p>Lista de compras vacía</p>`
    }

    let plantilla =  `
    <span>Producto</span>
    <span>Precio</span>
    <span>Cantidad</span>
    <span>Total</span>
    <span>Acción</span>`

    //Revisar si se debe usar getState

    // Recorremos con la función map el array y guardamos en compras los html que vamos a usar luego
    let compras = obj.listaCompras.map((item, index) => 
    `<span>${item.title}</span>
    <span>${item.price}</span>
    <span>${item.cant}</span>
    <span>${item.price*item.cant}</span>
    <button class="deleteButton" onclick="deleteItem('${index}')">Eliminar</button>`
    ).join("")

    // a la variable plantilla le añadimos la variable compra y no al revez, ya que asi lo que esta en plantilla saldra primero.
    
    plantilla += compras
    return plantilla
}

//función para renderizar el template (mostrar en pantalla lo que hicimos en el script de arriba)
const render = () => {
    let list = d.getElementById('lista-compras')
    if (!list) return
    list.innerHTML = template()
}

// función que nos sirve para darle valores a nuestro state
const setState = (obj) => {
    for (let key in obj) {
        if (state.hasOwnProperty(key)) {
            state[key] = obj[key]
        }
    }
    render()
}

//Función para obtener los datos que tiene nuestro estado
const getState = () => JSON.parse(JSON.stringify(state))


// función que usamos en app.js al momento de agregar productos

const addItem = (title,price,id) => {
    const items = getState()

    let resultFind = items.listaCompras.findIndex(element => element.id == id)
    console.log(resultFind)
    // Con el resultado de findIndex, teniendo el id del producto, podemos saber si dicho producto se encuentra dentro de nuestra variable state,
    // Si nos da como resultado -1 significa que no lo encontro, en caso de conseguirlo nos dara la ubicación del producto dentro de nuestro array
    if(resultFind!=-1){
        // Modificamos nuestro arreglo items.listaCompras en la posicion de resultFind, y luego colocamos .cant para modificar solamente 
        // la cantidad de dicho producto
        items.listaCompras[resultFind].cant ++
        
        // hacemos un alert para que el usuario pueda ver que si se agrego el producto al carrito
        alert(`Se agrego un nuevo producto "${title}" ahora tienes ${items.listaCompras[resultFind].cant} en total`)
    }else{
        // en caso de que el producto no exista, creamos un objeto con todos los datos del producto y hacemos un push de este objeto
        obj = {
            'title': title,
            'price': price,
            'cant': 1,
            'id': `${id}`
        }
        items.listaCompras.push(obj)
        alert(`Se agrego el producto "${title}"`)
        numP ++
        numProducts.innerHTML =`${numP}`

    }

    // Agregamos nuestro objeto a la variable state
    setState(items)
    
    //Modificamos el monto total del carrito
    totalPrice()
}

// Nos sirve para calcular el precio total del carrito y mostrarlo en pantalla, tambien se podria separar en una función render etc
const totalPrice = () => {
    const items = getState()
    let sumTotal = 0
    let resultFind = items.listaCompras.map(element => 
        //console.log("elemento",element)
        sumTotal += (element.price*element.cant)
    )
    document.getElementById('total').innerHTML = 'Precio Total: '+sumTotal
    
    if(sumTotal==0){
        document.getElementById('total').innerHTML = ''
    }
}
