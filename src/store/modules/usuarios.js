import axios from "axios";

const state = {
    user: {},
    logueado: false,
    loading: false,
    btn_login: false,

    newPass: false,
    verificarPass: false,
    error_passwordOld: '',
    error_passwordFail: '',
};

const getters = {
    get_user: state => state.user,
    get_btn_login: state => state.btn_login,

    get_restart: state => state.restart,
    get_errores: state => state.errores,

    getNewPass: state => state.newPass,
    getVerificarPass: state => state.verificarPass,
    getErrorPassOld: state => state.error_passwordOld,
    getErrorPassFail: state => state.error_passwordFail,
};

const actions = {

    getUsuario({commit}) {
        axios
            .get("json/user.json")
            .then(response => {
                commit('set_user', response.data.users[0]);
            })
    },

    logout({commit}) {
        commit('set_btn_login', true);
        axios.post(process.env.VUE_APP_API_URL + '/api/salir')
            .then(commit('clearUserData'))
            .catch(error => {
                console.log(error.response.data)
            })
    },

    verificarPass({commit}, newPass) {
        axios.post(process.env.VUE_APP_API_URL + '/api/validarPassword', newPass)
            .then(response => {
                if (response.status === 201) {
                    commit('set_error_passFail', response.data)
                } else {
                    commit('setVerificarPass', response.data)
                }
            })
            .catch(error => {
                commit('set_error_passOld', error.response.data.errors.password[0])
            })
    },

    nuevaContrasena({commit}, newPass) {
        axios.post(process.env.VUE_APP_API_URL + '/api/actualizaPassword', newPass)
            .then(() => {
                commit('setNewPass', true)
                commit('set_error_passFail', '')
            })
            .catch(error => {
                commit('set_error_passFail', error.response.data.errors.password[0])
            })
    },

    mis_enviados({commit}, expediente) {
        axios.post(process.env.VUE_APP_API_URL + '/api/mis-enviados', expediente)
            .then(response => {
                commit('set_expedientesEnviados', response.data),
                    commit('set_finalizadoEnviados', false)
            })
    }
};

const mutations = {
    clearUserData: () => {
        localStorage.removeItem('token')
        localStorage.removeItem('status')
        localStorage.removeItem('nro')
    },
    set_aceptado: (state, aceptado) => state.aceptado = aceptado,
    set_logueo: (state, logueado) => state.logueado = logueado,
    set_user: (state, user) => state.user = user,
    set_authenticated: (state, status) => state.status = status,
    set_btn_login: (state, btn_login) => state.btn_login = btn_login,
    set_restart: (state, restart) => state.restart = restart,
    set_errores: (state, errores) => state.errores = errores,
    set_error_logeo: (state, error_logeo) => state.error_logeo = error_logeo,
    set_error_cuil: (state, error_cuil) => state.error_cuil = error_cuil,
    set_error_contra: (state, error_contra) => state.error_contra = error_contra,
    setNewPass: (state, newPass) => state.newPass = newPass,
    set_error_passOld: (state, error_passwordOld) => state.error_passwordOld = error_passwordOld,
    set_error_passFail: (state, error_passwordFail) => state.error_passwordFail = error_passwordFail,
    setVerificarPass: (state, verificarPass) => state.verificarPass = verificarPass,
};

export default {
    namespace: true,
    state,
    getters,
    actions,
    mutations,
}