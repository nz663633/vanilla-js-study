export default function TabBar({$app, initialState, onClick}) {
    this.state = initialState;
    this.onClick = onClick;

    this.$target = document.createElement('div'); // TabBar 전체를 감싸는 DOM 생성
    this.$target.className = 'tab-bar';
    $app.appendChild(this.$target); // TabBar는 app의 자식 컴포넌트

    this.template = () => {
        let temp = `<div id="all">전체</div><div id="penguin">펭귄</div>
        <div id="koala">코알라</div><div id="panda">판다</div>`;

        return temp;
    }

    this.render = () => {
        this.$target.innerHTML = this.template();

        let $currentTab = document.getElementById(this.state);
        // $currentTab ? ($currentTab.className = 'clicked'): '';
        $currentTab && ($currentTab.className = 'clicked');
        // ->  해당 탭이 존재하면 clicked 클래스 추가

        const $tabBar = this.$target.querySelectorAll('div');
        $tabBar.forEach((elm) => {
            elm.addEventListener('click', () => {
                onClick(elm.id); // 해당 id(탭)가 눌렸다는 것을 app에 전달
            })
        })
    };

    this.setState = (newState) => {
        this.state = newState;
        this.render();
    };

    this.render();
}