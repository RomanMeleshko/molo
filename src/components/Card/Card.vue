<template>
 <div class="Card p-4">

   <div class="card-title">
       <slot name="card-title"></slot>
   </div>
   <div class="card-img">
       <slot name="card-info-top"></slot>
       <slot name="card-img"></slot>
   </div>
   <div class="card-info">
     <div class="card-name">
       <slot name="card-name"></slot>
     </div>
     <div class="card-price">
      <slot name="card-price"></slot>
     </div>
     <div class="card-button">
       <slot name="card-button"></slot>
     </div>
   </div>
 </div>
</template>

<script lang="ts">
import Title from "components/Title/Title.vue";

export default {
  name: "Card",
  data() {
    return {
    }
  },
  props: {
    dataCard: {
      type: Array,
      default: []
    }
  },
  components: {
    Title
  }

}
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

.Card{
  position: relative;
  border-radius: 8px;
  background: #e6e7e7;
  box-shadow: 0 20px 16px -16px $border;
}

// Setting if product ( card ) data-field have hotSale
.card-img {
  :slotted( .top-sellers ) {
    position: absolute;
    margin-top: 10px;
    background: #f4a261;
    border-radius: 7px;
    padding: 7px 12px;
    font-size: 13px;
  }
}

// Setting size image for the card
.card-img {
  :slotted( img ) {
    width: 100%;
    background-size: cover;
  }
}

:slotted( button ) {
  padding: 10px 20px;
  border: none;
  background: $black;
  color: $white;
  font-size: 13px;
  border-radius: 8px;
  cursor: pointer;
}
:slotted( button:hover ) {
  background: #767475;
}

</style>
