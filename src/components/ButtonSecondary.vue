<template>
  <v-btn :disabled="desactivado" @click="funcion()" color="grey lighten-4" :href="link" class="px-12 py-6 justify-center black--text Montserrat-Bold" width="auto">
    {{ texto }}<v-icon class="ml-4">{{ icono }}</v-icon>
  </v-btn>
</template>

<script>
export default {

  props: {
    texto: {type: String, required: true, default: "-"},
    icono: {type: String, required: false,},
    link: {type: String, required: false},
    desactivado: {type: Boolean, required: false}
  },

  methods: {
    funcion() {
      this.$emit("click")
    },
  }

}
</script>
