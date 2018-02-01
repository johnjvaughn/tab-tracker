<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata v-if="song" :song="song" />
      </v-flex>

      <v-flex xs6 class="ml-2">
        <song-youtube v-if="song" :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs6>
        <song-lyrics v-if="song" :song="song" />
      </v-flex>
      <v-flex xs6 class="ml-2">
        <song-tab v-if="song" :song="song" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'
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
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user',
      'route'
    ])
  },
  async mounted () {
    const id = this.route.params.id
    this.song = (await SongsService.show(id)).data
    if (this.isUserLoggedIn) {
      SongHistoryService.create({
        songId: id
      })
    }
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
