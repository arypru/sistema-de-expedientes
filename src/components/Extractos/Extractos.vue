<template>
  <div class="my-2">
    <div v-if="tipo === '1'">
      <label-input texto="Extractos *"/>
      <fondo-permanente :iniciador="iniciador" :motivo="motivo"/>
    </div>

    <div v-if="tipo === '2'">
      <label-input texto="Extractos *"/>
      <subsidio :iniciador="iniciador" :motivo="motivo"/>
    </div>

    <div  v-if="tipo === '3'">
      <label-input texto="Extractos *"/>
      <aporte-no-reintegrable :iniciador="iniciador" :motivo="motivo"/>
    </div>

    <div v-if="tipo === '4'" >
      <label-input texto="Extractos *"/>
      <acordada3201 :iniciador="iniciador" :motivo="motivo"/>
    </div>

    <div v-if="tipo === '5'" >
      <label-input texto="Extractos *"/>
      <notas />
    </div>

    <div v-if="tipo === '6'" >
      <label-input texto="Extractos *"/>
      <requerimiento :iniciador="iniciador" :motivo="motivo"/>
    </div>

    <div v-if="tipo === '7'" >
      <label-input texto="Extractos *"/>
      <extracto-general :iniciador="iniciador" :motivo="motivo"/>
    </div>

  </div>
</template>

<script>
import LabelInput from "../LabelInput";
import FondoPermanente from "./FondoPermanente";
import Subsidio from "./Subsidio";
import AporteNoReintegrable from "./AporteNoReintegrable.vue";
import Acordada3201 from './Acordada-32-01.vue';
import Notas from './Notas.vue';
import Requerimiento from './Requerimiento.vue';
import ExtractoGeneral from "./ExtractoGeneral";
import {mapGetters} from "vuex";

export default {
  name: 'Extractos',

  props: {
    tipo: {type: String, required: true, default: "-"},
    iniciador_id: {type: String, required: true, default: "-"},
  },

  components: {LabelInput, FondoPermanente, Subsidio, AporteNoReintegrable, Acordada3201, Notas, Requerimiento, ExtractoGeneral},

  computed: {
    ... mapGetters(['get_listado','get_motivos']),

    iniciador: function () {
      return  this.get_listado.find( item => item.id === this.iniciador_id)
    },

    motivo: function () {
      return  this.get_motivos.find( item => item.id === this.tipo)
    },
  },
}
</script>