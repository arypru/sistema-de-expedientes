<template>
  <v-dialog v-model="show" width="1200px" content-class="round" persistent>
    <v-card class="pa-8">
      <h1 style="color: #FB8C00" class="my-3 Montserrat-Bold text-center">
        Expediente N° {{ dato.nro_expediente }}
      </h1>
      <h2 class="my-8 font-italic">{{ dato.extracto }}</h2>
      <v-divider color="#393B44"></v-divider>

      <h2 class="Montserrat-Bold text-center my-5">Detalles</h2>
      <item-modal :dato="dato.tramite" descripcion="Motivo Tramite:"/>
      <item-modal :dato="dato.iniciador_nombre" descripcion="Iniciador:"/>
      <item-modal :dato="dato.observacion" descripcion="Observación:"/>
      <item-modal :dato="dato.area_origen" descripcion="Enviado desde:"/>
      <item-modal :dato="dato.observacion_pase" descripcion="A efectos de:"/>
      <item-modal :dato="dato.fojas" descripcion="Cantidad de Fojas:"/>

      <v-row justify="center" class="mt-8">
        <Button @click="close()" texto="Cerrar" class="pa-5 color Montserrat-Bold" icono="mdi-close-thick"/>
      </v-row>

    </v-card>
  </v-dialog>
</template>

<script>
import ItemModal from "../ItemModal";
import Button from "../Button";

export default {
  name: "ModalVerDetalleExp",
  components: {ItemModal,Button},

  props: {
    show: {type: Boolean, default: false},
    dato: {type: Object, required: true},
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>