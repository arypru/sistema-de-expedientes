<template>
  <v-menu rounded="b-xl" min-width="20px" offset-y transition="scale-transition">
    <template v-slot:activator="{ on }">
      <v-hover v-slot="{ hover }">
        <v-btn
          class="pl-1"
          v-on="on"
          elevation="0"
          tile
          :color="hover ? '#393b44' : '#393b44'"
        >
          <h5 class="white--text px-2 prueba">{{ get_user.nombre_apellido }}</h5>
          <v-icon :class="hover ? 'amber--text text--lighten-3' : 'white--text'"
            >mdi-account-circle</v-icon
          >
          <v-icon :class="hover ? 'amber--text text--lighten-3' : 'white--text'"
            >mdi-chevron-down</v-icon>
        </v-btn>
      </v-hover>
    </template>

    <v-card color="#393b44">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle class="d-flex justify-end white--text text-h7">
            {{ get_user.area }}
          </v-list-item-subtitle>
          <v-list-item-subtitle class=" white--text d-flex justify-end">
            {{ get_user.cuil }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-menu>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  computed: mapGetters(['get_user']),

  methods: {
    ...mapActions({
      salir: 'logout',
    }),

    onLogout() {
      this.salir();
      this.$router.go(0);
    },
  },
};
</script>

<style scoped>
@media (max-width: 1263px) {
  h5{
    display: none;
  }
}
</style>