<template>
  <div class="d-flex flex-column flex-md-row">
    <h3 class="inline Montserrat-Regular mt-7 mr-2">
      {{ textoInput }}
    </h3>
    <v-text-field
        :rules="motivoRules"
        :label="label"
        color="amber accent-4"
        v-model="inputVal"
        :type="tipo"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  props: {
    tipo: {type: String, required: false},
    textoInput: {type: String, required: false},
    label: {type: String, required: false},
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
