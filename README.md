#VERSION MEJORADA
El codigo que realize anteriormente en rama(**project-1**) es funcional para agregar y eliminar contactos. Sin embargo puede mejorar y es asi que le hice algunas mejoras pensando en hacerlo mas seguro al manejo de errores.
###EN ESTA VERSION MEJORADA:

1. Se utiliza una clase llamada **AgendaDeContactos** para encapsular la lista de contactos y las operaciones relacionadas.

2. Se agregan verificaciones de validez antes de agregar un contacto para evitar nombres vacíos o duplicados.

3. Se agrega un método ademas de un **console.table** para **listarContactos** para mostrar la lista de contactos de manera más organizada.

4. Se utilizan mensajes de registro de errores y éxito para proporcionar una salida más informativa en la consola.

5. Se instancia la clase **AgendaDeContactos** y se realizan operaciones en una instancia de la agenda.

6. e agregado un nuevo método llamado **actualizarContacto** a la clase **AgendaDeContactos**. Esta función toma dos argumentos: nombreAnterior y nuevoNombre. Verifica si nombreAnterior existe en la lista de contactos y, si lo hace, actualiza el nombre del contacto al nuevoNombre. Si el nombreAnterior no se encuentra en la lista, muestra un mensaje de error.
