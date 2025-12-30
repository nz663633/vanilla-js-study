console.log('__dirname:', __dirname);


const express = require('express'); // express 모듈 가져오기
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '..'))); // 파일 경로 지정

app.get('/{*splat}', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, () => {
    console.log('START SERVER')
});