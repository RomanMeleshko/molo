import { createApp } from 'vue'
import './scss/app.scss'
import router from "../router";
import App from './App.vue'

// Connect Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Connect directives
import tooltip from "directives/Tooltip/index";
import scroll from "directives/Scroll/index";

// Connect Ajax effect animation on page
import AOS from "aos";
import 'aos/dist/aos.css';

// Connect Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faClock, faWandMagicSparkles, faHryvnia } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,
         faGithub,
         faSquareInstagram,
         faLinkedin,
         faLinkedinIn,
         faInstagram,
         faTelegram,
         faH
       } from '@fortawesome/free-brands-svg-icons'

library.add( faUser,
             faClock,
             faWandMagicSparkles,
             faFacebook,
             faGithub,
             faSquareInstagram,
             faLinkedin,
             faLinkedinIn,
             faInstagram,
             faTelegram,
             faHryvnia
            );


const app = createApp(App)
      app.use(router)
      app.use(AOS as any)
      app.component('font-awesome-icon', FontAwesomeIcon)
      app.directive('tooltip', tooltip)
      app.directive('scroll', scroll)
      app.mount('#app')



