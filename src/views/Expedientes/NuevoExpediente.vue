<template>
  <div class="mb-12">

    <v-form ref="form" v-model="valid" lazy-validation>

      <titulo :texto="'Nuevo Expediente'" :fecha="fechaActual()"/>

      <h1 style="color: #FB8C00" class="text-center"><span
          style="color: #393B44">Expediente N°   </span>{{ this.$store.getters.get_nro_expediente }}</h1>

      <h3 class="my-5" style="color: #FB8C00">(*) Campo Obligatorio</h3>

      <v-row>
        <v-col cols="12" sm="12" lg="6">
          <autocomplete-field :motivoRules="[v => !!v || 'Por favor, seleccione un Iniciador']" id="id" :texto-input="'Iniciador *'" :data="get_listado" nombre="descripcion"
                              v-model="expe.iniciador_id"/>
        </v-col>
        <v-col cols="12" sm="12" lg="6">
          <autocomplete-field :motivoRules="[v => !!v || 'Por favor, seleccione un motivo del Expediente']" id="id" :texto-input="'Motivo del Expediente *'" :data="get_motivos" nombre="descripcion"
                              v-model="expe.tipo_exp_id"/>
        </v-col>
      </v-row>

      <div v-if="!(expe.tipo_exp_id === null)">
        <Extractos v-model="expe.descripcion_extracto" :iniciador_id="expe.iniciador_id" :tipo="expe.tipo_exp_id"/>
      </div>

      <v-row class="mt-4">
        <v-col cols="12" sm="12" lg="6">
          <text-field :motivo-rules="fojasRules" :texto-input="'Cantidad de Fojas *'" tipo="number" v-model="expe.nro_fojas"/>
        </v-col>
        <v-col cols="12" sm="12" lg="6">

          <autocomplete-field :motivoRules="[v => !!v || 'Por favor, seleccione un área a quién derivar el expediente']" :texto-input="'Pase a *'" :data="this.$store.getters.get_areas_filtros"
                              nombre="descripcion" v-model="expe.area_id"/>
        </v-col>
      </v-row>

      <div class="mt-4">
        <label-input texto="Observaciones:"/>
        <v-textarea v-model="expe.observacion" outlined name="textarea" color="amber accent-4"/>
      </div>

      <v-row justify="center" class="py-16">
        <Button :desactivado="!valid" @click="validate()" texto="Confirmar" class="pa-5 color Montserrat-Bold" icono="mdi-check-bold"/>
      </v-row>

    </v-form>

    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <modal-nuevos-expedientes :show="showDetalle" :dato="expedienteModal" @close="cerrarModal"/>

  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Button from "../../components/Button";
import Titulo from "../../components/Titulo";
import LabelInput from "../../components/LabelInput";
import Extractos from "../../components/Extractos/Extractos";
import TextField from "../../components/TextField";
import AutocompleteField from "../../components/AutocompleteField";
import ModalNuevosExpedientes from "../../components/Modals/ModalNuevosExpedientes";

export default {
  name: "Home",
  components: {Button, Titulo, AutocompleteField, TextField, LabelInput, Extractos, ModalNuevosExpedientes},

  data() {
    return {
      valid: true,
      desactivado: true,
      cerrarModal: true,
      showDetalle: false,
      overlay: false,
      expedienteModal: {},
      expe: {
        iniciador_id: '',
        nro_fojas: 0,
        observacion: null,
        descripcion_extracto: null,
        area_id: null,
        tipo_expe_id: null,
      },


      fojasRules: [
      v => !!v || 'Por favor, especifique una cantidad de fojas',
      v => v > -1 || 'El valor no puede ser menor a 0',
      v => (v && v.length <= 3) || 'El numero de fojas no puede ser mayor a 3 digitos',
      ],

    }
  },

  watch: {
    overlay(val) {
      val && setTimeout(() => {
        this.overlay = false
        this.abrirModal()
      }, 2000)
    },
  },


  computed: mapGetters(['get_listado', 'get_motivos', 'get_nro_expediente', 'get_areas_filtros']),

  mounted() {
    this.listarIniciadores();
    this.index_motivo();
    this.index_area();
    this.generarNroExpediente();
  },

  methods: {
    ...mapActions(["listarIniciadores", 'index_motivo', 'index_area', 'generarNroExpediente']),

    validate () {
      if (this.$refs.form.validate()) {
        this.overlay = !this.overlay
      }
    },

    close() {
      this.showDetalle = false
    },

    fechaActual() {
      let date = new Date();
      return String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    },

    abrirModal() {
      let iniciadorSeleccionado = this.get_listado.find( item => item.id === this.expe.iniciador_id)
      let areaSeleccionado = this.get_areas_filtros.find( item => item.descripcion === this.expe.area_id)

      let expediente = {
        nro_expediente: this.$store.getters.get_nro_expediente,
        iniciador_descripcion: iniciadorSeleccionado.descripcion,
        area_derivado: areaSeleccionado.descripcion,
        iniciador_correo: iniciadorSeleccionado.email,
        extracto:this.$store.getters.get_extracto,
        observacion: this.expe.observacion
      }

      this.expedienteModal = expediente
      this.showDetalle = true
    },
  }
};
</script>
