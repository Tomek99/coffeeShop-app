const maskedHashUtil = (value) => {
  return value.replace(/./g, "*").slice(0, 20);
};
export default maskedHashUtil;
