export const applyMask = (value: string) => {
  return value.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
};

const cofLength = 14;
const extraCharactersAfterMask = 3;

export const maxLength = cofLength + extraCharactersAfterMask;
