<template>
  <section class="box">
    <div class="row header">
      <Title/>
      <ChuccSearchBar/>
    </div>
    <div class="row content">
      <div class="table">
        <ChuccTableItem v-for="item in items" :key="item.message" :title="item.message" :tags="tags"/>
      </div>
    </div>
    <div class="row footer">
      <div>
        <nuxt-link to="/about">About</nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import Title from '~/components/Title.vue'
import ChuccButton from '@bit/yassinefikrat.buds-ui.chucc-button'
import ChuccSearchBar from '@bit/yassinefikrat.buds-ui.chucc-search-bar'
import ChuccTableItem from '@bit/yassinefikrat.buds-ui.chucc-table-item'

export default {
  components: {
    Title,
    ChuccButton,
    ChuccSearchBar,
    ChuccTableItem,
  },
  methods: {
    processClickOnNew: function() {
      alert('Clicked on New')
    }
  },
  data() {
    return {
      items: [
        { message: 'Test connexion from a server to a DB' },
        { message: 'Photopea' }
      ],
      tags: ['178-772', '129-037'],
    }
  },
}
</script>

<style>

body {
  display: flex;
  flex-direction: column;
  margin: 0;
  background-color: #FFE5D9;
  font-family: 'Overpass', 'Hack', monospace;
}

.box {
  /*display: flex;
  flex-flow: column;
  height: 100%;*/
}

.box .row {
}

.box .row.header {
  /*flex: 0 1 auto;*/
}

.box .row.content {
  flex: 1 0 auto;
  overflow-y: auto;
}

.box .row.footer {
  flex-shrink: 0;
}

.table {
  
}

</style>