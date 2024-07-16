<template>
 <div class="SwiperBlock">

    <swiper :navigation="false" :modules="modules" class="mySwiper">
      <swiper-slide>Slide 11111</swiper-slide>
      <swiper-slide>Slide 2</swiper-slide>
      <swiper-slide>Slide 3</swiper-slide>
      <swiper-slide>Slide 4</swiper-slide>
      <swiper-slide>Slide 5</swiper-slide>
      <swiper-slide>Slide 6</swiper-slide>
      <swiper-slide>Slide 7</swiper-slide>
      <swiper-slide>Slide 8</swiper-slide>
      <swiper-slide>Slide 9</swiper-slide>
    </swiper>

 </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';


 export default {
   name: "SwiperBlock",
   data() {
     return {
       modules: [Navigation],
     }
   },
   components: {
    Swiper,
    SwiperSlide,
  }
 }
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  background: red;
}

</style>
