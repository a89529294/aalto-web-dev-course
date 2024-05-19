import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import { serveStatic } from "https://deno.land/x/hono/middleware.ts";
import * as controller from "./controller.js";
import {
  getCookie,
  setCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const app = new Hono();

app.use("/", serveStatic({ root: "./" }));
app.use("/*", async (c, next) => {
  if (!getCookie(c, "userId")) setCookie(c, "userId", crypto.randomUUID());
  await next();
});

app.get("/feedbacks/1", (c) => controller.feedbacksGet(c, 1));
app.post("/feedbacks/1", (c) => controller.feedbacksPost(c, 1));
app.get("/feedbacks/2", (c) => controller.feedbacksGet(c, 2));
app.post("/feedbacks/2", (c) => controller.feedbacksPost(c, 2));
app.get("/feedbacks/3", (c) => controller.feedbacksGet(c, 3));
app.post("/feedbacks/3", (c) => controller.feedbacksPost(c, 3));
app.get("/feedbacks/4", (c) => controller.feedbacksGet(c, 4));
app.post("/feedbacks/4", (c) => controller.feedbacksPost(c, 4));
app.get("/feedbacks/5", (c) => controller.feedbacksGet(c, 5));
app.post("/feedbacks/5", (c) => controller.feedbacksPost(c, 5));

app.get("/courses", controller.showForm);
app.post("/courses", controller.createCourse);
app.get("/courses/:id", controller.showCourse);
app.post("/courses/:id", controller.updateCourse);
app.post("/courses/:id/delete", controller.deleteCourse);
app.post("/courses/:id/feedbacks/:score", controller.getFeedback);

export default app;
