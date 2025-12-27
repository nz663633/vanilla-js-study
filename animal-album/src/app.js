// 모든 모듈(api, Content, TabBar)를 관리하는 파일

import TabBar from './components/TabBar.js';
import Content from './components/Content.js';

export default function App($app) {
    const tabBar = new TabBar();
    const content = new Content();
}