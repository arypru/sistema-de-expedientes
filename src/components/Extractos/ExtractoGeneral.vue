<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card color="#F7EDDF" class="pa-5">

      <v-text-field
          :rules="[v => !!v || 'Por favor, complete el campo requerido']"
          :disabled="!isEditing"
          color="amber accent-4"
          v-model="input1"
          icon="mdi-pencil"
          placeholder="Ingrese detalle del extracto "
      ></v-text-field>

      <item-final-extracto :iniciador="iniciador" :motivo="'EXTRACTO GENERAL'"/>
      <button-action-extracto @click="validate" :valido="valid"/>
      <v-divider/>

      <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-overlay>

      <v-snackbar v-model="hasSaved" :timeout="2000" absolute centered class="ml-4 mb-2">
        El extracto se ha guardado
      </v-snackbar>

    </v-card>
  </v-form>
</template>

<script>
import {mapActions} from "vuex";
import ItemFinalExtracto from "../ItemFinalExtracto";
import ButtonActionExtracto from "../ButtonActionExtracto";

export default {
  name: 'FondoPermanente',
  components: {ItemFinalExtracto,ButtonActionExtracto},
  props: {
    iniciador: {
      value: "No ha seleccionado ningun Iniciador",
      type: Object
    },

    motivo: {
      value: "No ha seleccionado aún",
      type: Object
    }
  },

  data() {
    return {
      overlay: false,
      valid: true,
      hasSaved: false,
      isEditing: true,
      errors: [],
      input1: null,
    }
  },

  watch: {
    overlay(val) {
      val && setTimeout(() => {
        this.overlay = false
        this.cargarExtracto()
      }, 2000)
    },
  },

  methods: {

    validate() {
      if (this.$refs.form.validate()) {
        this.overlay = !this.overlay
      }
    },

    cargarExtracto() {
      this.isEditing = !this.isEditing
      this.hasSaved = true
      const extracto = "RENDICION DE CUENTAS N° " + this.input1 + ". FDO.PTE.GTOS " + this.input2 + ". DECRETO " + this.input3 + ". IMPORTE: $" + this.input4 + ". FONDO PERMANENTE" + ". INICIADOR: " + this.iniciador.nombre
      this.guardarExtracto(extracto)
    },

    ...mapActions([
      'guardarExtracto',
    ]),
  },

}
</script>

<style>
.tex {
  font-family: Montserrat-Regular;
  font-size: 18px;
}
</style>