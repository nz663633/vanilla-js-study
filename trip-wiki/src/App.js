// components
import Header from "./components/Header.js";
import RegionList from "./components/RegionList.js";
import CityList from "./components/CityList.js";
import CityDetail from "./components/CityDetail.js";

// API
import { request } from "./components/api.js";

export default function App($app) {
    this.state = {
        startIdx: 0,
        sortBy: '',
        searchWord: '',
        region: '',
        cities: '',
    };

    const header = new Header({
        $app,
        initialState: { sortBy: this.state.sortBy, searchWord: this.state.searchWord },
        handleSortChange: async (sortBy) => {
            const pageUrl = `/${this.state.region}?sort=${sortBy}`;
            history.pushState(
                null,
                null,
                this.state.searchWord ? pageUrl + `$search=${this.state.searchWord}` : pageUrl
            );
            const cities = await request(0, this.state.region, sortBy, this.state.searchWord);
            this.setState({
                ...this.state,
                startIdx: 0,
                sortBy: sortBy,
                cities: cities
            })
        }
    });
    const regionList = new RegionList();
    const cityList = new CityList({
        $app, initialState: this.state.cities,
        handleLoadMore: async () => { // '더보기'라는 버튼을 눌렀을 때 실행되는 함수
            const newStartIdx = this.state.startIdx + 40;
            const newCities = await request(newStartIdx, this.state.region, this.state.sortBy, this.state.searchWord);
            this.setState({
                ...this.state,
                startIdx: newStartIdx,
                cities: {
                    cities: [...this.state.cities, ...newCities.cities],
                    isEnd: newCities.isEnd
                }
            })
        }
    });
    const cityDetail = new CityDetail();

    this.setState = (newState) => {
        this.state = newState;
        cityList.setState(this.state.cities);
    }

    const init = async () => {
        const cities = await request(this.state.startIdx, this.state.region, this.state.sortBy, this.state.searchWord);
        this.setState({
            ...this.state, // 현재 존재하는 state의 값 유지
            cities: cities
        });
    }

    init();
}