import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const eta = new Eta({ views: "templates" });

const app = new Hono();

const validator = z.object({
  email: z.string().email(),
});

app.get("/", (c) => c.html(eta.render("index.eta")));
app.post("/email", async (c) => {
  const body = await c.req.parseBody();
  const result = validator.safeParse(body);
  if (result.success) return c.text("Valid email, thank you!");
  return c.text("Not a valid email, try again.");
});

export default app;
