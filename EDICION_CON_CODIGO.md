# Bloqueo de edición en la interfaz

Pide un código al abrir cada OT para edición. La autorización dura cinco minutos, se limita a esa OT y se revoca al cerrar o crear un registro. Tras cinco errores aplica una espera local de un minuto. Comprueba también el permiso al enviar y confirmar.

El código se entrega al propietario fuera del repositorio; el HTML contiene su hash SHA-256. Este mecanismo no es autorización de servidor: puede eludirse modificando JavaScript o realizando solicitudes directas a Supabase. El límite de intentos también es local. Para protección real se requiere configurar la API/base de datos.

Pruebas locales: sintaxis del script completo; código incorrecto, cancelación, acierto, alcance a una OT, caducidad, revocación y espera tras errores. No se hicieron pruebas contra la base de datos ni se modificaron registros.

Pendiente: aprobación para publicar, despliegue de GitHub Pages y comprobación en el navegador. La versión activa no fue modificada.
