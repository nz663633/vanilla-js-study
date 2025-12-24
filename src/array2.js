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

console.log("==============");

let fruits = ["banana", "apple", "mango"];
fruits.sort();
console.log(fruits);

// sort(): 배열을 정렬(오름차순)

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