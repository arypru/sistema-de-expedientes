<template>
  <div>
    <label-input :texto="textoInput"/>
    <v-autocomplete
        :rules="motivoRules"
        :label="label"
        class="Montserrat-Regular text-justify"
        color="amber accent-4"
        outlined
        :items="data"
        :item-value="id"
        :item-text="nombre"
        v-model="inputVal"
        item-color="amber accent-4"
    >
    </v-autocomplete>
  </div>

</template>

<script>
import LabelInput from "./LabelInput";

export default {
  components: {LabelInput},
  props: {
    textoInput: {type: String, required:false,},
    data: {type: Array, required: true},
    nombre: {type: String, required: false},
    label: {type: String, required: false},
    id: {type: String, required: false},
    motivoRules: {type: Array, required: false}
  },
  data() {
    return { inputVal: this.value }
  },
  watch: {
    inputVal(val) {
      this.$emit('input', val);
    }
  }
}
</script>