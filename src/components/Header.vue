<script setup>
</script>

<template>
  <header>
    <div class="container fixed-top">
      <nav
        class="
          navbar navbar-expand-lg
          bg-light
          text-uppercase
          justify-content-between
        "
      >
        <!-- <a class="navbar-brand" href="#">Navbar</a> -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <!-- <li class="nav-item">
              <a class="nav-link" aria-current="page" href="index.html">Home</a>
            </li> -->
            <li class="nav-item rounded-3">
              <RouterLink class="nav-link" to="/">About</RouterLink>
            </li>
            <li class="nav-item rounded-3">
              <RouterLink class="nav-link" to="/Projects">Projects</RouterLink>
            </li>
            <li class="nav-item rounded-3">
              <RouterLink class="nav-link" to="/Communications"
                >Communications</RouterLink
              >
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link" href="teaching.html">Teaching</a>
            </li> -->
           <li class="nav-item rounded-3">
              <RouterLink class="nav-link" to="/Teaching"
                >Teaching</RouterLink
              >
            </li>
            <li class="nav-item rounded-3">
              <RouterLink class="nav-link" to="/Blog">Blog</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.05em;
}
.navbar-collapse {
  justify-content: flex-end;
}

.nav-pills.nav-tabs-line .nav-link.active {
  color: #066ac9;
  background-color: rgba(6, 106, 201, 0.1);
}

@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 0.75rem;
    padding-left: 0.5rem;
  }
  .nav-item:hover {
    background: #938b8b21;
  }
}

.nav-pills.nav-tabs-line .nav-link.active {
  color: #066ac9;
  background-color: rgba(6, 106, 201, 0.1);
}
</style>