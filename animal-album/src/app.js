// 모든 모듈(api, Content, TabBar)를 관리하는 파일

import TabBar from './components/TabBar.js';
import Content from './components/Content.js';
import { request } from './components/api.js';

export default function App($app) {
    this.state = { // 초기 상태 값
        currentTab: 'all', // 현재 선택된 탭의 이름
        photos: [], // 현재 화면에 보여줄 사진 데이터
    }; // -> app이 관리하는 전역 상태

    const tabBar = new TabBar({
        $app,
        initialState: '', // TabBar 내부에서 사용할 초기 상태(선택된 탭)
        onClick: async (name) => { // name에는 클릭한 탭이름(penguin, koala, panda)
            this.setState({
                ...this.state,
                currentTab: name, // 클릭한 탭으로 변경
                photos: await request(name) // 클릭한 탭에 맞는 사진 데이터 요청
            });
        } // 탭 클릭 -> 상태 변경
    });

    const content = new Content();

    this.setState() = (newState) => {
        this.state = newState;
        tabBar.setState(this.state.currentTab); // 변경된 currentTab을 TabBar에 전달
        content.setState(this.state.photos); // 변경된 photos를 Content에 전달
    };

    const init = async () => { // 처음 실행될 때 한 번만 실행되는 초기화 함수
        try{
            const initialPhotos = await request(); // 아무 탭도 안눌렀을 때 기본 사진 요청
            this.setState({
                ...this.state,
                photos: initialPhotos
            });
            // 초기 사진 데이터를 저장
        } catch(err) {
            console.log(err);
        }
    };

    init(); // app 생성되자마자 초기 데이터 로딩 실행
}