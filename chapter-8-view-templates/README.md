`deno run --allow-net --allow-read --watch app.js`

## eta view templates

- `<%= it.var_name =>` escapes content
- `<%~ it.var_name =>` does not escape content
- `<% js_code %>` allows the use of js, simply evaluates, does not return anything renderable.
