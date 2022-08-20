<template>
  <div>
    <h1 style="color:#393B44" class="Montserrat-Bold text-center">
      Área: {{area}}
    </h1>
  </div>
</template>

<script>
export default {
  name: 'TituloInicio',
  props: {
    area: String,
  }
}
</script>