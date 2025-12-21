const executor = (resolve, reject) => {
    setTimeout(() => {
        resolve('성공');
        reject('실패');
    }, 3000);
};

const promise = new Promise(executor);
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
// then 메서드: promise가 fulfilled(성공) 되었을 때 실행
// catch 메서드: promise가 reject(실패) 되었을 때 실행