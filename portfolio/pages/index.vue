<template>
  <div >
    <div class="flex mb-4 w-20 fixed">
      <div class="w-5 h-18 pt-5 pl-5">
        <span id="name">JARED HANDRA</span>
      </div>
    </div>
    <section class="h-screen">
      <div class="mb-10 pt-64">
        <div class="text-center">
          <span class="what-i-do">I enjoy creating solutions</span><br>
          <span class="about">Currently creating Vuejs solutions at GE Aviation</span>
        </div>
      </div>
    </section>
    <section class="h-screen">
      <div class="mb-10 pt-64">
        <div class="text-center" id="about-me">
          <span class="what-i-do">Who are you anyway?</span><br>
          <span class="about">I enjoy making solutions to solve problems I run into (or make for myself)</span><br>
          <span class="about">I'm also the President of the FC Cincinnati Supporters Group Die Innenstadt <a href="http://www.dieinnenstadt.com/story" target="_blank">(What's that?)</a></span>
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
      <nowPlaying />
    </div>
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import NowPlaying from '~/components/NowPlaying.vue'

export default {
  components: {
    Logo,
    NowPlaying
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
