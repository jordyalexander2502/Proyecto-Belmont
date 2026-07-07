document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuario = document.getElementById('username').value.trim();
    const contrasena = document.getElementById('password').value.trim();
    const mensajeError = document.getElementById('errorMessage');

    // aquí si quieren cambiar el Usuario y la contraseña
    const usuarioCorrecto = "alumno";
    const contrasenaCorrecta = "123456";

    if (usuario === "" || contrasena === "") {
        mensajeError.textContent = "Por favor, complete todos los campos obligatorios.";
    } else if (usuario === usuarioCorrecto && contrasena === contrasenaCorrecta) {

        mensajeError.textContent = "";
        alert("¡Acceso concedido! Bienvenido a BELLMONT.");
        window.location.href = "index.html";

    } else {

        mensajeError.textContent = "Usuario o contraseña incorrectos. Inténtelo de nuevo.";
        document.getElementById('password').value = "";
    }
});
