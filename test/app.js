import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import {
  encodeBase64,
  decodeBase64,
} from "https://deno.land/std@0.223.0/encoding/base64.ts";

const app = new Hono();

app.get("/", async (c) => {
  const auth = c.req.header("Authorization");
  const base64Decoded = decodeBase64(auth.split(" ")[1]);
  const textDecoder = new TextDecoder();
  const usernameAndPassword = textDecoder.decode(base64Decoded);
  const username = usernameAndPassword.split(":")[0];
  const password = usernameAndPassword.split(":")[1];
  if (!auth || username !== "123" || password !== "123") {
    c.header("WWW-Authenticate", "Basic");
    c.status(401);
    return c.body("enter credentials");
  }

  return c.text("hi");
});

Deno.serve(app.fetch);
