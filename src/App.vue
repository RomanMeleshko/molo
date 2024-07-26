<template>
  <div id="App">

    <div class="container-fluid p-0">

      <div class="app-layout">

        <header>

          <NavBar>
            <template v-slot:navbar-brand>

              <a class="navbar-brand ms-sm-3" href="#">
                <img class="logo" src="assets/logo-molo-ua.png" width="80" height="40" alt=""/>
              </a>

            </template>
            <template v-slot:navbar-items>

              <li v-for="item in items" :key="item.id" class="nav-item me-xl-2 me-lg-3 me-md-2 me-sm-2 px-1">
                <a class="nav-link align-items-center" :class="item.class" aria-current="page" :href="item.link">{{ item.name }}</a>
              </li>

            </template>
            <template v-slot:navbar-icons>

              <li class="navbar-icons" v-for="item in navIcon" :key="item.icon">
                <a :href="item.link">
                  <font-awesome-icon :icon="item.icon" />
                </a>
              </li>

            </template>
          </NavBar>

        </header>

        <main>

          <router-view></router-view>

        </main>

        <footer>

          <Footer>
            <template v-slot:footer-banner>

              <label class="banner">
                <img class="logo" src="assets/logo-molo-ua.png" width="120" height="60" alt=""/>
              </label>

            </template>
            <template v-slot:footer-place>

              <ul class="ps-0">
                <li class="footer_title" v-for="item in location" :key="item.id">{{ item.title }}</li>
              </ul>

            </template>
            <template v-slot:footer-callback>

              <ul class="ps-0">
                <li class="footer_title"  v-for="item in callback" :key="item.id">{{ item.title }}</li>
              </ul>

            </template>
            <template v-slot:footer-call>

              <ul class="ps-0">
                <li class="footer_title" v-for="item in aboutUs" :key="item.id">{{ item.title }}</li>
              </ul>

            </template>

          </Footer>

        </footer>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import AOS from 'aos';

import { defineComponent } from 'vue';

import Note from "models/interface/Note";
import Link from "models/interface/Link";

import NavBar from "components/NavBar/NavBar.vue";
import Footer from  "components/Footer/Footer.vue";
import ButtonTop from "components/Buttons/ButtonTop.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      items: [
        {
          id: 1,
          name: "Каталог",
          class: "active",
          link: "#home"
        } as Note,
        {
          id: 2,
          name: "Лампи",
          link: "#about"
        } as Note,
        {
          id: 3,
          name: "Підставки",
          link: "#contact"
        } as Note,
        {
          id: 3,
          name: "Набори",
          link: "#contact"
        } as Note,
        {
          id: 3,
          name: "Корпоративні",
          link: "#contact"
        } as Note,
        {
          id: 3,
          name: "Знижки",
          link: "#contact"
        } as Note
      ],
      location: [
        {
          id: 1,
          title: "Корпоративні подарунки",
        } as Note,
        {
          id: 2,
          title: "Доставка та оплата",
        } as Note
      ],
      callback: [
        {
          id: 1,
          title: "Співпраця",
        } as Note,
        {
          id: 1,
          title: "Контакти",
        } as Note
      ],
      aboutUs: [
        {
          id: 1,
          title: "Про нас",
        } as Note,
        {
          id: 2,
          title: "Оферта",
        } as Note,
      ],
    }
  },

  mounted() {
    AOS.init();
  },

  components: {
    NavBar,
    Footer,
    ButtonTop
  }
})


</script>

<style lang="scss">
@import "scss/app.scss";
@import "scss/variables.scss";

 // NavBar
 .logo {
   border-radius: 50%;
 }

 .nav-item {
   border-radius: $radius-item;
   font-size: $font-size-navbar;
   align-self: center;
 }

 .navbar-icons {
   display: inline-block;
 }

 @media (max-width: 576px) {
   .nav-item {
     margin-top: 5px;
   }
 }

 // Footer
 ul {
   list-style-type: none;
 }

 .contacts > span:first-child {
   color: #9fa19e;
 }

 .footer_title {
   font-size: clamp(14px, 2.5vw, 16px);
 }

 .contacts {
   font-size: clamp(12px, 2.5vw, 14px);
 }

 .footer_call {
   min-width: 140px;
 }

 //.banner {
 //  position: relative;
 //}
 //.banner-text {
 //  top: 50%;
 //  left: 50%;
 //  font-style: italic;
 //  font-size: 30px;
 //  transform: translate(-50%, -50%);
 //}

</style>
