import { reactive } from 'vue';
import { createStore } from 'vuex';




const store = createStore({
    state: reactive({
        user: null
    }),
    mutations: {},
    actions: {},
    getters: {}
})


export default store;