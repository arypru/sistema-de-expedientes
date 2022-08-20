<template>
    <v-alert v-if="condicion" icon="mdi-information-outline" dense prominent dismissible text :type="tipo" class="text-p Montserrat-Regular" close-icon="mdi-close">
      {{ texto }}
    </v-alert>
</template>
<script>
export default {

  name: 'Alert',
  props:{
    texto: {type: String, required: true, default:"-"},
    tipo: { type: String, required: true, default: "warning"},
    condicion: {type: Boolean, default: false},
  }
}
</script>