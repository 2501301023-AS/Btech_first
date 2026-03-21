let promise = new Promise(function(resolve, reject) {
  resolve("Task completed");
});

promise.then(function(result) {
  console.log(result);
});