import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as addressService from "./address-service.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const listAddresses = async (c) => {
  const data = {
    addresses: await addressService.listAddresses(),
  };

  return c.html(eta.render("index.eta", data));
};

const addAddress = async (c) => {
  const body = await c.req.parseBody();
  await addressService.addAddress(body);

  return c.redirect("/");
};

export { addAddress, listAddresses };
