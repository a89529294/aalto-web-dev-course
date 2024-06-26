// course is of the shape {
//  id:string;
//  title: string;
// }
const createCourse = async (course) => {
  course.id = crypto.randomUUID();

  const kv = await Deno.openKv();
  await kv.set(["courses", course.id], course);
};

const getCourse = async (id) => {
  const kv = await Deno.openKv();
  const course = await kv.get(["courses", id]);
  if (course.value) return course.value;
  return {};
};

const listCourses = async () => {
  const kv = await Deno.openKv();
  const entries = await kv.list({ prefix: ["courses"] });

  const courses = [];
  for await (const entry of entries) {
    courses.push(entry.value);
  }

  return courses;
};

const updateCourse = async (id, course) => {
  course.id = id;
  const kv = await Deno.openKv();
  await kv.set(["courses", id], course);
};

const deleteCourse = async (id) => {
  const kv = await Deno.openKv();
  await kv.delete(["courses", id]);
};

export { createCourse, listCourses, getCourse, updateCourse, deleteCourse };
