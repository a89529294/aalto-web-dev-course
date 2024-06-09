import { eta } from "../config/etaConfig.js";
import * as todoService from "./todoService.js";

const showForm = async (c) => {
  return c.html(
    eta.render("todos.eta", { todos: await todoService.listTodos(c.user.id) })
  );
};

const showTodo = async (c) => {
  const id = c.req.param("id");
  return c.html(
    eta.render("todo.eta", { todo: await todoService.getTodo(c.user.id, id) })
  );
};

const createTodo = async (c) => {
  const body = await c.req.parseBody();
  console.log(body);
  await todoService.createTodo(c.user.id, body);
  return c.redirect("/todos");
};

const updateTodo = async (c) => {
  const id = c.req.param("id");
  const body = await c.req.parseBody();
  await todoService.updateTodo(c.user.id, id, body);
  return c.redirect(`/todos/${id}`);
};

const deleteTodo = async (c) => {
  const id = c.req.param("id");
  await todoService.deleteTodo(c.user.id, id);
  return c.redirect("/todos");
};

export { showForm, createTodo, showTodo, updateTodo, deleteTodo };
