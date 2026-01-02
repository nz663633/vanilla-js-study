const express = require('express'); // express 모듈 가져오기
const path = require('path'); // 경로 쉽게 작성할 수 있는 path 모듈 가져오기
const app = express(); // 상수 app에 express 모듈 실행해서 할당하기
const PORT = 3000; // 상수 PORT에 사용할 포트번호 할당

app.use(express.static(path.join(__dirname, '..'))); // 파일 경로 지정

app.get('/{*splat}', (req, res) => { // 어떠한 경로에서 요청이 오더라도 항상 index.html 반환
    res.sendFile(path.join(__dirname, '..', 'index.html'))
});

app.listen(PORT, () => {
    console.log('START SERVER'); // 서버 실행에 성공했을 때 출력할 메세지
})