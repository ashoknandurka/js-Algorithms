// debounce

function debounce(fun, delay) {
  let timeOutId;
  return function (...args) {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      fun.apply(this, args);
    }, delay);
  };
}

const fetchResults = debounce((query) => {
  console.log("value::", query);
}, 3000);

document.getElementById("search").addEventListener("input", (e) => {
  fetchResults(e.target.value);
});

//throttling

function throttle(fun, interval) {
  let lastTime = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastTime >= interval) {
      lastTime = now;
      fun.apply(this, args);
    }
  };
}
const onResize = throttle(() => {
  console.log("window height::", window.innerHeight);
}, 3000);

window.addEventListener("resize", onResize);
