<template lang="html">

  <div class="Index">
    <Heading></Heading>
    <div class="container">
      <h3>List Articles</h3>
      <div class="col s12 m7">
    <div class="card horizontal" v-for="article in articles">
      <div class="card-stacked">
        <div class="card-content">
          <p>{{ article.title }}.</p>
        </div>
        <div class="card-action">
          <div class="row">
            <div class="col s6">
              <a :href="'/article/' + article._id">Details</a>
            </div>
            <div class="col s6">
              <span></span>
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
      articles: ''
    }
  },
  mounted() {
    this.getArticle()
  },
  methods : {
    getArticle() {
      this.axios.get('http://localhost:3000/api/articles')
      .then( (response) => {
        this.articles = response.data
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
