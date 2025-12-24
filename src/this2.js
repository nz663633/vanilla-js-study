function Counter() {
    this.count = 0;
    // setInterval(function() { -> this 바인딩 발생 (window 객체 가리킴)
    setInterval(() => { // Counter의 this 캡쳐
        this.count++;
        console.log(this.count);
    }, 2000);
};

const counter = new Counter();

/* setInterval 함수에 전달된 (일반함수로 작성된)콜백함수의 this는 
생성자 함수를 통해 새로 생성된 Counter 객체를 가리키지 않고
전역객체(window)를 가리키기 때문에 Counter의 객체 counter가 증가 X -> NaN 출력 */

// 화살표 함수는 this를 새로 만들지 않는다.
// 자기 자신을 감싸고 있는 스코프의 this를 그대로 사용 (lexical this)