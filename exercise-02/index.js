module.exports = function add(... args) {
  for (let arg of args) {
    if (typeof arg === "string") {
      throw new Error("Cannot call add with string");
    }
  }
  return args.reduce((sum, num) => sum + num, 0);
};
