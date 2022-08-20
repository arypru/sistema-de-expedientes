<template>
  <div>
    <h3 class="Montserrat-Bold text-center my-5">
     {{ texto }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'TituloInicio',
  props: {
    texto: String
  }
}
</script>