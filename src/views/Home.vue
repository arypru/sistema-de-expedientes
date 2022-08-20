<template>
  <div class="mt-6">
    <titulo-area-sub :area="get_user.area" class="mb-2"/>
    <h3 class="my-8 my-md-0 Montserrat-Bold text-center">Sistema de gestión de expedientes</h3>
    <v-divider color="#393B44" class="my-4"></v-divider>

    <v-card style="background: #ebdbc8"  rounded-xl justify="center" class="mx-xl-16 my-lg-16 d-flex flex-column flex-lg-row">
     <v-row align="center">
       <v-col cols="12" lg="4">
         <img class="ml-md-16 my-6 d-none d-md-flex" width="300" height="300" :src="'./img/expediente-home.png'"/>
       </v-col>
       <v-col  cols="12" lg="8">
         <bandejas/>
       </v-col>
     </v-row>
    </v-card>
  </div>
</template>

<script>
import TituloAreaSub from "../components/TituloAreaSub"
import Bandejas from "../components/HomeSections/Bandejas";

import {mapGetters} from "vuex";

export default {
  name: 'Home',
  components: {TituloAreaSub, Bandejas},

  computed: mapGetters(['get_user']),

}
</script>

<style>
@media only screen and (max-width: 600px) {
  .phone {
    text-align: center;
    padding: 20px 0;
  }
}
</style>