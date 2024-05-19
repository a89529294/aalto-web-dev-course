import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as addressService from "./address-service.js";
import * as addressController from "./address-controller.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

app.get("/", addressController.listAddresses);

app.post("/addresses", addressController.addAddress);

Deno.serve(app.fetch);
