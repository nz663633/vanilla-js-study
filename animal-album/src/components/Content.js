// 어떤 탭을 눌렀는지에 따라(state에 따라) 알맞은 사진을 보여줌

export default function Content({ $app, initialState }) {
    this.state = initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'content';
    $app.appendChild(this.$target);

    this.template = () => {
        let temp = [];
        if (this.state) {
            this.state.forEach((elm) => {
                temp += `<img src ="${elm.url}"></img>`
            });
        }
        return temp;
    }

    this.render = () => {
        this.$target.innerHTML = this.template();
    }
    this.setState = (newState) => {
        this.state = newState;
        this.render(); // 변경된 내용 업데이트
    }

    this.render();
}