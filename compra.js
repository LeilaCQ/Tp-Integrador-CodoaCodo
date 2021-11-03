

const cantidadEntradas = document.getElementById('cntEntradas')

const categorias = document.getElementById('inputState')

const precioEntrada = 200

const botonCalcular = document.getElementById('botonCalcular')

botonCalcular.addEventListener('click', resumen)

function resumen (){

    var precioFinal = cantidadEntradas.value*(precioEntrada - (precioEntrada * categorias.value) / 100);
    
    console.log( categorias.value);

    console.log(cantidadEntradas.value);
    
    console.log( precioEntrada);
    
    console.log(precioFinal);
    
    compratotal.innerHTML= "Total a pagar : $"+ precioFinal;
  
}

