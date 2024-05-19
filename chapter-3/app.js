import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

let store = 0;

const setStore = (s) => (store = s);

const getStore = () => store;

const app = new Hono();

app.get("/", (c) => {
  if (c.req.query("store")) {
    setStore(c.req.query("store"));
  }

  return c.text(`Store: ${getStore()}`);
});

Deno.serve(app.fetch);
