<script>
  let { title, description, link } = $props();
</script>

<div class="shadow-xl card w-96 bg-base-100">
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <div class="justify-end card-actions">
      <a href={link}>
        <div class="btn btn-primary">Go!</div>
      </a>
    </div>
  </div>
</div>
