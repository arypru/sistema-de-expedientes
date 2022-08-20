<template>
  <div v-if="$vuetify.breakpoint.mdOnly || $vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly" >
    <v-footer
        absolute
        height="80"
        color="#393B44">
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>