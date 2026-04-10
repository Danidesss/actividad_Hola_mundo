//1
console.log("El script se cargó correctamente");
alert("Hola Mundoxddd");

//2
document.getElementById("mensaje").innerText="Hola mundo con innertext porque necesito identificarlos"

//4
console.log("Hola mundo del punto 4")

//5
document.getElementById("contenedorxd").innerHTML="hola del contenedor div porque tambien necesito identificarlos";



let segundos = 10;


const elementoContador = document.getElementById('contador');


setInterval(function() {
   if (segundos > 0 ){
    segundos--; 
    elementoContador.innerText = segundos;
    console.log("Tiempo: " + segundos);
   }
   else{
    document.getElementById("fincontadorxd").innerText="Feliz año nuevoooo";

   }
}, 1000);