`deno run --allow-net --unstable-kv --watch app.js`

## where is Deno.kv?

When using Deno KV locally, the data is stored in a SQLite database. The location of Deno files can be found using the command deno info. The database location is under the "Origin storage".
When using Deno KV in the cloud, it automatically utilizes an edge ready database.
