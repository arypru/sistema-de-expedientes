<template>
    <v-hover v-slot="{ hover }" >
      <v-btn
          rounded
          width="220"
          height="220"
          :class="hover ? 'orange accent-1' : 'grey lighten-3'"
          class="pa-16 justify-center Montserrat-Bold grey--text text--darken-3"
          :href="link"
          :target="target"
      >
        <div class="d-flex flex-column center">
          <div>
            <v-icon size="120" class="py-2" :color="hover ? 'white' : '#393B44'"> {{icon}} </v-icon>
          </div>
          <h3 :class="hover ? 'white--text' : '#393B44'" class="pt-4 Montserrat-Bold">
            {{texto}}
          </h3>
        </div>

      </v-btn>
    </v-hover>
</template>
<script>
export default {
  name: 'BotonHorizontal',
  props: {
    icon: String,
    texto: String,
    link: String,
    target: null,
  },
}
</script>

<style>
.center{
  text-align: center;
}

.sizeBig{
  font-size: 15px;
  text-align: center;
}
</style>