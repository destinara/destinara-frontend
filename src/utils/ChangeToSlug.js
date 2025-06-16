export const changeToSlug = (text) => {
  if (typeof text !== "string") return "";
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // buang simbol aneh
    .replace(/\s+/g, "-");
};
