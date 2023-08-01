// function iniciarCompra(){
//     const continuar = confirm("¿desea continuar con la compra?");
//     let aceite = prompt("¿que tipo de aceite desea comprar? (oliva/girasol)");
//     let precio;
//     aceite = aceite.toLowerCase();

//     // verificar la respuesta del usuario y asignar el precio correspondiente
//     if(aceite == "oliva"){
//         precio = 2000;
//         alert(`el precio del aceite de oliva es de ${precio}`);
//     }else if(aceite == "girasol"){
//         precio = 1500;
//         alert(`el precio del aceite de girasol es de ${precio}`);
//     }else{
//         alert("opcion no valida, no tenemos ese tipo de aceite");
//         return;
//     }

//     // consultar si el usuario desea comprar o no

//     if(continuar){
//         const montoAbonado = parseFloat(prompt("ingrese el monto con el que desea abonar"));
//         const vuelto = montoAbonado - precio;

//         if(vuelto > 0){
//             alert(`gracias por su compra, su vuelto es de ${vuelto}`);

//         }else if(vuelto === 0){
//             alert("gracias por su compra, El pago es exacto");
//         }else{
//             alert("el dinero ingresado no es suficiente");
//         }
//     }else{
//         alert("gracias vuelva pronto!");
//     }

// }


// function iniciarCompra() {
//     let precio;
//     let aceite;
//     for (;;) {
//         aceite = prompt("¿Que tipo de aceite desea comprar? (oliva/girasol)");
//         aceite = aceite.toLowerCase();
//         if (aceite === "oliva" || aceite === "girasol") {
//             break;
//         }
//         alert("Opcion no valida, no tenemos ese tipo de aceite");
//     }
    
//     // verificar la respuesta del usuario y asignar el precio correspondiente
//     if (aceite == "oliva") {
//         precio = 2000;
//         alert(`El precio del aceite de oliva es de ${precio}`);
//     } else if (aceite == "girasol") {
//         precio = 1500;
//         alert(`El precio del aceite de girasol es de ${precio}`);
//     } else {
//         alert("Opcion no valida, no tenemos ese tipo de aceite");
//         return;
//     }
    
//     // consultar si el usuario desea comprar o no
//     const continuar = confirm("¿Desea continuar con la compra?");
    
//     if (continuar) {
//         const montoAbonado = parseFloat(prompt("Ingrese el monto con el que desea abonar"));
//         const vuelto = montoAbonado - precio;

//         if (vuelto > 0) {
//             alert(`Gracias por su compra, su vuelto es de ${vuelto}`);

//         } else if (vuelto === 0) {
//             alert("Gracias por su compra, El pago es exacto");
//         } else {
//             alert("El dinero ingresado no es suficiente");
//         }
//     } else {
//         alert("Gracias vuelva pronto!");
//     }


// }



const productos = [
    { name: "Oliva", precio: 1500 },
    { name: "Girasol", precio: 900 },
    { name: "Harina", precio: 850 },
    { name: "Tomate", precio: 900 },
  ];
  
  const carrito = [];
  
  const filtrarProd = (arr, saldo) => {
    const productosAdquiridos = arr.filter((e) => e.precio <= saldo);
  
    const disponible = [];
  
    productosAdquiridos.forEach((e) => {
      disponible.push(` ${e.name}`);
    });
  
    const pedido = prompt(
      `Tenes para elegir:${disponible}. Ingresar el nombre exacto.`
    );
  
    guardar(productos, pedido);
  };
  
  const comprar = () => {
    let resultado;
    do {
      resultado = prompt(
        "Ingrese su monto disponible para gastar, ingrese F para salir del bucle"
      );
  
      resultado = resultado === "F" ? "F" : Number(resultado);
    } while (isNaN(resultado) && resultado !== "F");
  
    let saldo = resultado;
  
    if (saldo === "F") {
      alert("Nos vemos");
    } else if (saldo >= 850) {
      filtrarProd(productos, saldo);
    } else {
      alert("Saldo insuficiente para realizar una compra");
    }
  };
  
  const preguntar = (respuesta) => {
    if (respuesta === true) {
      comprar();
    } else {
      alert("Gracias por su compra, su pedido se cargo al carrito");
    }
  };
  
  // Busca el producto en el array y lo carga al carrito
  
  const guardar = (productos, pregunta) => {
    const producto = productos.find((e) => e.name == pregunta);
    const arr = [producto];
    arr.forEach((e) => {
      if (producto != undefined && pregunta == e.name) {
        carrito.push(producto);
        preguntar(
          confirm("Su producto se cargo con exito, desea agregar algo mas?")
        );
      } else if (pregunta === null) {
        alert("Operacion cancelada");
      } else {
        alert("Lo sentimos pero el producto que acaba de nombrar no existe");
      }
    });
  };
  
  comprar();