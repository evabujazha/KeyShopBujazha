let is_ok = true;

let CustomFetch = (time, task) => {
  return new Promise((resolve, reject) => {
    if (is_ok) {
      setTimeout(() => {
        resolve(task);
      }, time);
    } else {
      reject("Error");
    }
  });
};

export default CustomFetch;
