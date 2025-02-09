// En general di espacios en elementos entre paréntesis. Para mí es una lectura más fácil del código.

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const nombre = document.querySelector( '.name' ); // Cambié el nombre de la variable por algo más intuitivo y que no llevara caracteres especiales. Agregué un punto antes de name ya que se trata de una clase.
const blog = document.querySelector( '.blog' ); // Cambié el nombre de la variable para que fuera algo más intuitivo. Blog se trata de una clase, por ello le cambie por un punto.
const locacion = document.querySelector( '.location' ); // Cambié el nombre de la variable para que fuera algo más intuitivo.

async function displayUser ( username ) {  // Agregué un async al inicio de la función, ya que así corresponde la sintaxis cuando hay un await.
  try{  // Agregué un try para hacer el manejo de excepciones
  nombre.textContent = "cargando...";
  const response = await fetch( `${usersEndpoint}/${username}` ); 
  const data = await response.json(); // agregué esta línea para convertir response en objeto y que existiera data. Y como .json() también es una promesa le agregué el await
  console.log( data ); // Esta data que se quiere imprimir viene de response
  nombre.textContent = `${data.name}`; // Aquí deben ir template literals
  blog.textContent = `${data.blog}`; // Aquí deben ir template literals
  locacion.textContent = `${data.location}`; // Aquí deben ir template literals
} catch ( err ) {  // Agregué el catch para hacer el manejo de las excepciones y vincular la función de hadleError
  handleError( err );

}
}; // Agregué ;

function handleError( err ) {
  console.log( 'OH NO!' );
  console.log( err );
  nombre.textContent = `Algo salió mal: ${err}`; // Faltaba un punto y coma
}

displayUser('stolinski'); //quité de aquí el catch y lo agregué directamente a la función displayUser

