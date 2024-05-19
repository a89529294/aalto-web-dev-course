import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

const data = {
  count: 0,
  secret: "Illuminati",
  heading: "Hello world!",
  variable: "<strong>Epic HTML!</strong>",
  people: [
    { name: "Richard Wagner" },
    { name: "Giuseppe Verdi" },
    { name: "Matti Luukkainen" },
    { name: "Pyotr Tchaikovsky" },
  ],
  translations: [
    { fi: "kuusi palaa", en: "six pieces" },
    { fi: "kuusi palaa", en: "six of them are returning" },
    { fi: "kuusi palaa", en: "number six is on fire" },
    { fi: "kuusi palaa", en: "number six is returning" },
    { fi: "kuusi palaa", en: "spruce is on fire" },
    { fi: "kuusi palaa", en: "spruce is returning" },
    { fi: "kuusi palaa", en: "your moon is on fire" },
    { fi: "kuusi palaa", en: "your moon is returning" },
  ],
  board: [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "O"],
  ],
};

app.get("/", (c) => {
  data.count++;
  return c.html(eta.render("index.eta", data));
});

Deno.serve(app.fetch);
