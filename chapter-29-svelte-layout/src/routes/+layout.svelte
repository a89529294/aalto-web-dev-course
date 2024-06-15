<script>
  import "../app.css";
  import Navbar from "../components/navbar.svelte";
  import Footer from "../components/footer.svelte";
</script>

<Navbar />

<main class="container mx-auto">
  <slot />
</main>

<Footer />
