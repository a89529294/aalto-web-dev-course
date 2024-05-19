import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as todoController from "./todoController.js";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const app = new Hono();

app.get("/todos", todoController.showForm);
app.post("/todos", todoController.createTodo);
app.get("/todos/:id", todoController.showTodo);
app.post("/todos/:id", todoController.updateTodo);
app.post("/todos/:id/delete", todoController.deleteTodo);

export default app;
