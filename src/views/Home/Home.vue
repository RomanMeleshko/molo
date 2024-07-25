<template>
  <div id="Home">
    <div class="home">

      <div v-if="show" class="home_wrapper">

        <SwiperBlock></SwiperBlock>

        <div class="container-lg">

          <!-- Catalog product -->
          <BlockCards class="p-5">
            <template v-slot:title>

              <Title :componentClass="styleMainTitle">
                <template v-slot:name>
                  <h1 class="mainTitle">{{ nameTitle }}</h1>
                </template>
              </Title>

            </template>
            <template v-slot:sub-title>

              <Title class="pb-5" :componentClass="styleSubTitle">
                <template v-slot:name>
                  <h6 class="subTitle">{{ nameSubTitle }}</h6>
                </template>
              </Title>

            </template>
            <template v-slot:cards>

              <div class="row">
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" v-for="item in catalogCards" :key="item.id">

                  <Card>
                    <template v-slot:card-title>

                        <Title>
                          <template v-slot:name>
                            <h5 class="mainTitle m-0">{{ item.title }}</h5>
                          </template>
                        </Title>

                    </template>
                    <template v-slot:card-img>

                       <img :src="item.img">

                    </template>
                  </Card>

                </div>
              </div>

            </template>
          </BlockCards>


          <!--  Hit Sale    -->
          <BlockCards class="p-5" :dataCard="catalogCards">
            <template v-slot:title>

              <Title :componentClass="styleMainTitle">
                <template v-slot:name>
                  <h1 class="mainTitle">{{ nameBestSellers }}</h1>
                </template>
              </Title>

            </template>
            <template v-slot:sub-title>

               <Title class="pb-5" :componentClass="styleSubTitle">
                <template v-slot:name>
                  <h6 class="subTitle">{{ nameSubTitle }}</h6>
                </template>
              </Title>

            </template>
            <template v-slot:cards>

              <div class="row">
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" v-for="item in bestSellers" :key="item.id">

                  <Card>
                    <template v-slot:card-title>

                        <Title>
                          <template v-slot:name>
                            <h5 class="mainTitle m-0">{{ item.title }}</h5>
                          </template>
                        </Title>

                    </template>
                    <template v-slot:card-img>

                       <img :src="item.img">

                    </template>
                     <template v-slot:card-info-top>

                       <span class="top-sellers">{{ item.hotSale }}</span>

                    </template>
                    <template v-slot:card-name>

                      <p class="card-name">
                        {{ item.name }}
                      </p>

                    </template>
                    <template v-slot:card-price>

                      <p class="card-price">
                        <span>{{ item.price }}</span>&nbsp;
                        <span><font-awesome-icon icon="fa-hryvnia" /></span>
                      </p>

                    </template>
                    <template v-slot:card-button>

                      <button>
                        {{ item.button }}
                      </button>

                    </template>
                  </Card>

                </div>
              </div>

            </template>
          </BlockCards>


          <!--   Our new proposition       -->
          <BlockCards class="p-5" :dataCard="catalogCards">
            <template v-slot:title>

              <Title :componentClass="styleMainTitle">
                <template v-slot:name>
                  <h1 class="mainTitle">{{ nameNewProposition }}</h1>
                </template>
              </Title>

            </template>
            <template v-slot:sub-title>

               <Title class="pb-5" :componentClass="styleSubTitle">
                <template v-slot:name>
                  <h6 class="subTitle">{{ nameSubNewProposition }}</h6>
                </template>
              </Title>

            </template>
            <template v-slot:cards>

              <div class="row">
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4" v-for="item in ourNewProposition" :key="item.id">

                  <Card>
                    <template v-slot:card-title>

                        <Title class="card-title">
                          <template v-slot:name>
                            <h5 class="mainTitle m-0">{{ item.title }}</h5>
                          </template>
                        </Title>

                    </template>
                    <template v-slot:card-img>

                       <img :src="item.img">

                    </template>
                    <template v-slot:card-name>

                      <p class="card-name">
                        {{ item.name }}
                      </p>

                    </template>
                    <template v-slot:card-price>

                      <p class="card-price">
                        <span>{{ item.price }}</span>&nbsp;
                        <span><font-awesome-icon icon="fa-hryvnia" /></span>
                      </p>

                    </template>
                    <template v-slot:card-button>

                      <button>
                        {{ item.button }}
                      </button>

                    </template>
                  </Card>

                </div>
              </div>

            </template>
          </BlockCards>

        </div>

      </div>

    </div>

  </div>

</template>

<script lang="ts">

import ButtonTop from "components/Buttons/ButtonTop.vue";
import SwiperBlock from "components/SwiperBlock/SwiperBlock.vue";
import BlockCards from "components/Card/BlockCards.vue";
import Title from "components/Title/Title.vue";
import Card from "components/Card/Card.vue";


import AOS from 'aos';

import { defineComponent } from 'vue';

export default defineComponent({
  el: '#home',
  name: "Home",
  data() {
    return {
      show: false,
      nameTitle: "Каталог товарів",
      nameSubTitle: "Найпопулярніші товари у продажу",
      nameBestSellers: "Хіти продажу",
      nameNewProposition: "Наші новинки",
      nameSubNewProposition: "Новинки нашого сайту",
      styleMainTitle: "",
      styleSubTitle: "",
      catalogCards: [
        {
          id: 1,
          title: "Підставки",
          img: "/src/assets/rocket.png",

        },
        {
          id: 1,
          title: "Столики",
          img: "/src/assets/rocket.png",

        },
        {
          id: 1,
          title: "Шухлядки",
          img: "/src/assets/rocket.png",

        },
        {
          id: 1,
          title: "Столики",
          img: "/src/assets/rocket.png",

        },

      ],
      bestSellers: [
        {
          id: 1,
          title: "Підставки",
          name: "Stander Classic Expory",
          price: 699,
          hotSale: "Топ продажів",
          img: "/src/assets/rocket.png",
          button: "Замовити"

        },
        {
          id: 2,
          title: "Столики",
          name: "Smart Basic Light (4 в 1)",
          price: 489,
          hotSale: "Топ продажів",
          img: "/src/assets/rocket.png",
          button: "Замовити"
        },
        {
          id: 3,
          title: "Шухлядки",
          name: "STANDER Classic + Cup ",
          price: 299,
          hotSale: "Топ продажів",
          img: "/src/assets/rocket.png",
          button: "Замовити"
        },
        {
          id: 4,
          title: "Шухлядки",
          name: "STANDER Classic х 2",
          price: 1098,
          hotSale: "Топ продажів",
          img: "/src/assets/rocket.png",
          button: "Замовити"
        },
      ],
      ourNewProposition: [
        {
          id: 1,
          name: "Stander Classic Expory",
          price: 699,
          img: "/src/assets/rocket.png",
          button: "Замовити"

        },
        {
          id: 2,
          name: "Smart Basic Light (4 в 1)",
          price: 489,
          img: "/src/assets/rocket.png",
          button: "Замовити"
        },
        {
          id: 3,
          name: "STANDER Classic + Cup ",
          price: 299,
          img: "/src/assets/rocket.png",
          button: "Замовити"
        },
      ]
    }
  },

  mounted() {

    this.show = true;

     AOS.init();

  },


  components: {
    Animation,
    ButtonTop,
    SwiperBlock,
    BlockCards,
    Title,
    Card
  }
});
</script>

<style lang="scss">
@import "scss/variables.scss";

 // ======= ButtonTop scroll ========
 .buttonTop {
   width: 90px;
   height: 90px;
   border-radius: 50%;
   position: absolute;
   right: 20px;
   margin-top: -50px;
   transition: 0.5s;
   outline: none;
   border: none;
 }

 .buttonTop:hover {
   transform: translate(0,-8px);
 }

 // Title component styles
 .mainTitle {
   font-weight: 600;
 }
 .subTitle {
   color: $sub-title;
 }

</style>
