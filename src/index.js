const compare2 = (a, b) => { // 오름차순
    return b - a; // 문자열 정렬에서는 사용불가
}
let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort(compare2);
console.log(numbers);