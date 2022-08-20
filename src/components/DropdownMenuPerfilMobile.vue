<template>
  <v-menu rounded offset-y>
    <template v-slot:activator="{ on }">
      <v-hover v-slot="{ hover }">
        <v-btn
          v-on="on"
          class="py-8"
          elevation="0"
          tile
          :color="hover ? '#393b44' : '#393b44'"
        >
          <v-icon :class="hover ? 'amber--text text--lighten-3' : 'white--text'"
            >mdi-account-circle</v-icon
          >
        </v-btn>
      </v-hover>
    </template>

    <v-card color="#393b44" class="py-3 ">
      <v-list-item>
        <v-list-item-content class="justify-center">
          <h4 class="px-2 my-4  mx-auto text-end white--text">
            PERFIL
          </h4>
          <v-divider color="white"></v-divider>
          <h4 class="px-2 my-4  mx-auto text-end white--text">
            {{ get_user.nombre_apellido }}
          </h4>
          <h4 class="px-2 py-1 my-4  mx-auto text-end white--text">
            {{ get_user.cuil }}
          </h4>
          <h4 class="px-2 my-4 mx-auto text-end white--text">
            {{ get_user.area }}
          </h4>

        </v-list-item-content>
      </v-list-item>

    </v-card>
  </v-menu>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: mapGetters(["get_user"]),

  methods: {
    ...mapActions({
      salir: "logout",
    }),

    onLogout() {
      this.salir();
      this.$router.go(0);
    },
  },
};
</script>
