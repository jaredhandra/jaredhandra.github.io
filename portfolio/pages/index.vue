<template>
  <div >
    <div class="flex mb-4 w-20 fixed">
      <div class="w-5 h-18 pt-5 pl-5">
        <span id="name">JARED HANDRA</span>
      </div>
    </div>
    <section class="h-screen">
      <div class="mb-10 pt-64">
        <div class="text-center" id="about-me">
          <span class="about">Currently a Software Engineer at GE Aviation creating Vuejs solutions.</span><br>
        </div>
      </div>
      <div class="mb-4">
        <div class="text-center" id="links">
          <a class="link" href="https://github.com/jaredhandra" target="_blank">Github</a> //
          <a class="link" href="https://www.linkedin.com/in/jaredhandra/" target="_blank">Linkedin</a> //
          <a class="link" href="https://instagram.com/handrajs/" target="_blank">Instagram</a> //
          <a class="link" href="https://open.spotify.com/user/jaredhandra?si=Hsv7fKj5QY6M9ZFJLWWTuQ" target="_blank">Spotify</a>
        </div>
    </div>
    <div class="mb-4">
      <div class="spotify-container text-center">
        Jared is currently listening to <a :href="url" target="_blank"><b>{{currentTrack}}</b></a> by {{currentArtist}} on Spotify
      </div>
    </div>
    <div class="flex">
      <div class="w-1/4 p-2">Work</div>
      <div class="w-1/4 p-2 bg-gray-500 text-center float-right">.w-4/5</div>
    </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Logo
  },
  async asyncData ({ params }) {
    let { data } = await axios.get(`https://7qjcmqsnic.execute-api.us-east-1.amazonaws.com/beta/spotifyLogin`)
    return { currentTrack: data.currentlyPlaying.songName, currentArtist: data.currentlyPlaying.artistName, url: data.currentlyPlaying.songUrl }
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
@import url('https://fonts.googleapis.com/css?family=Fira+Code|Kanit|Lato&display=swap');
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

#name {
  font-weight: 600;
  font-size: 42px;
  font-family: 'Kanit', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  letter-spacing: 1px;
}
.what-i-do {
  font-weight: 800;
  font-size: 72px;
  font-family: 'Lato', sans-serif;
}
.about {
  font-family: 400;
  font-size: 24px;
}
#links {
  font-weight: 500;
  font-size: 24px;
  letter-spacing: 1px;
}
a:link {
  text-decoration: underline;
}

</style>
