<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!--      <a class="navbar-brand">Electronic Store</a>-->
      <router-link to="/" class="navbar-brand">Electronic Store</router-link>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/add" class="nav-link text-danger">Add Electronic Item</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <router-view/>
  </div>
</template>
