function a() {
  return new Promise((resolve, reject) => {
    resolve("Hello World");
  });
}
const promise = a();
console.log(promise);
promise
  .then((x) => {
    return x;
  })
  .then(
    (x) =>
      new Promise((resolve, reject) => {
        reject("Hello");
        return x;
      })
  )
  .catch((err) => console.log("this is error" + err))
  .then((x) => console.log(x));
