<template>
  <div id="app" class="app-container">
    <!-- Navbar -->
    <header class="navbar">
      <div class="nav-content">
        <h1 class="logo">¡Bienvenido a mi portafolio!</h1>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="main-content">
      <HomeView />
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>
        © {{ new Date().getFullYear() }}
        Esteban David Ruiz Caicedo — Desarrollador de Software 💻
      </p>
    </footer>
  </div>
</template>

<script setup>
import HomeView from './views/HomeView.vue'
</script>

<style scoped>
/* Estructura principal */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #fff;
  font-family: 'Poppins', system-ui, sans-serif;
  margin: 0;
}

/* Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(10px);
  padding: 20px 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
}

.nav-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center; /* centra el texto */
  align-items: center;
  padding: 0 20px;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  letter-spacing: 0.5px;
}

/* Contenido principal */
.main-content {
  flex: 1;
  padding: 28px 16px;
}

/* Footer */
.footer {
  text-align: center;
  padding: 16px;
  background: rgba(0, 0, 0, 0.18);
  font-size: 14px;
  color: #f4f4f4;
}
</style>
