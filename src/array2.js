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