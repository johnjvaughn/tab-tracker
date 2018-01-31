<template>
  <panel title="YouTube Video">

    <youtube
      :video-id="youtubeId"
      :player-width="500"
      :player-height="300">
    </youtube>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ],
  methods: {
    youtubeLink () {
      return 'https://www.youtube.com/watch?v=' + this.youtubeId
    }
  },
  components: {
  }
}
</script>

<style scoped>
</style>
