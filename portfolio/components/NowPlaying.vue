<template>
  <div class="spotify-container text-center">
    Jared is currently listening to <b>{{currentTrack}}</b> by <a :href="trackLink" target="_blank">{{currentArtist}}</a> on Spotify
  </div>
</template>

<script>
export default {
  name: "NowPlaying",
  data: function () {
    return {
      currentTrack: 'Chemical',
      currentArtist: 'The Devil Wears Prada',
      trackLink: '1234324'
    }
  },
  created () {

  },
  methods: {

  }

}
</script>

<style>
a:hover {
  text-decoration: underline;
  color: #9DAC8F;
}
</style>