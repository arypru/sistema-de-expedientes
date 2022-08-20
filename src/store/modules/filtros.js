import axios from "axios";

const state = {
    //Arrays
    motivos: [],
    areas_filtros: [],
};

const getters = {
    get_motivos: state => state.motivos,
    get_areas_filtros: state => state.areas_filtros
}

const actions = {
    index_motivo({commit}) {
        axios.get("json/tipo_expediente.json")
            .then(response => {
                commit('set_motivos', response.data.tipo_expedientes);
            })
    },

    index_area({commit}) {
        axios.get("json/areas.json")
            .then(response => {
                commit('set_areas_filtros', response.data.areas);
            })
    },
}

const mutations = {
    set_motivos: (state, motivos) => state.motivos = motivos,
    set_areas_filtros: (state, areas_filtros) => state.areas_filtros = areas_filtros
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}

