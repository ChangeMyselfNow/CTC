import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
    activeIndex: '1',
    activeObj: {
      home: '1',
      aboutus: '2',
      product: '3',
      research: '4',
      hezuo: '5',
    }
  },
  mutations: {
    changeActiveIndex(state, index){
      state.activeIndex = index;
    }
  }
})
export default store
