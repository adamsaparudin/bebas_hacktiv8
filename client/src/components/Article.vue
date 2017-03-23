<template lang="html">

  <div class="Index">
    <Heading></Heading>
    <div class="container">
      <h3>{{ article.title }}</h3>
      <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <p>{{ article.content }}.</p>
        </div>
        <div class="card-action">
          <div class="row">
            <div class="col s6">
              <a href="#">Edit</a>
              <a href="#" @click="deleteArticle()">Delete</a>
            </div>
            <div class="col s6" style="text-align: right">
              <span>Posted By : {{ article.author.username }}</span><br>
              <span>Created At : {{ article.createdAt }}</span>
            </div>
          </div>
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
      article: ''
    }
  },
  mounted() {
    this.getArticle()
  },
  methods : {
    getArticle() {
      this.axios.get('http://localhost:3000/api/article/' + this.$route.params.id)
      .then( (response) => {
        this.article = response.data
      })
      .catch( (err) => {
        console.log(err);
      })
    },
    deleteArticle() {
      this.axios.delete('http://localhost:3000/api/article/' + this.$route.params.id)
      .then( (response) => {
        window.location.href = '/'
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
