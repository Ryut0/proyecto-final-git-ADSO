/*
  Rama: feature/dashboard
  Fecha: 24/11/2025
  Descripción: dashboard.
*/


// dashboard.js

function updateDashboardStats() {
   
    document.getElementById("active-users").textContent = Math.floor(Math.random() * 500);
    document.getElementById("daily-sales").textContent = "$" + (Math.random() * 10000).toFixed(2);
    document.getElementById("monthly-visits").textContent = Math.floor(Math.random() * 20000);
}

window.onload = updateDashboardStats;

setInterval(updateDashboardStats, 5000);
// Código de login
const validUsername = "admin";
const validPassword = "12345";

const form = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

function handleLogin(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        alert("¡Inicio de sesión exitoso!");
        window.location.href = "dashboard.html"; // Redirige a una página de inicio (por ejemplo, el dashboard)
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
    }
}

form.addEventListener("submit", handleLogin);

// Código del footer y cierre de sesión
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

document.getElementById("logout-btn").addEventListener("click", logout);
