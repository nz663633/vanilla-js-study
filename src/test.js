const delay = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('3초가 지났습니다.')
        }, ms);
    });
};

const start = async () => {
    let result = await delay(3000);
    console.log(result);
};

start();