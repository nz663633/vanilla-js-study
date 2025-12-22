const $fruitSelect = document.getElementById('fruitSelect');

$fruitSelect.addEventListener('change', (event) => {
    console.log(event.target.value);
    // 값을 변경할 때마다 콘솔에 해당 value 값 출력
});

$fruitSelect.remove(1); // 1이라는 인덱스를 가진 바나나 삭제