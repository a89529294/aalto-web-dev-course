import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";
import * as service from "./service.js";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import {
  getCookie,
  setCookie,
} from "https://deno.land/x/hono@v3.12.11/helper.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const feedbacks = {};
// {
//   [user-id]:[course-id-1, course-id-2]
// }

async function feedbacksGet(c, number) {
  const kv = await Deno.openKv();
  const obj = await kv.get(["feedbacks", number]);
  if (obj.value === null) await kv.set(["feedbacks", number], 0);

  return c.text(`Feedback ${number}:${obj.value ?? 0}`);
}

async function feedbacksPost(c, number) {
  const kv = await Deno.openKv();
  const obj = await kv.get(["feedbacks", number]);
  if (obj.value === null) kv.set(["feedbacks", number], 1);
  kv.set(["feedbacks", number], obj.value + 1);
  return c.redirect("/");
}

const showForm = async (c) => {
  return c.html(
    eta.render("courses.eta", { courses: await service.listCourses() })
  );
};

const showCourse = async (c) => {
  const id = c.req.param("id");

  const userId = getCookie(c, "userId");
  feedbacks[userId] ||= [];

  const hasGivenFeedback = feedbacks[userId].includes(id);
  // console.log(feedbacks, userId);
  return c.html(
    eta.render("course.eta", {
      course: await service.getCourse(id),
      showFeedback: !hasGivenFeedback,
    })
  );
};

const validator = z.object({
  title: z.coerce.string().min(4),
});

const createCourse = async (c) => {
  const body = await c.req.parseBody();
  const result = validator.safeParse(body);

  if (!result.success)
    return c.html(
      eta.render("courses.eta", {
        courses: await service.listCourses(),
        error: "The course name should be a string of at least 4 characters.",
        invalidCourseName: body.title,
      })
    );

  await service.createCourse(body);
  return c.redirect("/courses");
};

const updateCourse = async (c) => {
  const id = c.req.param("id");
  const body = await c.req.parseBody();
  await service.updateCourse(id, body);
  return c.redirect(`/courses/${id}`);
};

const deleteCourse = async (c) => {
  const id = c.req.param("id");
  await service.deleteCourse(id);
  return c.redirect("/courses");
};

const getFeedback = (c) => {
  const id = c.req.param("id");
  const userId = getCookie(c, "userId");

  console.log(feedbacks);
  feedbacks[userId] ||= [];

  feedbacks[userId].push(id);

  console.log(feedbacks);

  return c.redirect(`/courses/${id}`);
};

export {
  feedbacksGet,
  feedbacksPost,
  showForm,
  createCourse,
  showCourse,
  updateCourse,
  deleteCourse,
  getFeedback,
};
