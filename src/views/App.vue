<template>
  <div class="app-color">
    <uyu-table></uyu-table>
  </div>
</template>

<script>
import UyuTable from "../components/UyuTable";

export default {
  name: `App`,
  components: {UyuTable},
}
</script>

<style lang="scss">
.app-color{
  color: darkgreen;
}
</style>
