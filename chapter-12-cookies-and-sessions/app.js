import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getCookie,
  setCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

app.get("/", (c) => {
  const name = getCookie(c, "name");
  if (name) return c.html(eta.render("index.eta", { name }));
  else return c.html(eta.render("index.eta"));
});

app.post("/", async (c) => {
  const body = await c.req.parseBody();
  setCookie(c, "name", body.name);
  return c.redirect("/");
});

export default app;
