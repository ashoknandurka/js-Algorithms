async function a() {
    console.log('a');
    setTimeout(() => console.log('e'));
    const promise = new Promise((resolve) => {
      console.log('b');
      resolve('c');
    });
    queueMicrotask(() => console.log('g'))
    promise.then(res => console.log(res));
    const res = await promise;
    console.log(res);
    setTimeout(() => console.log('f'));
    console.log('d')
  }
  a();
