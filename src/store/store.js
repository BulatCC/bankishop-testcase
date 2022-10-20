import { createStore } from 'vuex';
import { mockPictureData } from '../mocks/mocks';

const store = createStore({
    state: () => ({
        pictureData: [],
        queryString: ''
    }),
    mutations: {
        setPictureData(state, data) {
            state.pictureData = data;
        },
        setFilteredData(state, data) {
            state.filteredData = data;
        },
        setQueryString(state, query) {
            state.queryString = query;
        },
        updateCartValue(state, index) {
            state.pictureData[index].inCart = true;
        },
    },
    getters: {
        filteCards(state) {
            if (state.queryString) {
                return state.pictureData.filter(item => item.title.toLowerCase().includes(state.queryString));
            }
            return state.pictureData;
        },
    },
    actions: {
        getPictureData({ commit }) {
            commit('setPictureData', mockPictureData);
        }
    }
});

export { store };