<template>
  <v-dialog v-model="show" max-width="1200px" content-class="round" persistent>
    <v-card class="pa-6">

      <h1 style="color: #FB8C00" class="py-3 Montserrat-Bold text-center">
        Se guardo con éxito el expediente N° {{ dato.nro_expediente }} <v-icon style="color: #18F915" class="mb-3" x-large>mdi-check-bold</v-icon>
      </h1>
      <v-divider color="#393B44"></v-divider>

      <item-modal :dato="dato.area_derivado" descripcion="Se derivó al área:"/>
      <item-modal :dato="dato.iniciador_descripcion" descripcion="Iniciador:"/>
      <item-modal :dato="dato.iniciador_correo" descripcion="Email:"/>
      <item-modal :dato="dato.observacion" descripcion="Observación:"/>

      <div class="d-flex flex-row">
        <v-icon class="d-sm-none d-md-flex" style="color: #393B44">mdi-circle-medium</v-icon>
        <h2>Extracto:</h2>
      </div>
        <h2 class="Montserrat-Bold ml-lg-5">{{ dato.extracto }}</h2>

      <v-row justify="center" class="my-6">
        <Button @click="downloadPDF()" texto="Imprimir" class="pa-5 color Montserrat-Bold mr-8 d-sm-none d-md-flex" icono="mdi-printer"/>
        <button-secondary link="/" texto="Cerrar" class="pa-5 color Montserrat-Bold" icono="mdi-close-thick"/>
      </v-row>
    </v-card>

    <VueHtml2pdf pdf-content-width="800px" :preview-modal="true" pdf-format="a4" :filename="`Expediente` + dato.nro_expediente"
                 :manual-pagination="true" :enable-download="true" ref="DownloadComp">
      <section slot="pdf-content" class="margin">
        <div class="container1">
          <section>

            <div class="Montserrat-Bold sizeExpediente paddExp"> EXPEDIENTE Nº{{ dato.nro_expediente }}</div>

            <div class="direction pad">
              <div class="Montserrat-Bold sizeAll pl"> Iniciador:</div>
              <div class="Montserrat-Regular pl-3 sizeAll"> {{ dato.iniciador_descripcion }}</div>
            </div>

            <section>
              <v-row no-gutters>
                <v-col sm="7">
                  <div class="direction pad">
                    <div class="Montserrat-Bold sizeAll pl"> Email:</div>
                    <div class="Montserrat-Regular pl-3 sizeAll"> {{ dato.iniciador_correo }}</div>
                  </div>
                </v-col>
              </v-row>

              <v-row no-gutters class="py-5 direction pad">
                <v-col cols="12" sm="12" lg="12">
                  <div class="Montserrat-Bold sizeAll">Extracto:</div>
                </v-col>
                <v-col cols="11" sm="11" lg="12">
                  <div class="Montserrat-Regular sizeAll">{{ dato.extracto }}</div>
                </v-col>
              </v-row>

              <v-row no-gutters class="py-5 direction pad">
                <v-col cols="12" sm="12" lg="12">
                  <div class="Montserrat-Bold sizeAll">Observación:</div>
                </v-col>
                <v-col cols="11" sm="11" lg="12">
                  <div class="Montserrat-Regular sizeAll text-justify">{{ dato.observacion }}</div>
                </v-col>
              </v-row>
            </section>

          </section>
        </div>

      </section>

    </VueHtml2pdf>

  </v-dialog>
</template>
<script>
import Button from "../Button";
import ItemModal from "../ItemModal";
import VueHtml2pdf from 'vue-html2pdf';
import ButtonSecondary from "../ButtonSecondary";

export default {
  name: 'ModalNuevosExpedientes',
  components: {ButtonSecondary, Button, VueHtml2pdf,ItemModal},
  props: {
    show: {type: Boolean, default: false},
    dato: {type: Object, default: null},
  },

  methods: {

    downloadPDF() {
      this.$refs.DownloadComp.generatePdf()
    },

    close() {
      this.$emit("close")
    },
  }
}
</script>
<style>
.container1 {
  height: 650px;
  width: auto;
  display: flex;
  flex-direction: row;
}

.container2 {
  height: 350px;
  display: flex;
  flex-direction: row;
}

.flex-1 {
  width: 100px;
  background-color: blue;
}

.flex-2 {
  width: 100px;
  background-color: red;
}

hr.dashed {
  border: 1px dashed #E0E0E0;
}

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
  font-size: 30px !important;
  color: #FB8C00;
}

.sizeExpediente {
  font-size: 24px;
}

.sizeAll {
  font-size: 18px;
  text-align: justify;
}

.direction {
  display: flex;
  flex-direction: row;
}

.pad {
  padding: 4px 0px 4px 0px;
}

.paddExp {
  padding: 25px 0px 20px 0px;
}

@media (max-width: 420px) {
  .sizeButton {
    width: 10px;
    text-align: center;
  }

  .text-responsive {
    text-align: initial;
  }
}

@media (min-width: 600px) {
  .text-responsive {
    text-align: justify;
  }
}
</style>