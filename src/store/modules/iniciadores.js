import axios from "axios";

const state = {
    iniciador: [],
    listado: [],
};

const getters = {
    iniciador: state => state.iniciador,
    get_listado: state => state.listado,

};

const actions = {
    listarIniciadores ({ commit })  {
        axios.get('json/iniciadores.json')
            .then(response => {
                commit('set_listado', response.data.iniciadores)
            })
    },
};

const mutations = {
    set_listado: (state, listado) => state.listado = listado,
};

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}