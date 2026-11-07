document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const correo = document.getElementById("correo");
  const password = document.getElementById("password");
  const mensaje = document.getElementById("mensaje");
  const toggle = document.getElementById("togglePassword");

  toggle.addEventListener("click", () => {
    const esPassword = password.type === "password";
    password.type = esPassword ? "text" : "password";
    toggle.textContent = esPassword ? "Ocultar" : "Mostrar";
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    limpiarMensaje();

    const emailValor = correo.value.trim();
    const passValor = password.value;

    if (!validarCorreo(emailValor)) return;
    if (!validarPassword(passValor)) return;

    // Demostración didáctica (sin autenticación real, sin guardar datos)
    mostrarExito("Datos válidos (demostración).");

    // Usuario demo de la sesión 03
    if (emailValor === "demo@ejemplo.com" && passValor === "password123") {
      mostrarExito("Bienvenido (usuario demo).");
    }
  });

  // Limpia el error cuando el usuario vuelve a escribir
  correo.addEventListener("input", limpiarMensaje);
  password.addEventListener("input", limpiarMensaje);

  function validarCorreo(valor) {
    if (valor === "") {
      mostrarError("El correo no puede estar vacío.", correo);
      return false;
    }
    const formatoOk = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor);
    if (!formatoOk) {
      mostrarError("Ingrese un correo con formato válido (ej. usuario@ejemplo.com).", correo);
      return false;
    }
    return true;
  }

  function validarPassword(valor) {
    if (valor === "") {
      mostrarError("La contraseña no puede estar vacía.", password);
      return false;
    }
    if (valor.length < 8) {
      mostrarError("La contraseña debe tener al menos 8 caracteres.", password);
      return false;
    }
    return true;
  }

  function mostrarError(texto, campo) {
    mensaje.style.color = "#b91c1c";
    mensaje.textContent = texto;
    if (campo) campo.focus();
  }

  function mostrarExito(texto) {
    mensaje.style.color = "green";
    mensaje.textContent = texto;
  }

  function limpiarMensaje() {
    mensaje.textContent = "";
  }
});
