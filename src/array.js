let colors = ["green", "blue", "purple"];

console.log(colors.at(1));

console.log(colors.includes("blue", 2));
console.log(colors.includes("purple", 1));
console.log(colors.includes("yellow"));

console.log(colors.indexOf("green"));
console.log(colors.indexOf("green", 1));
console.log(colors.indexOf("pink"));

// at(): 배열에서 특정 위치의 값을 가져옴
// 배열의 가장 마지막 요소에 쉽게 접근가능

// includes(): 매개변수로 받은 요소를 배열이 포함하고 있는지 판별하여 불리언 값으로 반환
// includes(배열에서 찾고자 하는 요소, index): 찾고자 하는 요소를 index부터 찾기 시작하겠다!

// indexOf(): 해당 요소의 인덱스 값 찾기
// 해당 요소가 없다면 -1 반환
// indexOf(인덱스번호를 찾고자 하는 요소, index): 찾고자 하는 요소를 index부터 찾기 시작하겠다!
// 객체나 배열인 경우는 사용할 수 없다. -> 대신 findIndex() 사용

console.log("==============");

let colors2 = [
    { id: 1, color: "red"},
    { id: 2, color: "orange"},
    { id: 3, color: "navy"},
    { id: 4, color: "ivory"},
    { id: 5, color: "lightblue"}
];

colors2.findIndex((elm, idx, array) =>
    console.log(`${idx}번째 값은 id: ${elm.id}, color: ${elm.color}`)
);
colors2.findIndex((elm, idx, array) => console.log(array));

let idx = colors2.find((elm) => elm.color === "navy");
console.log(idx);

let filterArray = colors2.filter((elm, idx, array) => elm.id > 2);
console.log(filterArray);

let sliceArray = colors2.slice(1, 4);
console.log(sliceArray);

// find(): 주어진 조건에서 특정 값 그 자체를 반환
// 배열 요소에 해당 값이 없다면 undefined 반환

// filter(): 조건을 만족하는 모든 값들을 새로운 배열에 담아서 반환

// slice(): 배열에서 원하는 부분만 따로 잘라서 새로운 배열로 생성