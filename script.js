const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const ciudad = document.getElementById("ciudad");
const boton = document.getElementById("btnEnviar");
const resultado = document.getElementById("resultado");


boton.addEventListener("click", function () {

  if (nombre.value === "" || edad.value === "" || ciudad.value === "") {
    resultado.innerText = "Llena los campos.";
    alert("Escribe mi amor lindo")
    return;
  }

  let mensaje = "Que tal " + nombre.value + "? ";

  mensaje += "Eres de " + ciudad.value + " Y tienes " + edad.value + ". ";

  if (edad.value < 18) {
    mensaje += "Eres un menor.";
  } else if (edad.value >= 18 && edad.value < 60) {
    mensaje += "Estas viejo.";
  } else {
    mensaje += "Estas Muy viejo.";
  }
  
  resultado.innerText = mensaje;
});

