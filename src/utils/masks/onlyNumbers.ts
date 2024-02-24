export const onlyNumbersMask = (value: string) => {
  return value.replace(/[^\d]/g, "");
};
