<template>
  <div>
    <v-card color="grey lighten-3" class="my-6 py-5 py-lg-2 px-8 px-lg-0">
      <h3 class="text-center my-4 "><b>Búsqueda por:</b></h3>
      <div class="d-flex  flex-column flex-lg-row justify-space-around">
        <text-field class="mb-5 mt-lg-0" :label="'N° DE EXPEDIENTE'" v-model="nro_expediente"/>
        <autocomplete-field id="descripcion" :label="'AREA ORIGEN'" :data="get_areas_filtros" v-model="area"
                            nombre="descripcion"/>
        <autocomplete-field id="descripcion" :label="'TRÁMITE'" :data="get_motivos" v-model="motivo"
                            nombre="descripcion"/>
        <text-field :label="'INICIADOR, FECHA , FOJAS'" v-model="search"/>
      </div>
    </v-card>

      <v-data-table
          :page.sync="page"
          hide-default-footer
          :search="search"
          :headers="headers"
          :items="data"
          :items-per-page="5"
          disable-sort
          mobile-breakpoint="300"
          class="elevation-1 mytable"
          loading-text="Cargando expedientes. Por favor, espere."
          :loading="loading"
          no-data-text="No tienes Expedientes"
          @page-count="pageCount = $event"
      >

        <template v-slot:item.actions="{ item }">
          <router-link :to="{ path: `/ver-historiales`, query: { nroexpediente: item.nro_expediente }}" >
            <v-icon style="color:rgb(250, 205, 137)" x-large>mdi-arrow-right-bold</v-icon>
          </router-link>
        </template>

      </v-data-table>

      <div v-if="pageCount > 0" class="text-center pt-2">
        <v-pagination
            v-model="page"
            :length="pageCount"
            :total-visible="7"
            color="amber accent-4 pb-2"
        ></v-pagination>
      </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

import TextField from "../TextField";
import AutocompleteField from "../AutocompleteField";

export default {

  components: {TextField,AutocompleteField},
  props: {
    data: Array,
    loading: {type: Boolean, default: false},
  },

  data () {
    return {
      page: 1,
      pageCount: 0,
      selected:[],
      search: '',
      showCaratula: false,
      datosCaratula: {},
      nro_expediente: '',
      motivo:'',
      area:'',
      headers: [
        {text: 'N° de Expediente', value: 'nro_expediente',filter: this.nroExpedienteFilter},
        {text: 'Extracto', value: 'extracto', width: "33%"},
        {text: 'Área Actual', value: 'area_actual', filter: this.areaActualFilter},
        {text: 'Creación', value: 'fecha_creacion',align: 'center'},
        {text: 'Trámite', value: 'tramite', widh: "5%", filter:this.motivoFilter},
        {text: 'Fojas', value: 'fojas', align: 'center'},
        {text: 'Historial', value: 'actions', align: 'center', sortable: false},
        {class: "display-4"},
      ],
    }
  },

  computed: {
    ... mapGetters(['get_todos_expedientes', 'get_motivos','get_areas_filtros']),
  },

  mounted() {
    this.index_motivo();
    this.index_area();
  },

  methods: {
    ...mapActions(['historial_expediente', 'index_motivo', 'index_area']),

    nroExpedienteFilter(value) {
      if (!this.nro_expediente) {return true;}
      return value.toLowerCase().includes(this.nro_expediente.toLowerCase());
    },

    motivoFilter(value) {
      if (!this.motivo) {return true;}
      return value === this.motivo;
    },

    areaActualFilter(value) {
      if (!this.area) {return true;}
      return value === this.area;
    },
  }
}
</script>

<style>
.v-data-table > .v-data-table__wrapper > table > thead > tr > th > span {
  font-size: 19px !important;
}

.mytable thead {
  background-color: #facd89 !important;
  font-family: "Montserrat-Regular",serif !important;
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  font-family: "Montserrat-Regular",serif !important;
  font-size: 17px !important;
  padding: 12px !important;
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover{
  background-color: #FAE3BF !important;
}

.color_pagination{
  color: #FACD89;
}


</style>