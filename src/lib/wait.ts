const wait = (timeout?: number) => {
  return new Promise((res) => {
    setTimeout(() => {
      res("okay");
    }, timeout || 1000);
  });
};
export default wait;
