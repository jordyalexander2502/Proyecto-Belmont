document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Evita que la página se recargue por defecto al enviar el formulario
    event.preventDefault();

    // Captura de los valores ingresados por el usuario
    const usuario = document.getElementById('username').value.trim();
    const contrasena = document.getElementById('password').value.trim();
    const mensajeError = document.getElementById('errorMessage');

    // AQUÍ DEFINES LAS CREDENCIALES CORRECTAS
    const usuarioCorrecto = "alumno";
    const contrasenaCorrecta = "123456";

    // Validación de los datos
    if (usuario === "" || contrasena === "") {
        mensajeError.textContent = "Por favor, complete todos los campos obligatorios.";
    } else if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {
        // Si los datos coinciden:
        mensajeError.textContent = ""; // Limpia errores
        alert("¡Acceso concedido! Bienvenido a BELLMONT.");
        window.location.href = "index.html"; // Redirige al inicio
    } else {
        // Si los datos son incorrectos:
        mensajeError.textContent = "Usuario o contraseña incorrectos. Inténtelo de nuevo.";
        
        // Opcional: limpiar el campo de contraseña por seguridad
        document.getElementById('password').value = "";
    }
});