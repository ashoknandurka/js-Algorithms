Array.prototype.myforEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

[1, 2, 3].myforEach((item, index, arr) => {
  console.log(item, index, arr);
});
