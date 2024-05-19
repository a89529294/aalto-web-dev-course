import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  getSignedCookie,
  setSignedCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const secret = "secret";

const visits = {};

app.get("/", async (c) => {
  const sessionId =
    (await getSignedCookie(c, secret, "sessionId")) ?? crypto.randomUUID();
  await setSignedCookie(c, "sessionId", sessionId, secret);
  visits[sessionId] = (visits[sessionId] ?? 0) + 1;

  return c.html(eta.render("index.eta", { valid: visits[sessionId] < 4 }));
});

export default app;
