const API_URL = 'https://animal-api-two.vercel.app/';

const $content = document.querySelector('div.content');
const template = [];

// API
const getData = async () => {
    let res = await fetch(API_URL); // 요청 시작, res는 Promise 객체
    try {
        if (res) {
            let data = await res.json(); // res에서 JSON 데이터를 파싱하는 작업이 완전히 끝날 때까지 기다림
            data.photos.forEach((elm) => { // 데이터가 준비된 후 실행(async, await의 필요성)
                template.push(`<img src="${elm.url}" alt="${elm.name}"></img>`);
            });
            $content.innerHTML = template.join(' ');
        }
    } catch (err) {
        console.log(err);
    }
};

getData();