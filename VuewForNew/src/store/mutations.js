const state={
    headShow:true,
    loadingShow:false    
};
const mutations={
    showHeader(state){
       state.headShow=true;
    },
    hideHeader(state){
        state.headShow=false;
    },
    showLoading(state){
        state.loadingShow=true;
    },
    hideLoading(state){
        state.loadingShow=false;
    }
};
const getters={
	headShow(state){
		return state.headShow;
    },
    loadingShow(state){
		return state.loadingShow;
    }
};

export default{
	state,
	mutations,
	getters
}