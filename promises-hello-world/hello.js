console.log("Hello")

let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(myResolve, 1000);
});

console.log("Before")

myPromise.then(
  function(error) { console.log("Done"); },
  function(value) { console.log("Failed"); }
);

console.log("After")
