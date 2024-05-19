import * as songService from "./songService.js";
import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const addSong = async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  await songService.addSong(body);

  return c.redirect("/");
};

const listSongs = async (c) => {
  const it = {
    songs: await songService.listSongs(),
  };

  return c.html(eta.render("index.eta", it));
};

export { addSong, listSongs };
