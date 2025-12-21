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