<template>
  <div>
    <titulo texto="Nuevo Pase" icono="mdi-file-document" class="pb-5"/>
    <button-secondary texto="VOLVER A VER LOS EXPEDIENTES" icono="mdi-arrow-left-bold" link="/mis-expedientes"/>

    <v-form ref="form" v-model="valid" lazy-validation>
    <v-row class="mt-8">
      <v-col cols="12" lg="6" md="12">
        <autocomplete-field :motivoRules="[v => !!v || 'Por favor, seleccione un área a quién derivar el expediente']" textoInput="Area" :data="get_areas_filtros" item-value="id" nombre="descripcion"
                            v-model="area_destino"/>
      </v-col>
      <v-col cols="12" lg="6" md="12">
        <text-field :motivo-rules="fojasRules" textoInput="Fojas" v-model="fojas"/>
      </v-col>
    </v-row>

    <label-input texto="A afectos de:"/>
    <v-textarea :rules="[v => !!v || 'Por favor, seleccione un Iniciador']" v-model="observacion_pase" outlined name="textarea" color="amber accent-4"/>


    <v-row justify="center" class="mt-8">
      <Button @click="validate" :desactivado="!valid" class="mr-8" texto="Confirmar" icono="mdi-check"/>
      <button-secondary :desactivado="!valid" @click="revisar()" texto="Revisar" icono="mdi-eye"/>
    </v-row>

    <modal-detalle-expediente :dato="detallePase" :show="show_detalle" @close="close"/>
    </v-form>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <modal-detalle-expediente :dato="detallePase" :show="show_detalle" @close="close"/>
    <modal-exito-pase :dato="detallePase" :show="show_exito" @close="close"/>
  </div>

</template>
<script>
import {mapActions, mapGetters} from "vuex";

import LabelInput from "../../components/LabelInput";
import Titulo from "../../components/Titulo";
import Button from "../../components/Button";
import AutocompleteField from "../../components/AutocompleteField";
import ButtonSecondary from "../../components/ButtonSecondary";
import ModalExitoPase from "../../components/Modals/ModalExitoPase";
import TextField from "../../components/TextField";
import ModalDetalleExpediente from "../../components/Modals/ModalDetalleExpediente";

export default {
  name: "NuevoPase",
  components: {ModalExitoPase,Button, Titulo, LabelInput, TextField, AutocompleteField, ModalDetalleExpediente, ButtonSecondary},

  data() {
    return {
      show_exito:false,
      valid: true,
      overlay: false,
      show_detalle: false,
      detallePase: {},
      observacion_pase: null,
      fojas: null,
      area_destino: null,

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
        this.guardarPase()
      }, 2000)
    },
  },

  computed: {
    ...mapGetters(['get_user', 'get_areas_filtros', 'get_expediente']),
  },

  mounted() {
    this.index_area();
    this.fechaActual();
    this.buscarExpediente(this.$route.query.nroexpediente);
  },

  methods: {
    ...mapActions(["index_area", 'buscarExpediente']),

    guardarPase() {
      this.detallePase = {
        nro_expediente: this.get_expediente.nro_expediente,
        tramite: this.get_expediente.tramite,
        iniciador_nombre: this.get_expediente.iniciador_nombre,
        observacion: this.get_expediente.observacion,
        fecha: this.fechaActual(),
        agente: this.$store.getters.get_user.nombre_apellido,
        observacion_pase: this.observacion_pase,
        fojas: this.fojas,
        area_actual: this.get_expediente.area_actual,
        area_destino: this.area_destino,
      }
      this.show_exito = true
    },

    validate () {
      if (this.$refs.form.validate()) {
        this.overlay = !this.overlay
      }
    },

    fechaActual() {
      let date = new Date();
      return String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
    },

    close() {
      this.show_detalle = false
      this.show_exito = false
    },

    revisar() {
      this.detallePase = {
        nro_expediente: this.get_expediente.nro_expediente,
        tramite: this.get_expediente.tramite,
        iniciador_nombre: this.get_expediente.iniciador_nombre,
        observacion: this.get_expediente.observacion,
        fecha: this.fechaActual(),
        agente: this.$store.getters.get_user.nombre_apellido,
        observacion_pase: this.observacion_pase,
        fojas: this.fojas,
        area_origen: this.get_expediente.area_origen,
        area_destino: this.area_destino,
      }

      this.show_detalle = true
    },

    // storePas() {
    //   let formData = new FormData();
    //
    //   for (var i = 0; i < this.files.length; i++) {
    //     let file = this.files[i];
    //
    //     formData.append("archivo" + i + "", file);
    //   }
    //
    //   let cantidad = this.files.length.toString();
    //   formData.append("expediente_id", this.$store.getters.idExpedientePase);
    //   formData.append("fojas", this.pase.nro_fojas);
    //   formData.append("area_destino_id", this.areaSeleccionado.id);
    //   formData.append("observacion", this.pase.observacion);
    //   formData.append("archivos", null);
    //   formData.append("estado_expediente", 1);
    //   formData.append("archivos_length", cantidad);
    //
    //   this.storePase(formData);
    // },
  },
};
</script>
