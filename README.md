TaskPlann
Descripción

TaskPlann es una aplicación web para gestionar tareas personales de forma sencilla y eficiente. Permite crear, editar, eliminar y completar tareas, así como filtrar por pendientes o completadas. Los usuarios pueden registrarse, iniciar sesión y ver solo sus propias tareas.

Componentes Principales
1. AdminTask.jsx

Es el componente principal de la página de gestión de tareas.

Controla el estado de:

TareasM: lista de tareas obtenidas de la API.

mostrarPendiente: indica si se muestran tareas pendientes o completadas.

Busqueda: valor para filtrar tareas por nombre.

Renderiza:

NavBar: barra de búsqueda, agregar tareas y toggle de pendientes/completadas.

Contenedor: lista filtrada de tareas con opciones para completar, editar o eliminar.

Función agregarTarea para actualizar la lista cuando se crea una nueva tarea.


2. NavBar.jsx

Barra superior para:

Buscar tareas por nombre.

Agregar nuevas tareas (NuevaT).

Cambiar entre tareas pendientes y completadas.

Contiene lógica para:

Filtrar tareas según el usuario logueado.

Contar tareas pendientes/completadas para mostrar en botones.

Usa Swal para notificaciones de tareas agregadas o errores.


3. Contenedor.jsx

Muestra la lista de tareas filtradas según:

Usuario actual.

Estado de la tarea (pendiente o completada).

Valor de búsqueda.

Permite:

Completar tareas.

Activar tareas completadas.

Editar nombre de la tarea.

Eliminar tareas (con confirmación Swal).


4. Header.jsx

Muestra el nombre de la aplicación y botón de cerrar sesión.

Solo se muestra si hay un usuario logueado y no se está en /Login o /Register.

Al cerrar sesión:

Se elimina usuarioLogueado del sessionStorage.

Se redirige a /Login.


5. Footer.jsx

Contiene información de la aplicación y botones de:

Términos y Condiciones: abre un modal dialog.

Contacto: muestra información de contacto mediante Swal.

Modal:

Muestra los términos de uso y privacidad de TaskPlann.

Botón para cerrar el modal.


6. FormLogin.jsx

Permite a los usuarios ingresar con correo y contraseña.

Valida credenciales consultando la API (ServicesUser.getUsuarios).

Al iniciar sesión correctamente:

Guarda el usuario en sessionStorage.

Redirige a /Gestor.


7. FormRegister.jsx

Permite registrar un nuevo usuario con:

Nombre, email, contraseña y confirmación de contraseña.

Valida:

Campos obligatorios.

Contraseña mínima de 8 caracteres.

Coincidencia de contraseñas.

Usuario o email no existente.

Guarda usuario en API y redirige a /Login.


Servicios
1. Services.js (Tareas)

getTask(): obtiene todas las tareas.

postTask(tarea): agrega una nueva tarea.

putTask(tarea, id): actualiza una tarea existente.

deleteTask(id): elimina una tarea por id.


2. ServicesUser.js (Usuarios)

getUsuarios(): obtiene todos los usuarios.

postUsuarios(usuario): registra un nuevo usuario.

putUsuarios(usuario, id): actualiza un usuario.

deleteUsuarios(id): elimina un usuario por id.


Flujo de Uso

Registrar un usuario (FormRegister) o iniciar sesión (FormLogin).

Visualizar AdminTask con NavBar y Contenedor.

Agregar, completar, activar, editar o eliminar tareas.

Filtrar tareas por nombre usando la barra de búsqueda.

Cambiar entre tareas pendientes y completadas.

Cerrar sesión desde Header para volver a Login.

Estilos

NavBar.css, Contenedor.css, Header.css y Footer.css gestionan el diseño.

Uso de grid y flex para layouts.

Colores morado y gris para consistencia visual.

dialog para modal de términos y condiciones
