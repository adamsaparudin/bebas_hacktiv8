<template lang="html">
  <div class="Login">
    <Heading></Heading>
    <div class="container">
    <h2>Register Page</h2>
    <div class="row">

      <form class="col s12">
        <div class="row">
          <div class="col s1">
            <p>Username: </p>
          </div>
          <div class="input-field col s11">
            <input v-model="user.username" type="text">
          </div>
        </div>

        <div class="row">
          <div class="col s1">
            <p>Password: </p>
          </div>
          <div class="input-field col s11">
            <input v-model="user.password" type="password">
          </div>
        </div>

        <div class="row">
          <div class="col s1">
            <p>Email: </p>
          </div>
          <div class="input-field col s11">
            <input v-model="user.email" type="email">
          </div>
        </div>

        <div class="row">
          <div class="col s1">
            <p>Name: </p>
          </div>
          <div class="input-field col s11">
            <input v-model="user.name" type="text">
          </div>
        </div>

      </form>
      <div class="row">
        <div class="col s12">
          <div class="input-field inline">
            <button v-on:click="registerUser" class="btn waves-effect waves-light">Register</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footing></Footing>
  </div>
</template>

<script>
import Heading from './partials/Heading'
import Footing from './partials/Footing'
export default {
  components: {
    Heading,
    Footing
  },
  data() {
    return {
      user: {
        username: '',
        password: '',
        email: '',
        name: ''
      }
    }
  },
  methods: {
    registerUser() {
      let self = this
      this.axios.post('http://localhost:3000/api/user/register', {
        username: this.user.username,
        email: this.user.email,
        name: this.user.name,
        password: this.user.password
      })
      .then( (response) => {
        if(response.data.username == this.user.username)
          window.location.href = '/login'
        else
          window.location.href = '/register'
      })
      .catch( (err) => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="css">
</style>
