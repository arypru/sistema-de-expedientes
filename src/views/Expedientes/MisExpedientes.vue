<template>
  <div>
    <titulo texto="Realizar pase" icono="mdi-file-document" />
    <tabla-mis-expedientes class="mb-15 pb-15" :data="get_expedientes"/>
  </div>
</template>

<script>
import Titulo from "../../components/Titulo"
import {mapActions, mapGetters} from "vuex";
import TablaMisExpedientes from "../../components/Tablas/TablaMisExpedientes";
export default {
  name: 'MisExpedientes',
  components: {TablaMisExpedientes, Titulo},

  computed: mapGetters(['get_expedientes']),

  mounted() {
    this.listadoExpedientes("2");
  },

  methods: {
    ...mapActions(['listadoExpedientes']),
  },
}
</script>
