<template>
 <div id="Footer" class="p-3 p-md-5">

   <div class="row">
     <div class="col-xl col-lg-3 col-md-3 col-sm-12 p-4 p-sm-3 p-md-2 d-flex justify-content-center align-items-center">
       <slot name="footer-banner"></slot>
     </div>
     <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12">

       <div class="row justify-content-end">
         <div class="col-lg-5 col-md col-sm-12 text-center text-sm-center text-lg-start d-flex justify-content-xl-end justify-content-lg-center justify-content-md-end justify-content-sm-center justify-content-center align-items-center">
            <slot name="footer-place"></slot>
         </div>
         <div class="col-lg-3 col-md-3 col-sm-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-lg-center justify-content-sm-center justify-content-center align-items-center">
           <slot name="footer-callback"></slot>
         </div>
         <div class="col-lg-2 col-md-3 col-sm-12 d-flex justify-content-xl-end justify-content-lg-end justify-content-md-end justify-content-lg-center justify-content-sm-center justify-content-center align-items-center">
           <slot name="footer-call"></slot>
         </div>
       </div>

     </div>
   </div>
   <div class="row">
     <div class="col">
       <hr>
       <div class="row justify-content-between">
         <div class="col-md-6 col-sm-7 text-start">
           <span>{{ infoText }}</span>
         </div>
         <div class="col-md-4 col-sm-4 text-md-end text-sm-end">
           <span>{{ infoTextFooter }}</span>
         </div>
       </div>
     </div>
   </div>

 </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Footer",
  data() {
    return {
      infoText: "@Розробленно з любовью до кліентів)",
      infoTextFooter: "Всі права захищенні",
      textTooltip: "My logo!)"
    }
  },
})
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

#Footer {
  background: $card-bg;
}

:slotted( li ) {
  padding: 5px;
  color: $color-text-footer;
  font-size: clamp(14px, 2vw, 16px);
}

span {
  color: $color-text-footer;
  font-size: clamp(14px, 2vw, 16px);
}

:slotted( li:hover ) {
  color: $black;
}

</style>
