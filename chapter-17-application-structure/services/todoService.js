// todo is of the shape {
//  id:string;
//  name: string;
// }
const createTodo = async (userId, todo) => {
  todo.id = crypto.randomUUID();
  console.log(userId, todo);

  const kv = await Deno.openKv();
  await kv.set(["todos", userId, todo.id], todo);
};

const getTodo = async (userId, id) => {
  const kv = await Deno.openKv();
  const todo = await kv.get(["todos", userId, id]);
  if (todo.value) return todo.value;
  return {};
};

const listTodos = async (userId) => {
  const kv = await Deno.openKv();
  const entries = await kv.list({ prefix: ["todos", userId] });

  const todos = [];
  for await (const entry of entries) {
    todos.push(entry.value);
  }

  return todos;
};

const updateTodo = async (userId, id, todo) => {
  todo.id = id;
  const kv = await Deno.openKv();
  await kv.set(["todos", userId, id], todo);
};

const deleteTodo = async (userId, id) => {
  const kv = await Deno.openKv();
  await kv.delete(["todos", userId, id]);
};

export { createTodo, listTodos, getTodo, updateTodo, deleteTodo };
