/**estado global **/
import Vue from 'vue'
import Vuex from 'vuex'
import expedientes from "./modules/expedientes";
import usuarios from "./modules/usuarios";
import nuevo_expediente from "./modules/nuevo_expediente";
import nuevo_pase from "./modules/nuevo_pase"
import iniciador from "./modules/iniciadores"
import filtros from "./modules/filtros";

Vue.use(Vuex)

export default new Vuex.Store({
    useCredentails: true,
    namespace: true,
    modules: {
        expedientes,
        usuarios,
        nuevo_expediente,
        nuevo_pase,
        iniciador,
        filtros
    },
})