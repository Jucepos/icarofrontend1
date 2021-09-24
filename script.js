//para ver datos del formulario de contacto
//en consola ponemos data.persona
// como cargar los datos en la misma pagina html con funcion de javascript
let data = {
  personas: [
    {
      nombre: "Nombre",
      apellido: "Apellido",
      edad: "25",
      genero: "Masc",
      telefono: "3514235677",
      compañiaTelefono: "Compañia",
      email: "asd@asd.com",
      color: "Azul",
      suscripcionNews: "On",
    },
  ],
};
const sendBtn = document.querySelector("#sendBtn");

//se crean los "lectores" de html para relacionarlos con una variable que podamos usar en JS

const contenedorPersonas = document.querySelector("#contenedorPersonas");
const nombreCompleto = document.querySelector("#nombreCompleto");
const edadPersona = document.querySelector("#edadPersona");
const generoPersona = document.querySelector("#generoPersona");
const telefonoPersona = document.querySelector("#telefonoPersona");
const compañiaTelefono = document.querySelector("#compañiaTelefono");
const suscripcionPersona = document.querySelector("#suscripcionPersona");
const form = document.querySelector("#form");

const handleSendBtn = (e) => {
  e.preventDefault();
  const nuevaPersona = {
    nombre: form.nombre.value,
    apellido: form.apellido.value,
    edad: form.edad.value,
    genero: form.genero.value,
    telefono: form.telefono.value,
    compañiaTelefono: form.compañia.value,
    email: form.correo.value,
    suscripcionNews: form.suscripcion.value,
  };
  //... significa: lo que ya tenia data
  data = { ...data, personas: [...data.personas, nuevaPersona] };

  form.reset(); //para resetear formulario cada vez q se añade alguien

  //para cargar datos de las personas en el html, antes se crearon las constantes de los id de listado de personas,
  //que esta en el contacto.html
  nombreCompleto.innerText = `${nuevaPersona.nombre} ${nuevaPersona.apellido}`;
  edadPersona.innerText = nuevaPersona.edad;
  generoPersona.innerText = nuevaPersona.genero;
  telefonoPersona.innerText = nuevaPersona.telefono;
  compañiaTelefono.innerText = nuevaPersona.compañiaTelefono;
  suscripcionPersona.innerText = nuevaPersona.suscripcionNews;

  //llama a la otra funcion para agregar las personas
  addNewPerson(nuevaPersona);

  //console.log(data.personas);
};

const addNewPerson = (nuevaPersona) => {
  //para que las personas aparezcan todos en el html, y no se borren al cargar otra persona
  const elementoNombre = document.createElement("h3");
  //ahora agregamos clase para poder darle estilos con css, se trabaja con - no con camelCase
  elementoNombre.classList.add("nombre-persona");
  const elementoEdad = document.createElement("h3");
  elementoEdad.classList.add("edad-persona");
  const elementoGenero = document.createElement("h3");
  elementoGenero.classList.add("genero-persona");
  const elementoTelefono = document.createElement("h4");
  elementoTelefono.classList.add("telefono-persona");
  const elementoCompañiaTel = document.createElement("h4");
  elementoCompañiaTel.classList.add("compañiaTel-persona");
  const elementoSuscripto = document.createElement("h4");
  elementoSuscripto.classList.add("suscripcion-persona");

  //para que en inspeccionar elementos, se vea cada persona dentro de un div
  const contenedorPersona = document.createElement("div");
  contenedorPersona.classList.add("persona");

  //populamos los elementos con los datos correspondientes, asi se nos van agregando uno debajo de otro
  elementoNombre.innerText = `${nuevaPersona.nombre} ${nuevaPersona.apellido}`;
  elementoEdad.innerText = nuevaPersona.edad;
  elementoGenero.innerText = nuevaPersona.genero;
  elementoTelefono.innerText = nuevaPersona.telefono;
  elementoCompañiaTel.innerText = nuevaPersona.compañiaTelefono;
  elementoSuscripto.innerText = nuevaPersona.suscripcionNews;

  //se añaden los elementos al html, y luego se agrega al contenedor gral de personas
  contenedorPersona.appendChild(elementoNombre);
  contenedorPersona.appendChild(elementoEdad);
  contenedorPersona.appendChild(elementoGenero);
  contenedorPersona.appendChild(elementoTelefono);
  contenedorPersona.appendChild(elementoCompañiaTel);
  contenedorPersona.appendChild(elementoSuscripto);

  contenedorPersonas.appendChild(contenedorPersona);
};

sendBtn.addEventListener("click", handleSendBtn);

//Inyectar desde javascript en HTML, sobre todo las personas que se cargan en formulario

const title = document.createElement("h1");
title.innerText = "Soy un titulo";

contenedorPersonas.appendChild(title);
