<template>
  <div v-if="$vuetify.breakpoint.xsOnly" >
    <AppBarMobile/>
    <BottomNavigation/>
  </div>
</template>

<script>
import AppBarMobile from "./AppBarMobile";
import BottomNavigation from "./BottomNavigation";

export default {
  name: 'App',
  components: {AppBarMobile,BottomNavigation}
}
</script>