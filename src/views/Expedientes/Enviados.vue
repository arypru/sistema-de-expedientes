<template>
  <div>
    <titulo texto="Recuperar" icono="mdi-arrow-u-left-top-bold" />
    <tabla-enviados
      :headers="headers"
      :data="this.get_expedientes"
      class="mb-15 pb-15"
    />
  </div>
</template>

<script>
import Titulo from "../../components/Titulo"
import TablaEnviados from "../../components/Tablas/TablaEnviados";
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'Enviados',
  components: {Titulo, TablaEnviados},
  data() {
    return {
      headers: [
        { text: 'Prioridad', value: 'prioridad' },
        { text: 'Nro. de Expediente', value: 'nro_expediente' },
        { text: 'Extracto', value: 'extracto' },
        { text: 'Fecha Creación', value: 'fecha_creacion' },
        { text: 'Área Destino', value: 'area_destino' },
        { text: 'Trámite', value: 'tramite' },
        { text: 'Cuerpo', value: 'cant_cuerpos' },
        { text: 'Fojas', value: 'fojas' },
        { text: 'Recuperar', value: 'action', align: 'center', sortable: false },
        {class: "display-4"},
      ],
    }
  },

  computed: mapGetters(['get_expedientes']),

  mounted() {
    this.listadoExpedientes("3");
  },

  methods: {
    ...mapActions(['listadoExpedientes']),
  },

}
</script>
<style>
.descripcion {
  font-family: Montserrat-Regular;
  font-size: 20px;
}
</style>
