/* En general agregué ; donde hacía falta */

// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
];

const lista = document.getElementById("lista-de-productos"); // Le cambié el nombre a la variable de li a lista. Además le cambié a getElementById ya que es el id de un div en html
const input = document.querySelector('input'); // Le cambié el nombre a la variable de $i por input. Le quité el punto a la etiqueta input (no es una clase).

for (let i = 0; i < productos.length; i++) {
  const contendedorProducto = document.createElement("div"); // Cambié el nombre de la variable de "d" a contenedorProducto y la puse en un const
  contendedorProducto.classList.add("producto");

  const titulo = document.createElement("p"); // Cambio de "var ti" a "const titulo"
  titulo.classList.add("titulo");
  titulo.textContent = productos[i].nombre;
  
  const imagen = document.createElement("img"); // de var a const
  imagen.setAttribute('src', productos[i].img);

  contendedorProducto.appendChild(titulo); // Ajuste de nuevo nombre de variables
  contendedorProducto.appendChild(imagen); // Ajuste de nuevo nombre de variables

  lista.appendChild(contendedorProducto); // Ajuste de nuevo nombre de variables
}

//displayProductos(productos); // No existe esta función

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const texto = input.value;
  console.log(texto);
  const productosFiltrados = filtrado(productos, texto );

  for (let i = 0; i < productosFiltrados.length; i++) {
    const contenedorProductosFiltrados = document.createElement("div"); // Cambio de "var d" a "contenedorProductosFiltrados"
    contenedorProductosFiltrados.classList.add("producto")
  
    const titulo = document.createElement("p"); // Cambio de "var ti" a "const titulo"
    titulo.classList.add("titulo");
    titulo.textContent = productosFiltrados[i].nombre;
    
    const imagen = document.createElement("img"); // Cambio de var a const, para que tenga alcance de función
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    contenedorProductosFiltrados.appendChild(titulo); // Ajuste de nuevo nombre de variables
    contenedorProductosFiltrados.appendChild(imagen); // Ajuste de nuevo nombre de variables
  
    lista.appendChild(contenedorProductosFiltrados);
  }
}

const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto) || item.nombre.includes(texto) ); // Le agregué que también pueda filtar por el valor de su atrbuto "nombre"
}; 