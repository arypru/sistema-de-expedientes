<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-card color="#F7EDDF" class="pa-5">

      <v-row>
        <v-col cols="12" lg="6">
          <text-field-extracto
              :motivo-rules="[v => !!v || 'Por favor, complete el campo requerido']"
              texto-input="E/REND.CTAS.ACORDADA N° 32/2001. MES:"
              v-model="input1"/>
        </v-col>
        <v-col cols="12" lg="6">
          <text-field-extracto
              :motivo-rules="[v => !!v || 'Por favor, complete el campo requerido']"
              texto-input="AÑO:"
              v-model="input2"/>
        </v-col>
      </v-row>


      <v-row>
        <v-col cols="12" lg="6">
          <text-field-extracto
              :motivo-rules="[v => !!v || 'Por favor, complete el campo requerido']"
              texto-input="IMPORTE: $"
              v-model="input3"/>
        </v-col>
      </v-row>

      <item-final-extracto :iniciador="iniciador" :motivo="'ACORDADA 3201'"/>
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
import TextFieldExtracto from "../TextFieldExtracto";
import ItemFinalExtracto from "../ItemFinalExtracto";
import ButtonActionExtracto from "../ButtonActionExtracto";

export default {
  name: 'FondoPermanente',
  components: {TextFieldExtracto, ItemFinalExtracto,ButtonActionExtracto},
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
      input2: null,
      input3: null,
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