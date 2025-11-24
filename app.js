/*
  Rama: feature/footer
  Fecha: 24/11/2025
  Descripción: footer.
*/


// footer.js

function logout() {
    alert("Has cerrado sesión.");
    window.location.href = "index.html";  // Redirige al formulario de login
}

document.getElementById("logout-btn").addEventListener("click", logout);
