<template>
  <div>
    <titulo texto="Expedientes" icono="mdi-text-box-multiple"/>
    <tabla-expedientes class="mb-15 pb-15"  :data="get_todos_expedientes"/>
  </div>
</template>
<script>
import Titulo from "../../components/Titulo"
import TablaExpedientes from "../../components/Tablas/TablaExpedientes";
import {mapActions,mapGetters} from "vuex";

export default {
  name: 'Expedientes',
  components: {TablaExpedientes, Titulo},
  data() {
    return {
      estado: 1,
      cargando:true,
    }
  },

  computed: mapGetters(['get_todos_expedientes']),

  mounted() {
    this.todosExpedientes();
  },

  methods: {
    ...mapActions(['todosExpedientes']),
  }
}
</script>