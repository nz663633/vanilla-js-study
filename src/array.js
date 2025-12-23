let arr = [1,2,3,4,5];

arr.forEach((elm, idx, array) => {
    console.log(`${idx}번째 요소는 ${elm}입니다.`);
    console.log(array);
});
// forEach: 배열에서 for문을 대체해 사용
// 배열의 모든 요소 하나씩 순회, 반환값 X