<template>
  <v-layout>
    <v-flex xs6 v-if="isUserLoggedIn">
      <songs-bookmarks />
      <songs-recently-viewed class="mt-2" />
    </v-flex>
    <v-flex :class="{
        xs12: !isUserLoggedIn,
        xs6: isUserLoggedIn
      }" class="ml-2">
      <songs-search />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
import {mapState} from 'vuex'
import SongsBookmarks from './SongsBookmarks'
import SongsRecentlyViewed from './SongsRecentlyViewed'
import SongsPanel from './SongsPanel'
import SongsSearch from './SongsSearch'
export default {
  components: {
    SongsBookmarks,
    SongsRecentlyViewed,
    SongsPanel,
    SongsSearch
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  }
}
</script>

<style scoped>
</style>
