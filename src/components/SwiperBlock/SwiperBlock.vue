<template>
 <div class="SwiperBlock">

    <swiper :navigation="false"
            :modules="modules"
            :spaceBetween="0"
            :centeredSlides="true"
            :speed="600"
            :parallax="true"
            :autoplay="{
              delay: 5000,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
            class="mySwiper"
    >

      <div
          slot="container-start"
          class="parallax-bg"

          data-swiper-parallax="-23%"
        ></div>

<!--      <swiper-slide>Slide 11111</swiper-slide>-->
<!--      <swiper-slide>Slide 2</swiper-slide>-->
<!--      <swiper-slide>Slide 3</swiper-slide>-->
<!--      <swiper-slide>Slide 4</swiper-slide>-->
<!--      <swiper-slide>Slide 5</swiper-slide>-->
<!--      <swiper-slide>Slide 6</swiper-slide>-->
<!--      <swiper-slide>Slide 7</swiper-slide>-->
<!--      <swiper-slide>Slide 8</swiper-slide>-->
<!--      <swiper-slide>Slide 9</swiper-slide>-->

      <swiper-slide>
      <div class="title" data-swiper-parallax="-300">Slide 1</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div> </swiper-slide
    ><swiper-slide>
      <div class="title" data-swiper-parallax="-300">Slide 2</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div> </swiper-slide
    ><swiper-slide>
      <div class="title" data-swiper-parallax="-300">Slide 3</div>
      <div class="subtitle" data-swiper-parallax="-200">Subtitle</div>
      <div class="text" data-swiper-parallax="-100">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
          laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
          Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
          Aliquam hendrerit lorem at elit facilisis rutrum. Ut at ullamcorper
          velit. Nulla ligula nisi, imperdiet ut lacinia nec, tincidunt ut
          libero. Aenean feugiat non eros quis feugiat.
        </p>
      </div>
    </swiper-slide>

    </swiper>

 </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Parallax, Pagination, Navigation } from 'swiper/modules';


 export default {
   name: "SwiperBlock",
   data() {
     return {
       modules: [Autoplay,Parallax, Pagination,Navigation],
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

//.swiper-slide {
//  display: flex;
//  align-items: center;
//  justify-content: center;
//  height: 500px;
//  //background: red;
//}

.swiper {
  width: 100%;
  height: 100%;
  animation: move_background_colors 25s linear infinite;
  background: linear-gradient(149deg, #90e0ef, #ECEDED 62%);
  //background: linear-gradient(149deg, rgba(24,187,156,0.7) 0%);
}

@keyframes move_background_colors {
   0% {
        background-position: 80% 0%;
    }
    50% {
        background-position: 20% 100%;
    }
    100% {
        background-position: 80% 0%;
    }
}

.swiper-slide {
  font-size: 18px;
  color: #fff;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 40px 60px;
}

.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  -webkit-background-size: cover;
  background-size: cover;
  background-position: center;
  //background-image: url("/Users/roman/Documents/MeleshkoGit/molo/src/assets/lampa.jpg");
}

.swiper-slide .title {
  font-size: 41px;
  font-weight: 300;
}

.swiper-slide .subtitle {
  font-size: 21px;
}

.swiper-slide .text {
  font-size: 14px;
  max-width: 400px;
  line-height: 1.3;
}

</style>
