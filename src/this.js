// 메서드 -> 객체 프로퍼티 함수
const cafe = {
    brand: '이디야',
    menu: '아메리카노',
    print: function () {
        console.log(this);
    },
};

const myCafe = cafe.print; // print 함수는 메서드로서 호출 X
myCafe(); // 전역공간에서 일반함수로서 호출 O -> 윈도우 객체(전역 객체) 출력

// this: 호출 방식에 따라 동적으로 결정된다.
// 함수가 "어디서 선언됐는지?"가 아니라 "어떻게 호출됐는지"에 따라 가리키는 값(대상)이 달라진다.


// 생성자 -> 새로운 객체 생성 / new 키워드
function Cafe(menu) {
    console.log(this);
    this.menu = menu;
}

let myCafe2 = new Cafe("latte");
console.log(myCafe2);


// 콜백함수
const cafe2 = {
    brand: '빽다방',
    menu: '',
    setMenu: function(menu) { // 일반 함수로 호출됨
        this.menu = menu;
    }
}

function getMenu (menu, callback) {
    callback(menu); // 메서드 함수 호출 X
}

getMenu('핫초코', cafe2.setMenu);
console.log(cafe2);

// 메서드를 콜백함수로 넘기면 객체와의 연결이 끊긴다.
/* 메서드(setMenu)가 콜백함수로 전달되면서,
원래 속해 있던 객체(cafe2)와의 연결이 끊어진다.
따라서 호출 시 this는 더 이상 cafe2를 가리키지 않는다. */