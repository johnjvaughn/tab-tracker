<template>
  <panel title="Songs">
    <div
      v-for="song in songs"
      :key="song.id">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
          <v-btn
            dark
            class="cyan"
            @click="navigateTo({name: 'song', params: {id: song.id}})">
            View
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImageUrl">
          <br>
          {{song.album}}
        </v-flex>
      </v-layout>
      <hr>
    </div>
    <v-btn
      medium
      middle
      light
      class="cyan accent-2"
      @click="navigateTo({name: 'songs-new'})"
      fab>
      <v-icon>add</v-icon>
    </v-btn>
  </panel>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
  components: {
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: 5px auto;

}
</style>
