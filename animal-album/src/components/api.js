const API_URL = 'https://animal-api-two.vercel.app/';

// API
export const request = async (name) => { // 서버에서 동물 사진 데이터 받아오기
    let res = await fetch(name ? `${API_URL}${name}` : API_URL); // 요청 시작, res는 Promise 객체
    try {
        if (res) { // 응답이 있으면 진행
            let data = await res.json(); // res에서 JSON 데이터를 파싱하는 작업이 완전히 끝날 때까지 기다림
            return data.photos; // data에서 photos에 해당하는 데이터 반환
        }
    } catch (err) {
        console.log(err);
    }
};