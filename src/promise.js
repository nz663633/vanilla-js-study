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


const workA = (value) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(value + 5);
        }, 5000);
    });
    return promise;
};
const workB = (value) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            callback(value - 3);
        }, 3000);
    });
    return promise;
};
const workC = (value, callback) => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            callback(value + 10);
        }, 10000);
    });
    return promise;
};

workA(10)
    .then((resA) => {
        console.log(`workA : ${resA}`);
        return workB(resA);
    })
    .then((resB) => {
        console.log(`workB : ${resB}`);
        return workC(resB);
    })
    .then((resC) => {
        console.log(`workC : ${resC}`);
    });

/* 비동기 함수의 결과 값을 또 다른 비동기 함수에서 사용하기 위해서는
콜백함수 안에 다시 콜백함수를 전달하는 방식으로 작성 => 콜백지옥 
콜백지옥을 해결하기 위해 => then, catch 메소드 사용 */

