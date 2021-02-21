export const validationMessages: { [index: string]: (_?: any) => string } = {
  required: () => `This field is required`,
  minLength: ({ min, length }) => `min leth is ${min} ${length}`,
};
