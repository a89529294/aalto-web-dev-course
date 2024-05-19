import { htmlWithUser } from "../utils/renderUtils.js";

const showMain = async (c) => {
  return htmlWithUser(c, "main.eta");
};

export { showMain };
