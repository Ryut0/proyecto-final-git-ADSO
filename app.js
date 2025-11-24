/*
  Rama: feature/login
  Fecha: 24/11/2025
  Descripción: es un login que verifica credenciales 
*/

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
