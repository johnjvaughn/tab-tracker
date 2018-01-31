<template>
  <v-flex xs6 offset-xs3>
    <songs-search />
    <br>
    <songs-panel />
  </v-flex>
</template>

<script>
import SongsPanel from './SongsPanel'
import SongsSearch from './SongsSearch'
export default {
  components: {
    SongsPanel,
    SongsSearch
  }
}
</script>

<style scoped>
</style>
