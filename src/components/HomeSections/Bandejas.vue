<template>
  <div>
    <div class="d-flex flex-row flex-wrap">
      <div v-for="boton in botones" :key="boton.texto">
        <ButtonBig class="mx-8 my-8" :texto="boton.texto" :link="boton.link" :icon="boton.icon"/>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonBig from "../ButtonBig";
export default {
  components: {ButtonBig},

  data() {
    return {
      botones: [
        {"texto": "Pendientes", "link": "/expedientes-pendientes", "icon": "mdi-clock"},
        {"texto": "Expedientes", "link": "/expedientes", "icon": "mdi-archive"},
        {"texto": "Enviados", "link": "/historial-enviados", "icon": "mdi-send"},
        {"texto": "Nuevo", "link": "/nuevo-expediente", "icon": "mdi-file-plus"},
        {"texto": "Realizar Pase", "link": "/mis-expedientes", "icon": "mdi-file-move"}]
    }
  }
}
</script>