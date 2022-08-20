<template>
  <v-dialog persistent v-model="show" max-width="1200px" content-class="round">

    <v-card class="pa-8">
      <h1 style="color: #FB8C00" class="my-3 Montserrat-Bold text-center">
        Se realizó con éxito el pase del expediente N° {{ dato.nro_expediente }}
      </h1>
      <h2 class="my-8 font-italic">{{ dato.extracto }}</h2>
      <v-divider color="#393B44"></v-divider>
      <h2 class="Montserrat-Bold text-center my-5">Detalles</h2>
      <item-modal :dato="dato.tramite" descripcion="Motivo Tramite:"/>
      <item-modal :dato="dato.iniciador_nombre" descripcion="Iniciador:"/>
      <item-modal :dato="dato.observacion" descripcion="Observación:"/>
      <item-modal :dato="dato.area_actual" descripcion="Enviado desde:"/>
      <item-modal :dato="dato.area_destino" descripcion="Derivado al área:"/>
      <item-modal :dato="dato.observacion_pase" descripcion="A efectos de:"/>
      <item-modal :dato="dato.fojas" descripcion="Cantidad de Fojas:"/>
      <item-modal :dato="dato.agente" descripcion="Agente que redacta el pase:"/>

      <v-row justify="center" class="mt-8">
        <Button type="submit" target="_blank" @click="downloadPDF()" texto="Imprimir" class="d-sm-none d-md-flex mr-8 pa-5 color Montserrat-Bold" icono="mdi-printer"/>
        <button-secondary link="/" texto="Cerrar" class="pa-5 color Montserrat-Bold" icono="mdi-close-thick"/>
      </v-row>
    </v-card>

    <VueHtml2pdf
      pdf-content-width="800px"
      :preview-modal="true"
      pdf-format="a4"
      :filename="`Expediente` + dato.nro_expediente"
      :manual-pagination="true"
      :enable-download="true"
      ref="DownloadComp"
    >
      <section slot="pdf-content" class="margin">

        <section>
          <div class="Montserrat-Bold sizeExpediente paddExp"> EXPEDIENTE Nº{{ dato.nro_expediente }}</div>
        </section>

        <section>
          <div class=" py-5 direction pad">
            <v-row no-gutters>
              <v-col sm="6">
                <div class="Montserrat-Bold sizeAll ">
                  Fojas:
                  <span class="Montserrat-Regular pl-3 sizeAll">
                    {{dato.fojas}}
                  </span>
                </div>
              </v-col>
            </v-row>
          </div>

          <div class="py-5 direction pad">
            <div class="Montserrat-Bold sizeAll pl">Derivado a:</div>
            <div class="Montserrat-Regular sizeAll">{{ dato.area_destino }}</div>
          </div>
          
          <div class="py-5 direction pad">
            <div class="Montserrat-Bold sizeAll pl">
              Agente que redacta el pase:
            </div>
            <div class="Montserrat-Regular pl-3 sizeAll">{{ dato.agente}}</div>
          </div>

          <v-row no-gutters class="py-5 direction pad">
            <v-col cols="12" sm="12" lg="12">
                <div class="Montserrat-Bold sizeAll pl">A efectos de:</div>
            </v-col>
            <v-col cols="12" sm="12" lg="12">
                <div class="Montserrat-Regular pl-3 sizeAll">{{ dato.observacion_pase }}</div>
            </v-col>
          </v-row>      
        </section>

      </section>
    </VueHtml2pdf>
  </v-dialog>
</template>
<script>
import Button from "../Button";
import ItemModal from "../ItemModal";
import VueHtml2pdf from "vue-html2pdf";
import ButtonSecondary from "../ButtonSecondary";

export default {
  name: "ModalExitoPase",

  components: {ButtonSecondary, Button, VueHtml2pdf, ItemModal},

  props: {
    show: Boolean,
    dato: Object,
  },

  methods: {
    downloadPDF() {
      this.$refs.DownloadComp.generatePdf();
    },

    close() {
      this.$emit("close");
    },
  },
};
</script>
<style>
.round {
  border-radius: 30px;
}

.sizeTM {
  font-size: 24px !important;
}

.sizeDM {
  font-size: 24px !important;
}

.margin {
  padding: 45px 45px 45px 45px;
}

.pl {
  padding: 0px 5px 0px 0px;
}

.tituloModal {
  font-size: 30px !important ;
  color: #fb8c00;
}

.sizeExpediente {
  font-size: 24px;
}

.sizeAll {
  font-size: 18px;
}

.direction {
  display: flex;
  flex-direction: row;
}
.pad {
  padding: 6px 0px 6px 0px;
}

.paddExp {
  padding: 25px 0px 20px 0px;
}
</style>
