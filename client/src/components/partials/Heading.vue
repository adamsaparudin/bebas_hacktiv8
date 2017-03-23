<template lang="html">
  <nav>
  <div class="nav-wrapper">
    <a href="/" class="brand-logo">SimpleBlog</a>
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <div v-if="loggedIn">
        <li><a href="/">Home</a></li>
        <li><a href="/create-article">Create Article</a></li>
        <li><a href="#" @click="logout()">Logout</a></li>
      </div>
      <div v-else>
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/register">Register</a></li>
      </div>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: "Heading",
  data() {
    return {
      loggedIn: false
    }
  },
  mounted() {
    this.checkLogin()
  },
  methods : {
    checkLogin() {
      if(localStorage.getItem("token") != undefined || localStorage.getItem("token") != null)
        this.loggedIn = true
    },
    logout() {
      localStorage.clear()
      window.location.href = '/'
    }
  }
}
</script>

<style lang="css">
  .menu {
    background-color:
  }
  h1.site-name {
    font-size: 20px;
  }
</style>
