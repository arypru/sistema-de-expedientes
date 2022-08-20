<template>
  <div>
        <NavbarMobile/>
        <Navbar/>
        <v-main class="mt-2 mb-8 mx-4 mx-sm-16">
          <v-container fluid align-center justify-center align-content-center>
            <router-view/>
          </v-container>
        </v-main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import NavbarMobile from "../components/NavbarMobile";

import {mapActions, mapGetters} from "vuex";

export default {
  components: {Navbar, NavbarMobile},

  data: () => ({
    value: 'recent',
    currentRoute: window.location.pathname
  }),

  computed: mapGetters(['get_user','get_btn_login','get_restart']),

  mounted() {
    this.getUsuario();
  },

  methods: {
    ...mapActions(['getUsuario']),
  }
}
</script>

<style>

.v-application {
  font-family: "Montserrat-Regular", serif;
  color: #393B44;

}

@font-face {
  font-family: Montserrat-Regular;
  src: url('/fonts/Montserrat-Regular.otf');
}

@font-face {
  font-family: Montserrat-Bold;
  src: url('/fonts/Montserrat-Bold.otf');
}

.Montserrat-Regular {
  font-family: "Montserrat-Regular",serif;
}

.Montserrat-Bold {
  font-family: "Montserrat-Bold",serif;
}
</style>
