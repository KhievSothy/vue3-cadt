<template>
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand" href="index.html">
          <span> Finexo </span>
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item" :class="{ active: $route.path == '/' }">
              <router-link to="/" class="nav-link"
                >{{$t('home')}} <span class="sr-only">(current)</span></router-link
              >
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/about' }">
              <router-link to="/about" class="nav-link"> About</router-link>
            </li>
            <li class="nav-item" :class="{ active: $route.path == '/service' }">
              <router-link to="/service" class="nav-link"> Services</router-link>
            </li>
            <li class="nav-item" :class="{ active:$route.path == '/why' }">
              <router-link to="/why" class="nav-link">Why Us</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="team.html">Team</a>
            </li>
            <li class="nav-item" :class="{ active:$route.path == '/course' }">
              <router-link to="/course" class="nav-link">Courses</router-link>
            </li>
            <li class="nav-item" :class="{ active:$route.path == '/page' }">
              <router-link to="/login" class="nav-link">
                <i class="fa fa-user" aria-hidden="true"></i> Login
              </router-link>
            </li>
            <li class="nav-item" :class="{ active:$route.path == '/register' }">
              <router-link to="/register" class="nav-link">
                <i class="fa fa-user" aria-hidden="true"></i> Register
              </router-link>
            </li>
            <i>
              <button @click="changelocale('en')">Khmer</button>
            </i>
            <form class="form-inline">
              <button class="btn my-2 my-sm-0 nav_search-btn" type="submit">
                <i class="fa fa-search" aria-hidden="true"></i>
              </button>
            </form>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
export default{
  methods: {
changelocale(){
  if(this.$i18n.locale=="en"){
    this.$i18n.locale = "khm";
  }else
  this.$i18n.locale = "en";
}
}
}
</script>

