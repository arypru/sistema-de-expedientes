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
        @page-count="pageCount = $event"
        :page.sync="page"
        hide-default-footer
        :headers="headers"
        :items="data"
        :search="search"
        :items-per-page="5"
        disable-sort
        mobile-breakpoint="300"
        class="elevation-1 mytable"
        loading-text="Cargando expedientes. Por favor, espere."
        :loading="loading"
        no-data-text="No tienes Expedientes"
    >
      <template v-slot:item.action1="{ item }">
        <v-btn @click="detalle(item)" fab small color="#FACD89" depressed>
          <v-icon>mdi-eye</v-icon>
        </v-btn>
      </template>

      <template v-slot:item.action2="{ item }">
        <router-link :to="{ path: `/nuevo-pase`, query: { nroexpediente: item.nro_expediente }}" >
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
    <modal-detalle-expediente :dato="datosSeleccionado" :show="show_modal" @close="closeModal"/>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import TextField from "../TextField";
import AutocompleteField from "../AutocompleteField";
import ModalDetalleExpediente from "../Modals/ModalDetalleExpediente";

export default {
  components: {TextField, AutocompleteField,ModalDetalleExpediente},

  props: {
    data: Array,
    loading: {type: Boolean, default: false},
  },

  data() {
    return {
      headers: [
        {text: 'N°Expediente', value: 'nro_expediente', filter: this.nroExpedienteFilter},
        {text: 'Extracto', value: 'extracto'},
        {text: 'Área Origen', value: 'area_origen', filter: this.areaActualFilter},
        {text: 'Trámite', value: 'tramite', widh: "5%", filter: this.motivoFilter},
        {text: 'Creación', value: 'fecha_creacion'},
        {text: 'Fojas', value: 'fojas'},
        {text: 'Detalle', value: 'action1', sortable: false},
        {text: 'Realizar Pase', value: 'action2', sortable: false},
        {class: "display-4"},
      ],

      //paginacion
      page: 1,
      pageCount: 0,

      //filtros
      nro_expediente: '',
      motivo: '',
      area: '',

      disabledCount: 0,
      selected: [],
      singleSelect: false,
      datosSeleccionado: {},
      show_modal: false,
      search: "",
    };
  },

  computed: {
    ...mapGetters(['get_motivos', 'get_areas_filtros']),
  },

  mounted() {
    this.index_motivo();
    this.index_area();
  },

  methods: {
    ...mapActions([ 'index_motivo', 'index_area']),

    nroExpedienteFilter(value) {
      if (!this.nro_expediente) {return true;}
      return value.toLowerCase().includes(this.nro_expediente.toLowerCase());
    },

    motivoFilter(value) {
      if (!this.motivo) {return true;}
      return value === this.motivo;
    },

    detalle(item) {
      this.datosSeleccionado = item
      this.show_modal = true;
    },

    closeModal() {
      this.show_modal = false;
    }
  },
};
</script>

<style>
.v-data-table > .v-data-table__wrapper > table > thead > tr > th > span {
  font-size: 19px !important;
}

.mytable thead {
  background-color: #facd89 !important;
  font-family: "Montserrat-Regular", serif !important;
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  font-family: "Montserrat-Regular", serif !important;
  font-size: 17px !important;
  padding: 12px !important;
}

.v-data-table > .v-data-table__wrapper > table > tbody > tr:hover {
  background-color: #fae3bf !important;
}

.v-application a {
  color: transparent !important;
}
</style>
