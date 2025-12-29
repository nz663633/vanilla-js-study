// 모든 모듈(api, Content, TabBar)를 관리하는 파일

import TabBar from './components/TabBar.js';
import Content from './components/Content.js';
import { request } from './components/api.js';

export default function App($app) {
    this.state = { // 초기 상태 값
        currentTab: window.location.pathname.replace('/', '') || "all", // 현재 선택된 탭의 이름
        photos: [], // 현재 화면에 보여줄 사진 데이터
    }; // -> app이 관리하는 전역 상태

    // tab
    const tabBar = new TabBar({
        $app,
        initialState: '', // TabBar 내부에서 사용할 초기 상태(선택된 탭)
        onClick: async (name) => { // name에는 클릭한 탭이름(penguin, koala, panda)
            history.pushState(null, `${name} 사진`, name);
            this.updateContent(name);
        }
    });

    // content
    const content = new Content({
        $app,
        initialState: [],
    });

    // state
    this.setState = (newState) => {
        this.state = newState;
        tabBar.setState(this.state.currentTab); // 변경된 currentTab을 TabBar에 전달
        content.setState(this.state.photos); // 변경된 photos를 Content에 전달
    };

    this.updateContent = async (tabName) => {
        try {
            const currentTab = tabName === "all" ? '' : tabName;
            const photos = await request(currentTab); // 아무 탭도 안눌렀을 때 기본 사진 요청
            this.setState({
                ...this.state,
                currentTab: tabName,
                photos: photos
            });
            // 초기 사진 데이터를 저장
        } catch (err) {
            console.log(err);
        }
    }

    window.addEventListener('popstate', async () => {
        this.updateContent(window.location.pathname.replace('/', ''));
    });

    const init = async () => { // 처음 실행될 때 한 번만 실행되는 초기화 함수
        this.updateContent(this.state.currentTab);
    };

    init(); // app 생성되자마자 초기 데이터 로딩 실행
}