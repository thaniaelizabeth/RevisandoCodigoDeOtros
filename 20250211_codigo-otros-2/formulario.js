// En general agregué; al final de las líneas de código. También cambié var por const

const formulario = document.querySelector("form"); /* cambie var por const. Y el selector de form es una etiqueta por lo que le quité el #*/ 

formulario.onsubmit = function( elemento ) { // Cambie el nombre del parámetro por algo más intuitivo.

  elemento.preventDefault(); // https://developer.mozilla.org/es/docs/Web/API/Event/preventDefault
  // preventDefault
  // Declaré y renombre las variables (n,e) con const 
  const nombreIndice = formulario.elements[0]; // 
  const edadIndice = formulario.elements[1]; // 
  const nacionalidadIndice = formulario.elements[2];

  const nombre = nombreIndice.value; //
  const edad = edadIndice.value;

  const i = nacionalidadIndice.selectedIndex;
  const nacionalidad = nacionalidadIndice.options[i].value; // cambié var por const
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    nombreIndice.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    edadIndice.classList.add("error")
  }

if (nombre.length > 0 
  && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad); // esta función esta en la línea 44
  }
}
// Comenté esta seccion de boton porque sino el borón aparece fuera de cada invitado y no borra ninguno.
/* Botón de borrar invitado y  br */
/* const botonBorrar = document.createElement("button"); // cambié de var a const
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br"); // cambié de var a const
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar); */

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

const lista = document.getElementById("lista-de-invitados"); //id lo agregué en html

const elementoLista = document.createElement("div");
elementoLista.classList.add("elemento-lista"); // es add https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
lista.appendChild(elementoLista); // Referencia a un nodo existente

// Comenté lo siguiente porque es repetitivo y ya viene dentro de la funcion crearElemento
/* var spanNombre = document.createElement("span"); // var tiene alcance fuera de la funcion
var inputNombre = document.createElement("input");
var espacio = document.createElement("br");
spanNombre.textContent = "Nombre: ";
inputNombre.value = nombre;
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio); */
// Función dentro de agregarInvitado
function crearElemento(descripcion, valor) {
const spanNombre = document.createElement("span");
const inputNombre = document.createElement("input");
const espacio = document.createElement("br");
spanNombre.textContent = descripcion + ": ";
inputNombre.value = valor; 
elementoLista.appendChild(spanNombre);
elementoLista.appendChild(inputNombre);
elementoLista.appendChild(espacio);
}

crearElemento("Nombre", nombre);
crearElemento("Edad", edad);
crearElemento("Nacionalidad", nacionalidad);

// Boton eliminar invitado
const botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
const corteLinea = document.createElement("br");
elementoLista.appendChild(corteLinea);
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}

