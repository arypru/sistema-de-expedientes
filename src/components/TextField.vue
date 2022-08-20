<template>
  <div>
    <label-input :texto="textoInput"/>
    <v-text-field
        :rules="motivoRules"
        :value="valor"
        :label="label"
        color="amber accent-4"
        v-model="inputVal"
        outlined
        :type="tipo"
        :prepend-inner-icon="icon"
    ></v-text-field>
  </div>

</template>

<script>
import LabelInput from "./LabelInput";
export default {
  components:{LabelInput},

  props: {
    tipo: {type: String, required: false},
    icon: {type: String, required: false},
    textoInput: {type: String, required: false},
    label: {type: String, required: false},
    valor: {type: String, required:false},
    motivoRules: {type: Array, required: false}
  },

  data() {
    return {inputVal: this.value}
  },

  watch: {
    inputVal(val) {
      this.$emit('input', val);
    },
  },
}
</script>

<style>
.v-text-field{
  font-size: 21px !important;
}

</style>
