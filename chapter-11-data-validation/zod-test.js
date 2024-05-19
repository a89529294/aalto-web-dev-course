import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const validator = z.object({
  email: z.string().email(),
});

let result = validator.safeParse("this-is-an@email.com");
console.log(result);

result = validator.safeParse({ email: "this-is-an@email.com" });
console.log(result);
