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
    mensaje.style.color = "red";

    const emailValor = correo.value.trim();
    const passValor = password.value;

    if (emailValor === "") {
      mensaje.textContent = "El correo no puede estar vacío.";
      return;
    }

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValor);
    if (!emailValido) {
      mensaje.textContent = "Ingrese un correo con formato válido.";
      return;
    }

    if (passValor.length < 8) {
      mensaje.textContent = "La contraseña debe tener al menos 8 caracteres.";
      return;
    }

    // Demostración didáctica (sin autenticación real)
    mensaje.style.color = "green";
    mensaje.textContent = "Datos válidos (demostración).";

    // Usuario demo de la sesión 03
    if (emailValor === "demo@ejemplo.com" && passValor === "password123") {
      mensaje.textContent = "Bienvenido (usuario demo).";
    }
  });
});
