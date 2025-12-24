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


const cafe = {
    brand: '이디야',
    menu: '아메리카노',
    print: () => {
        console.log(this);
    },
};

cafe.print();

/* 해당 화살표 함수의 this는
자신을 포함하고 있는 함수가 선언된 위치의 상위 스코프 참조(캡쳐)
객체 리터럴은 스코프를 만들지 않기 때문에
-> cafe 객체가 선언된 위치의 상위 스코프인 윈도우 객체(전역 객체) 출력 */

// 객체의 메서드를 작성할 때에는 화살표 함수가 아닌 일반함수 사용