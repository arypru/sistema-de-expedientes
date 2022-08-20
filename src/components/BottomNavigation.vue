<template>
  <v-bottom-navigation background-color="#393b44" color="#FACD89" fixed height="70">
    <v-btn href="/" value="recent">
      <h4 class="pt-2 white--text"> INICIO </h4>
      <v-icon class="white--text">mdi-home-variant-outline</v-icon>
    </v-btn>

   <BottomSheets titulo="BANDEJAS" icono="mdi-inbox-full" :listDesplegable="bandejas"/>
   <BottomSheets titulo="EXPEDIENTES" icono="mdi-file-document-multiple-outline" :listDesplegable="expedientes"/>
  </v-bottom-navigation>
</template>

<script>
import BottomSheets from "./BottomSheets";
import {mapGetters} from "vuex";
export default {

  components: {BottomSheets},

  data: () => ({
    bandejas:[{titulo:'Pendientes', icono:'mdi-bell-outline', link:"/expedientes-pendientes"}, {titulo: 'Expedientes', icono:'mdi-file-document-multiple-outline', link:"/expedientes"},{titulo: 'Enviados', icono:'mdi-file-send-outline', link:"/historial-enviados"}],
    expedientes:[ {titulo: 'Nuevo', icono:'mdi-text-box-plus-outline', link:"/nuevo-expediente"},{titulo: 'Pase', icono:'mdi-file-send-outline', link:"/mis-expedientes"}],
  }),

  computed: mapGetters(['get_user']),
}
</script>