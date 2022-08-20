<template>
  <div class="d-flex flex-column flex-lg-row justify-center">
    <h4 class="pt-5 mr-10">INICIADOR: {{ iniciador.descripcion }}</h4>
    <h4 class="pt-5">{{ motivo }}</h4>
  </div>
</template>

<script>
export default {
  props: {
    iniciador: {
      type: Object,
      required: true,
    },

    motivo: {
      type: String,
      required: true,
      default: "-"
    }
  }
}
</script>