<template>
  <v-layout>
    <v-flex xs6>
      <songs-bookmarks />
      <songs-recently-viewed class="mt-2" />
    </v-flex>
    <v-flex xs6 class="ml-2">
      <songs-search />
      <songs-panel class="mt-2" />
    </v-flex>
  </v-layout>
</template>

<script>
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
  }
}
</script>

<style scoped>
</style>
