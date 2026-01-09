// Map은 객체와 유사
const m = new Map();
m.set('a', 'b'); // set(키, 값)으로 Map에 속성 추가
m.set(3, 'c'); // 문자열이 아닌 값도 키로 사용 가능

const d = {};
m.set(d, 'e'); // 객체도 키로 사용 가능
m.get(d); // get(키)로 속성값 조회
console.log(m.get(d)); // e

m.size; // size로 속성 개수 조회
console.log(m.size); // 3

for (const [key, value] of m) { // 반복문에 바로 넣어서 사용 가능
    console.log(key, value); // 'a', 'b', 3, 'c', {}, 'e'
}; // 속성 간의 순서 보장

m.forEach((value, key) => { // forEach도 사용 가능
    console.log(key, value); // 'a', 'b', 3, 'c', {}, 'e'
});

m.has(d); // has(키)로 속성 존재 여부 확인
console.log(m.has(d)); // True

m.delete(d); // delete(키)로 속성 삭제
m.clear(); // clear()로 전부 제거
console.log(m.size); // 0


// Set은 중복 허용 X (배열 자료구조를 사용하고 싶으나, 중복 허용하고 싶지 않을 때 사용)
const s = new Set();
s.add(false); // add(요소)로 Set에 추가
s.add(1);
s.add('1');
s.add(1); // 중복이므로 무시
s.add(2);
console.log(s.size); // 중복이 제거되어 4 출력

// Map과 마찬가지로 has(), for문, forEach문, delete(), clear() 사용 가능

const arr = [1, 3, 2, 7, 2, 6, 3, 5];
const s2 = new Set(arr); // Set(배열)으로 중복 제거
const result = Array.from(s); // 다시 배열로 바꾸기
console.log(result); // 1, 3, 2, 7, 6, 5


// WeakMap은 객체를 수정하지 않으면서 부가적인 정보를 추가
const wm = new WeakMap();
let user = { name: 'hyunji', age: 23 };
wm.set(user, { married: false });
user = null; // user와 함께 부가적인 정보 { married: false }도 함께 가비지 컬렉팅
// <-> Map 객체는 key 값이 가비지 컬렉터의 대상이 되더라도 부가적인 정보가 삭제되지 않음