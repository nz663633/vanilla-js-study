let arr = [1,2,3,4,5];

let newArray = arr.map((elm) => {
    return elm * 10;
});

console.log(newArray);

// map(): 배열 안에 모든 원소를 변환할 때 유용
// 전달한 콜백함수를 호출한 결과를 모아서 새로운 배열로 반환
// 배열의 모든 요소에 연산을 적용
// forEach() / map() : 처리할 현재요소, index, array 순서대로 매개변수 전달가능