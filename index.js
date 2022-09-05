alert("Bienvenido, Ingrese el numero del producto que desea llevar")
let prodcutoselec = parseFloat(prompt("1-Base MAC 2-Corrector de ojeras 3-Labial 4-Mascara de pestañas o es ESC para finalizar"))
let seleccionarcantidad;
let total = 0;

const cantidad = (cantidad, precio) => {
    return cantidad * precio
    }
while (prodcutoselec != 0 ) {
    if (total == 0){
        alert ("Gracias por visitarnos, te esperamos pronto")
    }
   

    switch (prodcutoselec) {
        case 1:
            seleccionarcantidad = parseFloat(prompt("Usted ha seleccionado la Base MAC, indique la cantidad que desea llevar"))
            total += cantidad (seleccionarcantidad, 800) 
            break;
        case 2:
            seleccionarcantidad = parseFloat(prompt("Usted ha seleccionado el Corrector de ojeras, indique la cantidad que desea llevar"))
            total += cantidad (seleccionarcantidad, 500)
            break;
        case 3:
            cantidad = parseFloat(prompt("Usted ha seleccionado el Labial, indique la cantidad que desea llevar"))
            total += cantidad (seleccionarcantidad, 350)
            break;
        case 4:
            seleccionarcantidad = parseFloat(prompt("Usted ha seleccionado la Mascara de Pestañas, indique la cantidad que desea llevar"))
            total += cantidad (seleccionarcantidad, 700)
            break;
        default:
            break;
    }
    prodcutoselec = parseFloat(prompt("1-Base MAC 2-Corrector de ojeras 3-Labial 4-Mascara de pestañas"))

   
}
 alert("El total es " + total) 
