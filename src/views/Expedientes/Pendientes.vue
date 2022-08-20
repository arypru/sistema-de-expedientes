<template>
  <div>
    <titulo texto="Expedientes Pendientes" icono="mdi-bell"/>
    <tabla-pendientes class="mb-15 pb-15" :items="get_expedientes"/>
  </div>
</template>
<script>

import Titulo from "../../components/Titulo"
import TablaPendientes from "../../components/Tablas/TablaPendientes";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Pendientes',
  components: {TablaPendientes, Titulo},

  computed: mapGetters(['get_expedientes', 'get_aceptado', 'get_finalizado']),

  mounted() {
    this.listadoExpedientes("1");
  },

  methods: {
    ...mapActions(['listadoExpedientes']),
  }
}
</script>