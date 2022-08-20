<template>
  <div>
    <titulo-inicio texto="Expedientes" class="my-2"/>

      <v-hover v-slot="{ hover }">
        <v-btn
            rounded
            width="170"
            height="170"
            @click="abrirModalConsultar()"
            :class="hover ? 'orange accent-1' : 'grey lighten-3'"
            class="pa-8 mr-6 Montserrat-Bold grey--text text--darken-3"
        >
          <div class="d-flex flex-column justify-center">
            <v-icon size="80" class="py-2" :color="hover ? 'grey darken-1' : '#FDBC3F'">mdi-magnify</v-icon>

            <div class="sizeBig pt-4">
              Consultar
            </div>
          </div>
        </v-btn>
      </v-hover>

      <modal-consultar-nro-exp :show="showModalConsultarNroExp" @close="closeModalConsultarNroExp"/>

    </div>
</template>

<script>
import TituloInicio from "../TituloInicio";
import ModalConsultarNroExp from "../Modals/ModalConsultarNroExp";
import {mapGetters} from "vuex";

export default {
  components: {TituloInicio, ModalConsultarNroExp},

  data() {
    return {
      showModalConsultarNroExp: false,
    }
  },

  computed: mapGetters(['get_user']),

  methods: {
    abrirModalConsultar() {
      this.showModalConsultarNroExp = !this.showModalConsultarNroExp
    },

    closeModalConsultarNroExp() {
      this.showModalConsultarNroExp = false;
    },
  },


}
</script>