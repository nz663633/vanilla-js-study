const API_URL = 'https://animal-api-two.vercel.app/';

// API
export const request = async () => {
    let res = await fetch(API_URL); // 요청 시작, res는 Promise 객체
    try {
        if (res) {
            let data = await res.json(); // res에서 JSON 데이터를 파싱하는 작업이 완전히 끝날 때까지 기다림
            return data.photos;
        }
    } catch (err) {
        console.log(err);
    }
};