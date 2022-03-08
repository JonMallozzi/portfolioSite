<script lang="ts">
import NameSvg from "./components/name/NameSvg.svelte";
</script>
<main>
  <NameSvg/>
    
  <h3>A Full Stack Software Engineer, Game Dev and a Big Dreamer</h3>

  <p>
    Check out my <a href="https://github.com/JonMallozzi">github</a>  for more info
  </p>
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: black;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
    color: white;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    p {
      max-width: none;
    }
  }
</style>
