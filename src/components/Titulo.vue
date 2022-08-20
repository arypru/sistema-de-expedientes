<template>
  <div>
    <div class="d-flex flex-column flex-md-row text-center justify-center my-6">
      <h1 style="color: #393B44" class="inline Montserrat-Bold">{{ texto }}</h1>
      <h1 class="inline" v-if="!(fecha === '-')">
        {{ fecha }}
      </h1>
  </div>
    <v-divider color="#393B44" class="my-4"></v-divider>
  </div>
</template>

<script>
export default {
  name: 'Titulo',
  props: {
    texto: {type: String, required: true,},
    icono: {type: String, required: false,},
    fecha: {type: String, default: "-",}
  }
}
</script>