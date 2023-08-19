//Crea una lista de contactos con datos predefinidos, cada contacto debe contener el nombre y apellido como una sola cadena de caracteres

//Crea una función para añadir un nuevo contacto a una lista

//Crea una función para borrar un contacto existente de la lista

//Crea una función para imprimir en consola los contactos presentes en la lista

//Publica tu código en Github, en tu repositorio contact-list crea un branch llamado project-1 y compártelo con nosotros

let listaDeContactos = [
    "Wilmer",
    "Eva",
    "Jose",
    "Camila"
];
const agregrarContactos = nombre => {
    listaDeContactos.push(nombre);
}
const eliminarContacto = nombre => {
    const indice = listaDeContactos.indexOf(nombre);
        if (indice !==-1) {
          listaDeContactos.splice(indice,1);
          console.info(`${nombre} fue elimindo`);  
        } else {
            console.error(`${nombre} no se encuentra`);
        }
}

agregrarContactos("Fabian");
console.log(listaDeContactos);;