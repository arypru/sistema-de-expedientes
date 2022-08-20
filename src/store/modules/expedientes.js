import axios from "axios";
import router from "../../router";

const state = {
    //Arrays
    todos_expedientes: [],
    expedientes: [],
    expediente: [],
    historial: [],
    expedientes_enviados: [],
    nro_expediente: 0,
};

const getters = {
    get_nro_expediente: state => state.nro_expediente,
    get_todos_expedientes: state => state.todos_expedientes,
    get_expedientes: state => state.expedientes,
    get_historial: state => state.historial,
    get_extracto: state => state.extracto,
    get_expediente: state => state.expediente,
    get_expedientes_enviados: state => state.expedientes_enviados,
}

const actions = {

    guardarExtracto ({ commit }, extracto) {
        commit('set_extracto',extracto)
    },

    generarNroExpediente({commit}) {
        let min = 1000000000;
        let max = 1000000000;

        min = Math.ceil(min);
        max = Math.floor(max);

        let nroExpediente = Math.floor(Math.random() * max + min);
        commit('set_nro_expediente', nroExpediente);
    },

    historial_expediente ({commit}, nro_expediente) {
        axios.get("json/historiales.json")
            .then(response => {
                var historiales = response.data.historiales.filter((historial) => historial.nro_expediente === nro_expediente );
                if(historiales.length === 0){
                    router.push('/');
                }else{
                    commit('set_historial', historiales);
                }

            })
    },

    buscarExpediente ({commit}, nro_expediente) {
        axios.get("json/expedientes.json")
            .then(response => {
                var expediente = response.data.expedientes.filter((expe) => expe.nro_expediente === nro_expediente);
                if(expediente.length === 0){
                    router.push('/');
                }else{
                    commit('set_expediente',expediente[0]);
                }
            })
    },

    todosExpedientes ({commit}) {
        axios
            .get("json/expedientes.json")
            .then(response => {
                commit('set_todos_expedientes', response.data.expedientes);
            })
    },

    listadoExpedientes ({ commit }, estadoParam) {
        axios.get( "json/expedientes.json")
            .then(response => {
                var expedientesPendientes = response.data.expedientes.filter((expe) => expe.estado === estadoParam && expe.area_actual === "SECRETARIA GENERAL TECNICA");
                commit('set_expedientes',expedientesPendientes )
            })
    },

    listadoExpedientesEnviados ({ commit }) {
        axios.get( "json/historial_enviados.json")
            .then(response => {
                commit('set_expedientes_enviados',response.data.expedientes_enviados )
            })
    },


}

const mutations = {
    set_extracto: (state, extracto) => state.extracto = extracto,
    set_todos_expedientes: (state, todos_expedientes) => state.todos_expedientes = todos_expedientes,
    set_expedientes: (state, expedientes) => state.expedientes = expedientes,
    set_expediente: (state, expediente) => state.expediente = expediente,
    set_historial: (state,historial) => state.historial = historial,
    set_nro_expediente: (state,nro_expediente) => state.nro_expediente = nro_expediente,
    set_expedientes_enviados: (state,expedientes_enviados) => state.expedientes_enviados = expedientes_enviados,
}

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations
}
