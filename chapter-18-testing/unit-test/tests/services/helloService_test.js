import { assertEquals } from "https://deno.land/std@0.222.1/testing/asserts.ts";
import { getHello, setHello } from "../../services/helloService.js";

Deno.test("getHello", () => {
  getHello();
});

Deno.test("setHello path 1", () => {
  setHello();
});

Deno.test("setHello path 2", () => {
  setHello("...");
});

Deno.test("setHello path 3", () => {
  setHello("...........");
});
