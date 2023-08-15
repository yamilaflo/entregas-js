const productos = [
    {
        id: 1,
        nombre: "Oliva",
        valor: 1000
    },
    {
        id: 2,
        nombre: "Girasol",
        valor: 600
    },
    {
        id: 3,
        nombre: "Uva",
        valor: 300
    },
    {
        id: 4,
        nombre: "Aceite",
        valor: 1500
    },
]

let carrito = [];

const cargarMiCarritoDeLocalStorage = () => {
    const carritoStorage = localStorage.getItem("carrito");
    if (carritoStorage) {
        const carritoStorageParsed = JSON.parse(carritoStorage);
        carritoStorageParsed.forEach(producto => {
            carrito.push(producto);
        })
    }
}

const cargarTotal = () => {
    let total = 0;

    carrito.forEach(producto => {
        total += producto.valor;
    })

    const totalElement = document.getElementById("total");
    totalElement.innerText = total;
}

const cargarMisProductos = () => {
    const misProductos = document.getElementById("misproductos");
    misProductos.innerText = ""

    const tabla = document.createElement("table");

    const header = document.createElement("tr");

    const headerNombre = document.createElement("td");
    headerNombre.innerText = "Nombre";

    const headerValor = document.createElement("td");
    headerValor.innerText = "Valor";

    const headerEliminar = document.createElement("td");

    header.appendChild(headerNombre);
    header.appendChild(headerValor);
    header.appendChild(headerEliminar);

    tabla.appendChild(header);
    misProductos.appendChild(tabla);

    carrito.forEach((producto, index) => {

        const header = document.createElement("tr");

        const headerNombre = document.createElement("td");
        headerNombre.innerText = producto.nombre;

        const headerValor = document.createElement("td");
        headerValor.innerText = producto.valor;

        const headerCompra = document.createElement("td");
        const boton = document.createElement("button");
        boton.innerText = "Eliminar";
        boton.onclick = () => {
            carrito.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            cargarMisProductos();
            cargarTotal();
        }
        headerCompra.appendChild(boton);

        header.appendChild(headerNombre);
        header.appendChild(headerValor);
        header.appendChild(headerCompra);
        tabla.appendChild(header);
    })
}

const cargarTabla = () => {

    const tabla = document.createElement("table");

    const header = document.createElement("tr");

    const headerNombre = document.createElement("td");
    headerNombre.innerText = "Nombre";

    const headerValor = document.createElement("td");
    headerValor.innerText = "Valor";

    const headerCompra = document.createElement("td");

    header.appendChild(headerNombre);
    header.appendChild(headerValor);
    header.appendChild(headerCompra);

    tabla.appendChild(header);
    app.appendChild(tabla);

    productos.forEach(producto => {

        const header = document.createElement("tr");

        const headerNombre = document.createElement("td");
        headerNombre.innerText = producto.nombre;

        const headerValor = document.createElement("td");
        headerValor.innerText = producto.valor;

        const headerCompra = document.createElement("td");
        const boton = document.createElement("button");
        boton.innerText = "Comprar";
        boton.onclick = () => {
            carrito = [...carrito, producto]
            localStorage.setItem("carrito", JSON.stringify(carrito));
            cargarMisProductos();
            cargarTotal();
        }
        headerCompra.appendChild(boton);


        header.appendChild(headerNombre);
        header.appendChild(headerValor);
        header.appendChild(headerCompra);
        tabla.appendChild(header);
    })
}

cargarTabla();
cargarMiCarritoDeLocalStorage();
cargarMisProductos();
cargarTotal();