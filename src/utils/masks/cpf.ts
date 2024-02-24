export const applyMask = (value: string) => {
  return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
};

const cofLength = 11;
const extraCharactersAfterMask = 3;

export const maxLength = cofLength + extraCharactersAfterMask;
