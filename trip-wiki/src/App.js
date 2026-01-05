// 전역 상태관리, 각 컴포넌트 연결
// components
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetail from "./components/CityDetail.js";

// API
import { request } from "./components/api.js";

export default function App($app) {
    const getSortBy = () => {
        if (window.location.search) {
            return window.location.search.split('sort=')[1].split('&')[0];
        }
        return 'total';
    };
    const getSearchWord = () => {
        if (window.location.search && window.location.search.includes('search=')) {
            return window.location.search.split('search=')[1];
        }
        return '';
    }

    // 전역 상태
    this.state = {
        startIdx: 0,
        sortBy: getSortBy(),
        searchWord: getSearchWord(),
        region: '',
        cities: '',
        currentPage: window.location.pathname,
    };

    // 필요할 때마다 Header 컴포넌트 다시 렌더링
    const renderHeader = () => {
        new Header({
            $app,
            initialState: { sortBy: this.state.sortBy, searchWord: this.state.searchWord },
            handleSortChange: async (sortBy) => { // 정렬 기준 변경 시 실행
                const pageUrl = `/${this.state.region}?sort=${sortBy}`;
                history.pushState( // URL 상태 변경
                    null,
                    null,
                    this.state.searchWord ? pageUrl + `$search=${this.state.searchWord}` : pageUrl
                );
                // 정렬 기준에 맞게 도시 데이터 재요청
                const cities = await request(0, this.state.region, sortBy, this.state.searchWord);
                this.setState({ // 변경된 상태 갱신
                    ...this.state,
                    startIdx: 0,
                    sortBy: sortBy,
                    cities: cities
                });
            },
            handleSearch: async (searchWord) => { // 검색어 입력 후 Enter 시 실행
                history.pushState(null, null, `/${this.state.region}?sort=${this.state.sortBy}&search=${searchWord}`);
                const cities = await request(0, this.state.region, this.state.sortBy, searchWord);
                this.setState({ // 변경된 상태 갱신
                    ...this.state,
                    startIdx: 0,
                    searchWord: searchWord,
                    cities: cities
                })
            }
        });
    }

    // 필요할 때마다 RegionList 컴포넌트 다시 렌더링
    const renderRegionList = () => {
        new RegionList({
            $app, initialState: this.state.region,
            handleRegion: async (region) => { // 원하는 지역 클릭 시 실행
                history.pushState(null, null, `/${region}?sort=total`);
                const cities = await request(0, region, 'total');
                this.setState({
                    ...this.state,
                    startIdx: 0,
                    sortBy: 'total',
                    region: region,
                    searchWord: '',
                    cities: cities,
                });
            }
        });
    }

    const renderCityList = () => {
        new CityList({
            $app, initialState: this.state.cities,
            handleLoadMore: async () => { // '더보기' 클릭 시 실행
                const newStartIdx = this.state.startIdx + 40;
                const newCities = await request(newStartIdx, this.state.region, this.state.sortBy, this.state.searchWord);
                this.setState({
                    ...this.state,
                    startIdx: newStartIdx,
                    cities: {
                        cities: [...this.state.cities.cities, ...newCities.cities],
                        isEnd: newCities.isEnd
                    }
                })
            }
        });
    }

    const renderCityDetail = () => {
        new CityDetail();
    }

    this.setState = (newState) => { // 새로운 상태 업데이트
        this.state = newState;
        render();
    };

    const render = () => {
        const path = this.state.currentPage;
        $app.innerHTML = '';
        if (path.startsWith('/city/')) { // 웹페이지의 URL이 상세페이지를 가리킬 경우
            renderHeader();
            renderCityDetail();
        } else {
            renderHeader();
            renderRegionList();
            renderCityList();
        }
    }


    window.addEventListener('popstate', async () => { // 뒤로 / 앞으로 가기 이벤트가 발생했을 때
        const urlPath = window.location.pathname;

        const prevRegion = urlPath.replace('/', '');
        const prevSortBy = getSortBy();
        const prevSearchWord = getSearchWord();
        const prevStartIdx = 0;
        const prevCities = await request(prevStartIdx, prevRegion, prevSortBy, prevSearchWord);

        this.setState({
            ...this.state,
            startIdx: prevStartIdx,
            sortBy: prevSortBy,
            region: prevRegion,
            searchWord: prevSearchWord,
            cities: prevCities,
            currentPage: urlPath
        });
    });

    const init = async () => { // 초기 데이터 로딩
        const path = this.state.currentPage;

        if (path.startsWith('/city/')) { // 상세페이지일 경우 render 함수 호출
            render();
        } else { // main 페이지일 경우
            const cities = await request(
                this.state.startIdx,
                this.state.region,
                this.state.sortBy,
                this.state.searchWord
            );
            this.setState({ // 새로운 상태 업데이트
                ...this.state,
                cities: cities
            })
        }
    }

    init();
}