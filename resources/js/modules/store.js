export default {

    state: {},

    mutations: {
        
        setData( state, payload ) {
            Vue.set(state, payload.param, payload.data)
        }
    }
}
