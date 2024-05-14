export const generateAuthCode = () => {
  return Math.random().toString().slice(2, 8);
};
