const cafe2 = {
    brand: '빽다방',
    menu: '',
    setMenu: function(menu) { // 일반 함수로 호출됨(메서드 X)
        this.menu = menu;
    }
}

function getMenu (menu, callback) {
    callback(menu);
}

getMenu('핫초코', setMenu());
console.log(cafe2);