export default function RegionList({$app, initialState, handleRegion}) {
    this.state = initialState;
    this.$target = document.createElement('div');
    this.$target.className = 'region-list';

    this.handleRegion = handleRegion;
    $app.appendChild(this.$target);

    this.template = () => { // 지역 목록 템플릿 생성
        const regionList = [
            '🚀 All',
            '🌏 Asia',
            '🕌 Middle-East',
            '🇪🇺 Europe',
            '💃 Latin-America',
            '🐘 Africa',
            '🏈 North-America', 
            '🏄 Oceania'
        ];
        let temp = ``;
        regionList.forEach((elm) => {
            let regionId = elm.split(' ')[1];
            temp += `<div id=${regionId}>${elm}</div>`
        });

        return temp;
    };

    this.render = () => {
        this.$target.innerHTML = this.template();
        let $currentRegion;
        if(this.state) { // 현재 선택된 지역 표시
            let $currentRegion = document.getElementById(this.state);
            $currentRegion && ($currentRegion.className = 'clicked');
        } else {
            document.getElementById('All').className = 'clicked';
        }

        // 지역 클릭 시 이벤트 등록
        const $regionList = this.$target.querySelectorAll('div');
        $regionList.forEach((elm) => {
            elm.addEventListener('click', () => {
                this.handleRegion(elm.id);
            });
        });
    };

    this.setState = (newState) => { // 새로운 상태 업데이트
        this.state = newState;
        this.render();
    };
    this.render();
}
