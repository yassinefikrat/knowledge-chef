<template>
  <section>
    <div id="app">
      <div class="links">
        <nuxt-link to="/">Go to home</nuxt-link>
      </div>
      <ChuccButton @click="processClickOnNew">New</ChuccButton>
    </div>
  </section>
</template>

<script>
import ChuccButton from '@bit/yassinefikrat.buds-ui.chucc-button'

export default {
  components: {
    ChuccButton
  },
  methods: {
    processClickOnNew: function() {
      alert('Clicked on New')
    }
  }
}
</script>

<style>
.links {
  margin-top: 60px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #FFE5D9;
}
</style>