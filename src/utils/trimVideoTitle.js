export const trimVideoTitle = (name) => {
  if (name.length > 50) {
    return name.substring(0, 47) + "...";
  }
  return name;
};
