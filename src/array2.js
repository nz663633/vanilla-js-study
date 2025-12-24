let array1 = ["green", "blue"];
let array2 = ["purple", "yellow"];
let array3 = ["red", "orange", "pink", "navy"];

console.log(array1.concat(array2));
console.log(array3.join());
console.log(array3.join(" "));

// concat(): 두 개의 배열을 하나로 합쳐 새로운 배열로 반환

// join(): 해당 배열을 문자열로 출력
// 매개변수 =  구분자, 요소들을 합칠 때 사이에 어떤 문자를 넣을지 결정
// 매개변수를 넣지 않으면 쉼표(,)가 기본 구분자로 출력


let fruits = ["banana", "apple", "mango"];
fruits.sort();
console.log(fruits);

const compare = (a, b) => { // 내림차순
    if (a > b) return -1; // a를 b보다 앞에 둔다.
    else if (a < b) return 1; // a를 b보다 뒤에 둔다.
    else return 0; // 순서를 바꾸지 않는다.
}
let animals = ["dog", "pig", "cat", "horse"];
animals.sort(compare);
console.log(animals);

const compare2 = (a, b) => { // 오름차순
    return a - b; // 숫자 전용 비교함수
    // return b - a; (내림차순)
}
let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort(compare2);
console.log(numbers);

// sort(): 배열을 정렬(오름차순)


let numbers2 = [1, 100, 25, 50];
let sum = numbers2.reduce((acc, cur, idx) => {
    console.log(acc, cur, idx);
    return acc + cur;
}, 0); // 0은 initialValue, acc 매개변수가 가장 처음에 갖고 있게 될 초기값

console.log(sum);

// reduce(): 배열의 모든 요소들을 확인하고 누적된 값들을 출력할 때 사용
// acc: 콜백함수의 반환값을 누적하는 매개변수
// cur: 현재 처리할 요소
// idx: 현재 처리할 요소의 인덱스


let a = Array.isArray([1, 100, 50]);
let b = Array.isArray({id: 1, color: "green"});
let c = Array.isArray("string");
let d = Array.isArray(undefined);

console.log(a, b, c, d);

// isArray(): 전달된 매개변수가 배열인지 아닌지 판별(불리언으로 출력)