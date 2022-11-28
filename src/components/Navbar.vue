<template>
  <div v-if="$vuetify.breakpoint.smOnly ||$vuetify.breakpoint.mdOnly || $vuetify.breakpoint.lgOnly || $vuetify.breakpoint.xlOnly" >
    <div class="Montserrat-Bold" >
      <v-app-bar class="px-10" height="74" color="#393b44">
        <v-row no-gutters class="justify-space-around">

          <v-col cols="2" lg="2" md="1" align="start" align-self="center">

          </v-col>

          <v-col cols="8" lg="7" md="10" align="center" align-self="center">
            <DropdownMenu titulo="Bandejas" :data-item="bandejas"/>
            <DropdownMenu titulo="Expedientes" :data-item="expedientes"/>
          </v-col>

          <v-col cols="2" lg="2" md="1" align="end" align-self="center">
            <div class="d-flex flex-row">
              <h5 class="text-uppercase white--text px-2 mt-1">{{ get_user.nombre_apellido }}</h5>
              <v-icon class="white--text">mdi-account-circle</v-icon>
            </div>
          </v-col>
        </v-row>
      </v-app-bar>


    </div>
  </div>
</template>

<script>
import DropdownMenu from "./DropdownMenu";
import {mapGetters} from "vuex";

export default {
  name: 'Navbar',

  components: {DropdownMenu},

  data: () => ({
    bandejas:[ {titulo:'Pendientes', link:'/expedientes-pendientes'},{titulo: 'Expedientes', link:'/expedientes'},{titulo: 'Enviados',link:'/historial-enviados'}],
    expedientes:[ {titulo: 'Nuevo', link:'/nuevo-expediente'}, {titulo: 'Realizar pase', link:'/mis-expedientes'}],
  }),

  computed: mapGetters(['get_user']),

};

</script>
