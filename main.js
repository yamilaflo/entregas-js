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


function {
    let precio;
    let aceite;
    for (;;) {
        aceite = prompt("¿Que tipo de aceite desea comprar? (oliva/girasol)");
        aceite = aceite.toLowerCase();
        if (aceite === "oliva" || aceite === "girasol") {
            break;
        }
        alert("Opcion no valida, no tenemos ese tipo de aceite");
    }
    
    // verificar la respuesta del usuario y asignar el precio correspondiente
    if (aceite == "oliva") {
        precio = 2000;
        alert(`El precio del aceite de oliva es de ${precio}`);
    } else if (aceite == "girasol") {
        precio = 1500;
        alert(`El precio del aceite de girasol es de ${precio}`);
    } else {
        alert("Opcion no valida, no tenemos ese tipo de aceite");
        return;
    }
    
    // consultar si el usuario desea comprar o no
    const continuar = confirm("¿Desea continuar con la compra?");
    
    if (continuar) {
        const montoAbonado = parseFloat(prompt("Ingrese el monto con el que desea abonar"));
        const vuelto = montoAbonado - precio;

        if (vuelto > 0) {
            alert(`Gracias por su compra, su vuelto es de ${vuelto}`);

        } else if (vuelto === 0) {
            alert("Gracias por su compra, El pago es exacto");
        } else {
            alert("El dinero ingresado no es suficiente");
        }
    } else {
        alert("Gracias vuelva pronto!");
    }


}