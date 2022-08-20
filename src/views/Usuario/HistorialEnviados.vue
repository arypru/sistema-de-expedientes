<template>
  <div>
    <titulo texto="Historial Enviados" icono="mdi-file-send"/>
    <tabla-mis-enviados :headers="headers" :data="get_expedientes_enviados" :loading="get_finalizado"/>
  </div>
</template>

<script>
import Titulo from "../../components/Titulo";
import TablaMisEnviados from "../../components/Tablas/TablaMisEnviados";
import {mapActions, mapGetters} from "vuex";

export default {
  components: {Titulo, TablaMisEnviados},
  data() {
    return {
      headers: [
        {text: 'N° de Expediente', value: 'nro_expediente'},
        {text: 'Extracto', value: 'extracto'},
        {text: 'Tramite', value: 'tramite'},
        {text: 'A efectos de', value: 'observacion_pase'},
        {text: 'Fecha de Envio', value: 'fecha_envio'},
        {text: 'Área Destino', value: 'area_destino'},
        {text: 'Usuario', value: 'nombre_usuario'},
      ],
    }
  },

  computed: mapGetters(['get_expedientes_enviados']),

  mounted() {
    this.listadoExpedientesEnviados();
  },

  methods: {
    ...mapActions(['listadoExpedientesEnviados']),
  },
}
</script>