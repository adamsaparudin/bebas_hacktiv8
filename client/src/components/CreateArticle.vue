<template lang="html">
  <div class="Login">
    <Heading></Heading>
    <div class="container">
    <h2>Create Article Page</h2>
    <div class="row">

      <form class="col s12">
        <div class="row">
          <div class="col s1">
            <p>Title: </p>
          </div>
          <div class="input-field col s11">
            <input v-model="article.title" type="text">
          </div>
        </div>

        <div class="row">
          <div class="col s1">
            <p>Content: </p>
          </div>
          <div class="input-field col s11">
            <textarea rows="10" v-model="article.content"></textarea>
          </div>
        </div>

      </form>
      <div class="row">
        <div class="col s12">
          <div class="input-field inline">
            <button v-on:click="createArticle" class="btn waves-effect waves-light">Create</button>
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
      article: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    createArticle() {
      this.axios.post('http://localhost:3000/api/article', {
        title: this.article.title,
        content: this.article.content,
        token: localStorage.getItem("token")
      })
      .then( (response) => {
        if(response.data.title = this.article.title) {
          window.location.href = `/article/${response.data._id}`
        } else {
          console.log("Something wrong");
        }
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
