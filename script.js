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
  data = { ...data, personas: [...data.personas, nuevaPersona] };

  form.reset(); //para resetear formulario cada vez q se añade alguien

  console.log(data.personas);
};

sendBtn.addEventListener("click", handleSendBtn);

//Inyectar desde javascript en HTML, sobre todo las personas que se cargan en formulario

const title = document.createElement("h1");
title.innerText = "Soy un titulo";

const contenedorPersonas = document.querySelector("#contenedorPersonas");
contenedorPersonas.appendChild(title);
