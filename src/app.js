window.onload = function() {
    
  let primero = "Un ";
  let objeto = ["Perro ", "Gato ", "Samurai ", "Alien "];
  let accion = ["se llevó ", "robó ", "pisó ", "mordió "];
  let segundo = "mi ";
  let propiedad = ["teléfono ", "ordenador ", "tabaco ", "cartera "];
  let lugar = ["en la piscina.", "en el trabajo.", "en la puerta de la discoteca.", "en el gimnasio."];
    
      
    
      
  let rdm1 = Math.floor(Math.random() * objeto.length);
  let rdm2 = Math.floor(Math.random() * accion.length);
  let rdm3 = Math.floor(Math.random() * propiedad.length);
  let rdm4 = Math.floor(Math.random() * lugar.length);
    
      
   
  document.querySelector("#excuse").innerHTML = primero + objeto[rdm1] + accion[rdm2] + segundo + propiedad[rdm3] + lugar[rdm4];
  };