// spread(풀어서 사용)
const toy = {
    type: "bear",
    price: 15000
};
const blueToy = {
    ...toy,
    color: "blue"
};
const yellowToy = {
    ...toy,
    color: "yellow"
}

console.log(blueToy);
console.log(yellowToy);


const color1 = ["red", "orange", "yellow"];
const color2 = ["blue", "navy", "purple"];
const rainbow = [...color1, "green", ...color2];

console.log(rainbow);

// spread(...): 점 3개의 기호를 사용해 특정 객체가 가진 프로퍼티들을 펼쳐주는 역할
// 객체, 배열에서 사용가능
// 반복적인 부분 간단하게 사용가능, 순서에 상관없이 여러 번 사용가능


// rest(나머지 매개변수 - 남은 것 모으기)
const info = {
    name: "hyeonji",
    age: 22,
    gender: "woman"
};

const { name, ...rest } = info;

console.log(name);
console.log(rest);


const color = ["red", "orange", "yellow", "green"];
const [c1, c2, ...rest2] = color;
console.log(c1, c2);
console.log(rest2);


const print = (a, b, ...rest3) => {
    console.log(a, b, rest3);
};

print(1, 2, 3, 4, 5, 6);

// rest: 구조분해 할당을 통해 원하는 값들을 꺼내고 나머지 값들을 별도로 묶어서 할당
// 항상 맨 마지막에 작성해야함(중복사용 X)
// 함수의 매개변수가 매우 많거나 몇 개가 될 지 모를 때
// -> 함수에서 받아온 매개변수들을 배열로 나타낼 때 유용


// spread + rest
const print2 = (...rest) => {
    console.log(rest);
};
const numbers = [1, 2, 3, 4, 5, 6];
print2(...numbers);
// print2(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]);
