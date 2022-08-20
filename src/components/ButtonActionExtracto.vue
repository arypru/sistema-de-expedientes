<template>
  <div>
    <v-card-actions class="justify-center">
      <v-btn
          :disabled="!valido"
          color="rgb(255, 255, 255, 0.2)"
          @click="funcion()"
          elevation="3"
          class="my-3 mr-4"
      >
        <v-icon class="pr-2"> mdi-check-bold</v-icon>
        Cargar extracto
      </v-btn>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  props: {valido: {type:Boolean, required: true} },

  methods: {
    funcion() {
      this.$emit("click")
    },
  }
}
</script>