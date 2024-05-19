import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.use("*", async (c, next) => {
  if (c.req.path !== "/" || c.req.method !== "GET") {
    return c.redirect("/");
  }

  await next();
});

app.get("/", (c) => c.text("Hello middlewares!"));

Deno.serve(app.fetch);
