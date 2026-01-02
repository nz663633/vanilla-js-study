export default function Header() {
    this.$target = document.createElement('div');
    this.$target.className = 'header';

    this.template = () => {};

    this.render = () => {};

    this.setState = (newState) => { // 새로운 상태 업데이트
        this.state = newState;
        this.render();
    };
    this.render();
}
