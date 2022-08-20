import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Pendientes from '../views/Expedientes/Pendientes.vue'
import MisExpedientes from '../views/Expedientes/MisExpedientes.vue'
import NuevoPase from '../views/Expedientes/NuevoPase.vue'
import layout from '../layout/Layout'
import Usuario from "../views/Usuario/Usuario";
import MisEnviados from "../views/Usuario/HistorialEnviados";
import Expedientes from "../views/Expedientes/Expedientes";
import VerSeguimientos from "../views/Expedientes/VerSeguimientos";
import NuevoExpediente from "../views/Expedientes/NuevoExpediente";

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: '',
    component: layout,
    children: [{
        path: '/',
        name: 'Home',
        component: Home,
        meta: {title: 'Inicio'}
        // meta: {title: 'Inicio', middleware: [auth] }
      },
      {
        path: '/historial-enviados',
        name: 'MisEnviados',
        component: MisEnviados,
        meta: { title: 'Historial Enviados'}
      },
      {
        path: '/nuevo-expediente',
        name: 'Nuevo Expediente',
        component: NuevoExpediente,
        meta: { title: 'Nuevo Expediente'}
      },
      {
        path: '/ver-historiales',
        name: 'Historial',
        component: VerSeguimientos,
        meta: { title: 'Seguimiento'},
        props: route => ({ query: route.query.nroexpediente })
        // props: true,
      },
      {
        path: '/expedientes-pendientes',
        name: 'Expedientes Pendientes',
        component: Pendientes,
        meta: { title: 'Pendientes'  }
      },
      {
        path: '/mis-expedientes',
        name: 'MisExpedientes',
        component: MisExpedientes,
        meta: { title: 'Mis Expedientes' }
      },
      {
        path: '/expedientes',
        name: 'Expedientes',
        component: Expedientes,
        meta: { title: 'Expedientes' }
      },
      {
        path: '/nuevo-pase',
        name: 'NuevoPase',
        component: NuevoPase,
        meta: { title: 'Nuevo Pase'},
        props: route => ({ query: route.query.nroexpediente })
      },
      {
        path: '/usuario',
        name: 'Usuario',
        component: Usuario,
        meta: { title: 'Usuario'}
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});


export default router
