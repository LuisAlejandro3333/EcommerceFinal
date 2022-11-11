// Nuestro json el cual le agregamos mas productos para que quede acorde con los productos que trae la api de mercado libre
// Obviamente tambien podriamos modificar la api por codigo para que en vez de 50 productos nos muestre hasta 12 en vez de los 50.
const json = {
    items: [
    {
        title: 'Saborizante Para Leche Milo® Activ-go® Bolsa 1000g',
        img: 'https://http2.mlstatic.com/D_NQ_NP_705727-MLC46239586760_062021-V.webp',
        price: 7590,
        id: 1
    },
    {
        title: 'MÁS VENDIDO Leche de fórmula en polvo Nestlé Nido 1+ Protectus en lata de 1.6kg - 12 meses 3 años',
        img: 'https://http2.mlstatic.com/D_NQ_NP_658179-MLA49575506482_042022-V.webp',
        price: 14990,
        id: 2
    },
    {
        title: 'Cereal Estrellitas 470g',
        img: 'https://http2.mlstatic.com/D_NQ_NP_612523-MLC47354709226_092021-V.webp',
        price: 2770,
        id: 3
    },
    {
        title: 'Pack Barra Cereal Costa Cereal Bar Frutos Rojos 8 Un De 21 G',
        img: 'https://http2.mlstatic.com/D_NQ_NP_925281-MLC48654637452_122021-V.webp',
        price: 1730,
        id: 4
    },
    {
        title: 'Carozzi Pasta Espiral 49 400 Gr',
        img: 'https://http2.mlstatic.com/D_NQ_NP_855200-MLC49533662174_032022-V.webp',
        price: 980,
        id: 5
    },
    {
        title: 'Carozzi Pasta Pack 3 Spaghetti 5 + Salsa',
        img: 'https://http2.mlstatic.com/D_NQ_NP_996884-MLC49303524585_032022-V.webp',
        price: 2980,
        id: 6
    },
    {
        title: 'Azúcar Granulada Nuestra Cocina Bolsa 1.6 Kg',
        img: 'https://http2.mlstatic.com/D_NQ_NP_953174-MLC48654655435_122021-V.webp',
        price: 1690,
        id: 7
    },
    {
        title: 'Azúcar Blanca Iansa Granulada 1 Kg',
        img: 'https://http2.mlstatic.com/D_NQ_NP_813003-MLC48654531367_122021-V.webp',
        price: 1390,
        id: 8
    },
    {
        title: 'Tortas De Cuchuflí',
        img: 'https://http2.mlstatic.com/D_NQ_NP_816268-MLC50860720169_072022-V.webp',
        price: 9700,
        id: 9
    },
    {
        title: 'Maruchan Instant Lunch Pollo 12 Unidades',
        img: 'https://http2.mlstatic.com/D_NQ_NP_804247-MLC46247274822_062021-V.webp',
        price: 9990,
        id: 10
    },
    {
        title: 'Leche de fórmula en polvo Nutricia Neocate LCP  en lata de 400g - 0  a  12 meses',
        img: 'https://http2.mlstatic.com/D_NQ_NP_714376-MLA47526882600_092021-V.webp',
        price: 6964,
        id: 11
    },
    {
        title: 'Maruchan Ramen Carne 24 Unidades',
        img: 'https://http2.mlstatic.com/D_NQ_NP_740643-MLC46965611143_082021-V.webp',
        price: 11990,
        id: 12
    },
    {
        title: 'Picado Nestlé® Naturnes® Pastel De Choclo 250g',
        img: 'https://http2.mlstatic.com/D_NQ_NP_763676-MLC49601687691_042022-V.webp',
        price: 1830,
        id: 13
    },
    {
        title: 'Picado Nestlé® Naturnes® Carne, Zanahoria Y Arroz 250g',
        img: 'https://http2.mlstatic.com/D_NQ_NP_895320-MLC49601704542_042022-V.webp',
        price: 2290,
        id: 14
    },
    {
        title: 'Picado Nestlé® Naturnes® Cazuela De Vacuno 250g',
        img: 'https://http2.mlstatic.com/D_NQ_NP_864763-MLC49601870448_042022-V.webp',
        price: 2290,
        id: 15
    },
    {
        title: 'Picado Nestlé® Naturnes® Pollo, Zanahoria Y Arroz 215g',
        img: 'https://http2.mlstatic.com/D_NQ_NP_840618-MLC47967495779_102021-V.webp',
        price: 2090,
        id: 16
    },
    {
        title: 'Soul Bar Maqui-chía 35 Grs (5 U.)',
        img: 'https://http2.mlstatic.com/D_NQ_NP_834165-MLC51058966156_082022-V.webp',
        price: 3290,
        id: 17
    },
    {
        title: 'Soul Bar Limón (5 Unidades)',
        img: 'https://http2.mlstatic.com/D_NQ_NP_733596-MLC51058689895_082022-V.webp',
        price: 3290,
        id: 18
    },
    {
        title: 'Pack Barra Cereal Costa Cereal Bar Choco Cereal 8 Un De 18 G',
        img: 'https://http2.mlstatic.com/D_NQ_NP_891740-MLC48654619045_122021-V.webp',
        price: 1730,
        id: 19
    },
    {
        title: 'Pack Barra Cereal Costa cerliatillo Bar Frutos Rojos 8 Un De 21 G',
        img: 'https://http2.mlstatic.com/D_NQ_NP_925281-MLC48654637452_122021-V.webp',
        price: 1730,
        id: 20
    },{
        title: 'Pasta De Dientes Oral-b Complete 4en1 Con Flúor 80g 3pack',
        img: 'https://http2.mlstatic.com/D_NQ_NP_850306-MLC48408130020_122021-V.webp',
        price: 2890,
        id: 21
    },
    {
        title: 'Pasta Dientes Oral-b 3d White Brilliant Fresh  75 Ml 2 Uni',
        img: 'https://http2.mlstatic.com/D_NQ_NP_764935-MLC48408800666_122021-V.webp',
        price: 3490,
        id: 22
    },
    {
        title: 'Pasta Dental Aquafresh Triple Protec Sabor Menta 3 Un De 126',
        img: 'https://http2.mlstatic.com/D_NQ_NP_887566-MLC50176808954_062022-V.webp',
        price: 4020,
        id: 23
    },
    {
        title: 'Pasta Dental Caristop 5000 Ppm ',
        img: 'https://http2.mlstatic.com/D_NQ_NP_783195-MLC45227821153_032021-V.webp',
        price: 6940,
        id: 24
    },
    {
        title: 'Doritos Sabor Queso 285 Grs',
        img: 'https://http2.mlstatic.com/D_NQ_NP_785355-MLC48930129687_012022-V.webp',
        price: 2589,
        id: 25
    },
    {
        title: 'Platanitos Ohana',
        img: 'https://http2.mlstatic.com/D_NQ_NP_714402-MLC52064939690_102022-V.webp',
        price: 1490,
        id: 26
    },
    {
        title: 'Crunchis Sufles Marco Polo 280g',
        img: 'https://http2.mlstatic.com/D_NQ_NP_869484-MLC49150042690_022022-V.webp',
        price: 1759,
        id: 27
    },
    {
        title: 'Manga De Todito Lays - S0667',
        img: 'https://http2.mlstatic.com/D_NQ_NP_625367-MLC51522598213_092022-V.webp',
        price: 7115,
        id: 28
    },
    {
        title: 'Bebida Energetica Red Bull Regular 12 Latas De 250ml',
        img: 'https://http2.mlstatic.com/D_NQ_NP_640002-MLC50171414335_062022-V.webp',
        price: 11990,
        id: 29
    },
    {
        title: 'Pack Suerox 06 Bebidas Hidratantes Frutilla Kiwi 630ml C/u',
        img: 'https://http2.mlstatic.com/D_NQ_NP_957373-MLC49523139937_032022-V.webp',
        price: 12540,
        id: 30
    },
    {
        title: 'Coca-cola - Sin Azucar - Pack 24 Unidades',
        img: 'https://http2.mlstatic.com/D_NQ_NP_608079-MLC45829824803_052021-V.webp',
        price: 16980,
        id: 31
    },
    {
        title: 'Coca-cola - Sabor Original - Pack 24 Unidades',
        img: 'https://http2.mlstatic.com/D_NQ_NP_761158-MLC45829814865_052021-V.webp',
        price: 16980,
        id: 32
    },
    {
        title: 'Malta Maltin Polar - 12 Unidades',
        img: 'https://http2.mlstatic.com/D_NQ_NP_910966-MLC45830225449_052021-V.webp',
        price: 14990,
        id: 33
    },
    {
        title: 'Coca Cola Starlight Edición Limitada ',
        img: 'https://http2.mlstatic.com/D_NQ_NP_605850-MLC50012963738_052022-V.webp',
        price: 2990,
        id: 34
    },
    {
        title: 'Pepsi 350 Cc - 24 Pack',
        img: 'https://http2.mlstatic.com/D_NQ_NP_640175-MLC46535619608_062021-V.webp',
        price: 16980,
        id: 35
    },
    {
        title: 'Sprite Zero - Pack 24 Unidades',
        img: 'https://http2.mlstatic.com/D_NQ_NP_919739-MLC45834910680_052021-V.webp',
        price: 16980,
        id: 36
    },
    {
        title: 'Pepsi Light 310ml - 24 Pack',
        img: 'https://http2.mlstatic.com/D_NQ_NP_793045-MLC46560408655_062021-V.webp',
        price: 16980,
        id: 37
    },
    {
        title: 'Bebida Energetica Red Bull Sugar Free 12 Latas De 250ml',
        img: 'https://http2.mlstatic.com/D_NQ_NP_634573-MLC50171350068_062022-V.webp',
        price: 11990,
        id: 38
    },
    {
        title: 'Fanta Zero - 350ml - Pack 24 Latas ',
        img: 'https://http2.mlstatic.com/D_NQ_NP_848823-MLC50419525230_062022-V.webp',
        price: 16980,
        id: 39
    },
    {
        title: 'Cachantun 500cc Sin Gas Gas - Pack 12 Botellas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_716650-MLC48555111113_122021-V.webp',
        price: 3990,
        id: 40
    },
    {
        title: 'Pack 18 Latas Coca Cola Cafe Espresso 235ml C/u 0% Calorías',
        img: 'https://http2.mlstatic.com/D_NQ_NP_939512-MLC50255800999_062022-V.webp',
        price: 13990,
        id: 41
    },
    {
        title: 'Malta Maltin Polar - 6 Unidades',
        img: 'https://http2.mlstatic.com/D_NQ_NP_926217-MLC45830252282_052021-V.webp',
        price: 8190,
        id: 42
    },
    
    {
        title: 'Jugos Jumex - 335ml - 24 Latas - Elige Tu Sabor!',
        img: 'https://http2.mlstatic.com/D_NQ_NP_832006-MLC48261226451_112021-V.webp',
        price: 14990,
        id: 43
    },
    {
        title: 'Lata Bilz 310 Cc - Pack 24',
        img: 'https://http2.mlstatic.com/D_NQ_NP_745349-MLC49347670694_032022-V.webp',
        price: 16980,
        id: 44
    },
    {
        title: 'Coca Cola 3 Litros Sabor Zero Display 6 Und',
        img: 'https://http2.mlstatic.com/D_NQ_NP_871796-MLC49887960407_052022-V.webp',
        price: 15990,
        id: 45
    },
    {
        title: 'Bebida Bubble Milk Tea Variedades - Lireke',
        img: 'https://http2.mlstatic.com/D_NQ_NP_879872-MLC48849088977_012022-V.webp',
        price: 2290,
        id: 46
    },
    {
        title: 'Coca Cola Light 350cc Lata X 6',
        img: 'https://http2.mlstatic.com/D_NQ_NP_967064-MLC51295382814_082022-V.webp',
        price: 4490,
        id: 47
    },
    {
        title: 'Bebida Gaseosa - Crush Grape Lata',
        img: 'https://http2.mlstatic.com/D_NQ_NP_754457-MLC51455972652_092022-V.webp',
        price: 8690,
        id: 48
    },
    {
        title: 'Bilz - Botella 500ml - Pack 12 Unid',
        img: 'https://http2.mlstatic.com/D_NQ_NP_906690-MLC48271533402_112021-V.webp',
        price: 10190,
        id: 49
    },
    {
        title: 'Canada Dry Ginger Ale 310ml - 24 Pack',
        img: 'https://http2.mlstatic.com/D_NQ_NP_852601-MLC49206601037_022022-V.webp',
        price: 16980,
        id: 50

    },
    ]
}
const d = document

//Creamos nuestra variable vacia de stateHC
const stateHC = {
    items: []
}

//Creamos nuestra variable vacia de stateML
const stateML = {
    items: []
}

// en este caso pagina comenzara en 0 ya que fue la logica que le dimos a la aplicación que mas adelante se explicara
let pagina = 0

//Template UI
// const templateML = async () => {
//     let tiendas = ''

//     // Revisar clase 9, si se debe usar getState

//     //let obj = getStateML()

//     let obj = getStateML()

//     //tambien se puede hacer con stateML.items.forEach, pero nos parecio mas correcto usando la funcion getState
//     obj.items.forEach( tienda => {
//     // agregamos a la variable tiendas los datos de los productos para luego mostrarlos en pantalla mediante un innerHTML
//     tiendas += `<div class='productos'>
//         <img class='poster' src='${tienda.thumbnail}'>
//         <h3 class='titulo'>${tienda.title}</h3>
//         <p class='price'>$${tienda.price}<p>
//         <button class='btn btn-success' onclick="addItem('${tienda.title}','${tienda.price}','${tienda.id}')">Agregar a Carrito</button>
//         </div>`
//     })
//     return tiendas
// }

// La mayoria de las funciones usadas abajo estan ya explicadas en appListaCompras.js

// const renderML = async () => {
//     let list = d.getElementById('contenidoML')
//     if (!list) return
//     list.innerHTML = await templateML()
// }

// En este caso hacemos el llamado a la appi dentro del setState, pero tambien se puede hacer en una funcion aparte y en setState quedaria algo asi

// const setStateML = async () => {
//     traerDatosDeApi()
// }

const setStateML = async () => {
    // aplicamos toda la logica de la tarea 4
    try{
        // Agregamos la palabra carros, para que nos busque dentro de la api los datos que tengan relación con esta palabra
        // y agregamos ?paging=${pagina} para poder mediante la variable paginas saber en cual pagina de la api nos encontramos
        let url = `https://api.mercadolibre.com/sites/MLC/search?q=carros?paging=${pagina}`
        console.log(url)
        const resp = await fetch(url)
        if(resp.status === 200){
            //en caso de que el status de la respuesta sea correcto procedemos a traer los resultados
            const datos2 = await resp.json()
            const obj = datos2.results
            for (let key in obj) {
                stateML.items[key] = obj[key]
            }
            // agregamos el valor al input limit, el total de paginas del array
            if(c===0){
                c=1
                document.getElementById('limit').value = 50
            }
            // document.getElementById('contenidoML').innerHTML = tiendas
        }else if(resp.status === 401){
            // en caso de que el status de la respuesta nos de el error 401, mostramos este mensaje
            console.log('You dont have access to this resource')
        }else if(resp.status === 404){
            // en caso de que el status de la respuesta nos de el error 404 (no se encontro), mostramos este mensaje
            console.log('The product you search does not found')
        }else{
            // en caso de que el status de la respuesta nos de cualquier otro error, mostramos este mensaje.
            console.log('ohh, something is wrong...')
        }
    }catch (err){
        // en caso de que la api el try se rompa por algun motivo, mostramos el error por consola al usuario
        console.log('error => ' , err)
    }
}

const getStateProductos = (identificador='ML') => {
    let obj = []
    if(identificador=='ML'){
        obj = getStateML()
    }else{
        obj = getStateHC()
    }
    return obj
}

// decidimos dejar las funciones de getStateML y getStateHC ya que creemos que deberia ser asi, y en caso de que la querramos usar para algo en especifico
// que al menos en este codigo no aplica, pero si aplicara las tenemos alli 
const getStateML = () => JSON.parse(JSON.stringify(stateML))

const getStateHC = () => JSON.parse(JSON.stringify(stateHC))


// const templateHC = () => {
//     let tiendasHC = ""
//     let obj = getStateHC()
//     obj.items.forEach( tiendaHC => {
//         tiendasHC += `<div class='productos'>
//         <img class='poster' src="${tiendaHC.img}">
//         <h3 class='titulo'>${tiendaHC.title}</h3>
//         <p class='price'>$${tiendaHC.price}</p>
//         <button class='btn btn-success' onclick="addItem('${tiendaHC.title}','${tiendaHC.price}','${tiendaHC.id}')">Agregar a Carrito</button>
//         </div>`
//     })
//     return tiendasHC
// }

// Unimos la funcion templateHC y templateML porque practicamente hacen lo mismo donde utilizamos un identificador para modificar la parte de donde saca el objeto
// la imagen del producto

const templateProductos = async (identificador) => {
    let tiendas = ""
    let obj = getStateProductos(identificador)
    obj.items.forEach( tienda => {
        // agregamos a la variable tiendas los datos de los productos para luego mostrarlos en pantalla mediante un innerHTML
        tiendas += `<div class='productos'>`
        if(identificador=='ML'){
            tiendas += `<img class='poster' src='${tienda.thumbnail}'>`
        }else{
            tiendas += `<img class='poster' src="${tienda.img}"></img>`
        }
        tiendas += `<h3 class='titulo'>${tienda.title}</h3>
        <p class='price'>$${tienda.price}<p>
        <button class='btn btn-success' onclick="addItem('${tienda.title}','${tienda.price}','${tienda.id}')">Agregar a Carrito</button>
        </div>`
    })
    return tiendas
}

// const renderHC = () => {
//     let list = d.getElementById('contenidoHC')
//     if (!list) return
//     list.innerHTML = templateHC()
// }

// unimos las funciones renderHC y renderML en una sola modificando la funcion a la que lo mandan y una adaptacion agregandole el string HC o ML 
// a la variable list con el identificador
const renderProductos = async (identificador='HC') => {
    let list = d.getElementById('contenido'+identificador)
    if (!list) return
    list.innerHTML = await templateProductos(identificador)
}

// decidimos dejar setStateHC y setStateML separados ya que suele hacerse de esa forma aunque tambien se podria hacer con una unica funcion
const setStateHC = (obj) => {
    for (let key in obj) {
        stateHC[key] = obj[key]
    }
}

//Estableciendo valores por defecto al stateHC con el json que esta mas arriba
setStateHC(
    json
)


// Creamos las variables de todos los botones para ser usadas mas adelante
const btnPrev = document.getElementById('btnPrev')
const btnNext = document.getElementById('btnNext')
const btnInicio = document.getElementById('btnInicio')
const btnCarrito = document.getElementById('btnCarrito')
const contenedorHC = document.getElementById('contenedorHC')
const contenedorML = document.getElementById('contenedorML')
const contenedorCarrito = document.getElementById('contenedorCarrito')
const contenedorTienda = document.getElementById('contenedorTienda')
const contenidoML = document.getElementById('contenidoML')
const contenidoHC = document.getElementById('contenidoHC')


// Creamos los div's de todos los contenedores para poder agregarles/quitarles el hidden como sea necesario
const pagML = document.getElementById('contenedorML')
const pagHardCode = document.getElementById('contenedorHardCode')

// creamos una variable LIMIT con un valor X y una variable tipo contador C
let limit = 500
let c = 0

// Agregamos el evento tipo click al boton Next
btnNext.addEventListener('click', async () => {
    pagina ++
    // Este codigo lo hacemos con contador 1 para que al sumar 1 al contador, no se vuelva a ejecutar
    // Guardamos el valor que tiene limit en nuestra variable, este valor lo guardamos desde la appi en la linea 
    if(c===1){
        c++
        limit = document.getElementById('limit').value
    }
    if(pagina>0){
        await setStateML()
    }
    //Ejecutamos verificarPaginas para ver en que pagina nos encontramos
    verificarPaginas()
})

btnPrev.addEventListener('click', () => {
    pagina--
    //Ejecutamos verificarPaginas para ver en que pagina nos encontramos
    verificarPaginas()
})

// Creamos una nueva funcion verificarPaginas y sacamos buena parte de la logica de los botones de next y prev
const verificarPaginas = async () => {
    if(pagina<0){
        // en caso de que el boton haga que paginas pase a ser -1, mandamos un alert y volvemos a ponerlo en 0
        alert('Estas en la primera pagina')
        pagina = 0
    }else if(pagina===0){
        // en caso de que paginas sea 0 mostramos/ocultamos lo que sea necesario
        // y reseteamos el html del contenido que no se mostrara (aunque de todas maneras estara oculto)
        pagML.classList.add('hidden')
        pagHardCode.classList.remove('hidden')
        contenidoML.innerHTML = ''
        try {
            // renderizamos los items del json
            renderProductos('HC')
        } catch (error) {
            // en caso de error, mostramos un mensaje en pantalla y mandamos el error a la consola
            document.getElementById('contenidoHC').innerHTML = "Error al cargar los datos"
            console.log(error)
        }
    }else if(pagina>=limit){
        // si la pagina supera el valor de limit, mostramos un mensaje y volvemos a colocar la variable pagina que sea = a limit (o lo que seria lo mismo un pagina--)
        alert('Estas en la ultima pagina.')
        pagina= limit
    }else{
        // En cualquier otro caso significa que estamos dentro de los productos sacados de la appi asi que mostramos/ocultamos lo que sea necesario
        // y renderizamos dichos productos
        pagML.classList.remove('hidden')
        pagHardCode.classList.add('hidden')
        contenidoHC.innerHTML = ''
        renderProductos("ML")
    }
}

// Agregamos los eventos click a el boton de inicio y el boton de carrito donde cada uno mostrara/ocultara lo que sea necesario y renderizara en pantalla lo que 
// haga falta

btnInicio.addEventListener('click', async () => {
    contenedorCarrito.classList.add('hidden')
    contenedorTienda.classList.remove('hidden')
    verificarPaginas()
})

btnCarrito.addEventListener('click', async () => {
    contenedorCarrito.classList.remove('hidden')
    contenedorTienda.classList.add('hidden')
    render()
})

// Lo usamos para renderizar en pantalla al abrir el navegador los productos del json
verificarPaginas()