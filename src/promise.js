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


const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3초가 지났습니다.')
        }, ms);
    });
};

const start = async () => { // 비동기 작업을 순서대로 처리할 함수
    try { // try 안에서 에러 발생하면 catch로 이동
        let result = await delay(3000); // delay(3000) -> 즉시 Promise 반환, delay 함수의 결과를 기다림
        console.log(result);
    }
    catch(error) {
        console.log(error);
    }
};

start();

// async(): 항상 Promise 반환
/* await(): Promise 객체가 처리 완료될 때까지의 함수의 실행을 기다리게 함
await 키워드는 프로미스 객체를 반환하는 어떠한 함수 내부에서만 사용가능
-> async 키워드 내부에서만 사용가능*/


const testA = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('testA');
        }, 5000);
    });
};
const testB = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('testB');
        }, 3000);
    });
};
const testC = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('testC');
        }, 10000);
    });
};

const start2 = async () => {
    try{
        let results = await Promise.all([testA(), testB(), testC()]);
        results.forEach(res => console.log(res));
    } catch(err) {
        console.log(err);
    }
};

start2();

/* Promise.all(): 여러 개의 Promise를 병렬로 실행, 
모든 Promise가 완료될 때까지 기다렸다가 결과를 한 번에 반환
전달된 Promise 배열이 모두 fulfilled(성공)될 때까지 대기
(하나라도 rejected(실패)된다면 오류 출력) */