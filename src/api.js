const getData = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
};

getData();

// fetxh는 비동기 함수로, 서버에 요청을 보내고 응답을 기다리는 동안
// 다음 코드가 먼저 실행되도록 설계
// -> async, await 사용해야 마치 동기 코드처럼 순서대로 실행되게 만들어줌 