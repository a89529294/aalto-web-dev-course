<script>
  import Hero from "../components/hero.svelte";
  import Card from "../components/card.svelte";
</script>

<svelte:head>
  <title>My application</title>
</svelte:head>

<Hero />

<div class="flex mt-10 mb-10 justify-evenly">
  <Card title="Home" description="You are here." link="/" />
  <Card title="About" description="About.. what?" link="/about" />
  <Card title="Contact" description="Get in touch" link="/contact" />
</div>
