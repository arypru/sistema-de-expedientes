<template>
  <div class="d-flex flex-column flex-md-row my-4">
    <v-icon class="d-none d-md-flex" style="color: #393B44">mdi-circle-medium</v-icon>
    <h2 class="mr-1">{{descripcion}}</h2>
    <h2 class="Montserrat-Bold">{{ dato }}</h2>
  </div>
</template>

<script>
export default {
  props: {descripcion:{type:String, required: true}, dato: {type:String, required: true}}
}
</script>