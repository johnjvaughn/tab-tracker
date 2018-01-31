<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <song-youtube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6>
        <song-lyrics :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-2">
        <song-tab :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongMetadata from './SongMetadata'
import SongYoutube from './SongYoutube'
import SongLyrics from './SongLyrics'
import SongTab from './SongTab'
export default {
  components: {
    SongMetadata,
    SongYoutube,
    SongLyrics,
    SongTab
  },
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const id = this.$store.state.route.params.id
    this.song = (await SongsService.show(id)).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
</style>
