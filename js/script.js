alert("Bienveninidos a la tienda de Rick and Morty")

alert(`opcion 1 : Ingresa tu usuario
opcion 2 : Crea tu usuario 
Opcion 3 : Ingresa como admin`)


// crear usuario

class NuevoUsuario {
    constructor(nombre, correo, usuario, password ){
        this.nombre= nombre;
        this.correo = correo;
        this.usuario = usuario;
        this.password =password
    }
     
}


class Producto {
    constructor(tipo, talla, color, stock ){
        this.tipo= tipo;
        this.talla = talla;
        this.color = color;
        this.stock = stock;        
    }
}




const usuario1 = new NuevoUsuario(
    "Manuel Salcedo",
    "vm.salcedo@acsa.com.pe",
    "userms",
    "852456"
  )


const usuario2 = new NuevoUsuario(
    "Victor Rezza",
    "v.rezza@acsa.com.pe",
    "uservr",
    "852456"
  )



const producto1= new Producto (
    "Polera",
    "L",
    "Blanco",
    "20"
)

const producto2= new Producto (
    "Polera",
    "L",
    "negro",
    "10"
)

const producto3= new Producto (
    "Pijama",
    "M",
    "azul",
    "10"
)







let opcion1;
let valor = true;
while (valor) {
    opcion1= Number( prompt("Ingresa tu opcion"));
    if (opcion1 === 1 ) {
        valor = false; // si es V entonces termina el ciclo //  

  
    } else if (opcion1 ==="") {
        break;
    } else {
        alert("Ingresa una opcion valida, gracias");
    }
}































/*



// Solicito de Producto //

const IGV = 1.18
const precioPoleras = 10
const precioPijamas = 20


//Funcion para precio de Poleras
function precioTotal (num1) {
    return (num1 * precioPoleras) * (IGV)
}

//Funcion para precio de Pijamas
function precioTotal2 (num1) {
    return (num1 * precioPijamas) * (IGV)
}


function tresErrores (error){
    return error + error++
}



let producto;
let valor = true;
while (valor) {
    producto = prompt("Ingresa el Producto que deseas : Poleras y Pijamas").toLowerCase();
    if (producto === "poleras" || producto==="polera") {
        valor = false; // si es V entonces termina el ciclo //  

    } else if (producto === "pijamas"|| producto==="pijama") {
        valor = false; // si es V entonces termina el ciclo //
    } else if (producto === null) {
        break;
    } else {
        alert("Lo siento no tenemos ese Producto, gracias");
    }
}



let color;
let valor1 = true;
while (valor1) {
    color = prompt("Tenemos dos Colores: Blanco - Negro").toLowerCase();
    
    if (color === "blanco") {
        valor1 = false; // si es V entonces termina el ciclo //

    
        

    } else if (color === "negro") {
        valor1 = false; // si es V entonces termina el ciclo //
    } else if (color === null) {
        break;
    } else {
        alert("Lo siento no tenemos ese Color, gracias");
    }
}


let talla;
let valor2= true;
while (valor2){
    talla = prompt ("Tenemos Tallas: M y talla L").toLowerCase();
   
    if (talla === "m") {
        valor2 = false; // si es V entonces termina el ciclo //    

    } else if (talla === "l") {
        valor2 = false; // si es V entonces termina el ciclo //
    } else if (talla === null) {
        break;
    } else {
        alert("Lo siento no tenemos esa talla, gracias");
    }
}



alert (" Por el momento has elegido el producto"+ " "+  producto +" "+ "en color"+" "+ (color)+" ," +  "en talla"+ " "+(talla.toUpperCase()) );



// Solicito informacion de cantidad //

let cantidad;
let valor3 = true;
while (valor3) {
    cantidad = Number(prompt("Ingresa la cantidad "));
    if (cantidad >= 1 && cantidad <= 10 ) {
        valor3 = false;
    } 
    else { 
        alert("lo siento solo podemos ofrecerte hasta un maximos de 10 unidades");
        
    }
}





if (producto==="poleras" || producto==="polera"){
    let precioFinal =precioTotal(cantidad)
    alert("El precio por "+ cantidad +" Polera (as) "+"es: S/. " +precioFinal.toFixed(2) +" Incluido impuestos")
}


else if (producto==="pijamas"|| producto==="pijama"){
    let precioFinal =precioTotal2(cantidad)
    alert("El precio por "+ cantidad +" Pijama (as) "+"es: S/. " +precioFinal.toFixed(2) +" Incluido impuestos")
}





*/