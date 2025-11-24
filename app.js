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
