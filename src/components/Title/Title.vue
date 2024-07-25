<template>
 <div class="Title">

    <div :class="componentClass">
      <slot name="name"></slot>
    </div>

 </div>
</template>

<script lang="ts">

export default {
  name: "Title",
  data() {
    return {
    }
  },
  props: {
    componentClass: {
      type: String,
      default: '',
    },
  },

}
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";


</style>
