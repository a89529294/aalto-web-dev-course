import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";
import { fun } from "./app.js";

Deno.test("Fun should return 'hello world'", () => {
  assertEquals(fun(), "hello world!");
});
