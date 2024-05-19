import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { getVisits, incrementVisits, resetVisits } from "./visits.js";

const app = new Hono();

app.get("/", async (c) => {
  await incrementVisits();
  return c.text("Hello world!");
});

app.get("/visits", async (c) => {
  const count = await getVisits();
  return c.text(`Visit count: ${count}`);
});

app.get("/reset", async (c) => {
  await resetVisits();
  return c.text("done");
});

Deno.serve(app.fetch);
