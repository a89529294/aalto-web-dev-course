import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get("/", async (c) => {
  return c.html(`<!DOCTYPE html>
<html>
  <head>
    <title>Title</title>
  </head>
  <body>
    <h1>Magic!</h1>
    <p>Now, we will familiarize ourselves with HTML.</p>
  </body>
</html>`);
});

Deno.serve(app.fetch);
