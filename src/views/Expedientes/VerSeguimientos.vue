<template>
    <div class="mb-16 pb-10">

      <div class="d-flex flex-column flex-md-row text-center justify-center my-6">
        <h1 style="color: #393B44" class="inline Montserrat-Bold">Historial del Expediente N°</h1>
        <h1  class="ml-4 Montserrat-Bold inline">
          {{ this.get_historial[0].nro_expediente }}
        </h1>
      </div>
      <v-divider color="#393B44" class="my-4"></v-divider>


      <v-timeline
            reverse
            align-top
            :dense="$vuetify.breakpoint.mdAndDown"
        >
            <v-timeline-item
              v-for="item in get_historial"
              :key="item.id"
              color="amber darken-4"
              :icon="item.icon"
              :area="item.area"
              :asignado="item.asignado"
              :fecha="item.fecha"
              fill-dot
            >
              <v-card
                  :color="item.color"
              >
                <v-card color="amber lighten-4">
                  <div class="pl-4 pt-4 pb-3">
                    <v-row class="titulo black--text">
                      <v-col cols="12" lg="8" md="12">
                        <div class="pt-2">Asignado a: {{item.nombre_usuario}}</div>
                      </v-col>
                      <v-col cols="12" lg="4" md="12">
                        <div class="pt-2">Fecha: {{item.fecha}} </div>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>


                <v-card-text class="white text--primary">
                  <div class="Montserrat-Bold pb-2"> Área Origen: </div>
                  <p>{{item.area_origen}}</p>
                  <div class="Montserrat-Bold pb-2"> Derivado al Área: </div>
                  <p>{{item.area_destino}}</p>
                  <div class="Montserrat-Bold pb-2"> Motivo: </div>
                  <p>{{item.motivo}}</p>
                </v-card-text>

              </v-card>
            </v-timeline-item>
        </v-timeline>
    </div>
</template>
<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: 'VerSeguimientos',

  data () {
    return {
      refColores: false,
    }
    },

  props: {
    nro_expediente:{type: String}
  },

  computed: mapGetters(['get_historial']),

  mounted() {
    this.historial_expediente(this.$route.query.nroexpediente)
  },

  methods: {
    ...mapActions(['historial_expediente']),
  }
}
</script>
