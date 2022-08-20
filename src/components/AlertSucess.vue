<template>
  <v-alert
      v-if="condicion"
      icon="mdi-check"
      dense
      prominent
      dismissible
      text
      type="success"
      class="alert Montserrat-SemiBold mt-5 sizeAlert text-p"
      close-icon="mdi-close"
  >
    {{ texto }}
  </v-alert>
</template>

<script>
export default {

  props: {
    texto: {type: String, required: true, default: "Exitoso!"},
    condicion: {type: Boolean, required: true, default: false},
  }
}
</script>
