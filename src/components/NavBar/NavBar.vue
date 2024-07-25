<template>
 <div class="NavBar">

   <nav class="navbar navbar-expand-md navbar-light">
     <div class="container-fluid px-xl-0 px-lg-0 px-md-0 px-sm-0">
       <slot name="navbar-brand"></slot>
       <button class="navbar-toggler p-0" ref="navbar-toggle" @click="navbarToggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo" aria-controls="navbarTogglerDemo" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse px-xl-5 px-lg-5 px-md-1 justify-content-between" id="navbarTogglerDemo">
         <ul class="navbar-nav mb-lg-0">
           <slot name="navbar-items"></slot>
         </ul>
         <div class="nav-icons text-center">
           <slot name="navbar-icons"></slot>
         </div>
       </div>
     </div>
     <slot></slot>
   </nav>

 </div>
</template>

<script lang="ts">

export default {
  el: "#NavBar",
  name: "NavBar",
  data() {
    return {
    }
  },
  methods: {
    navbarToggle() {

       const elem = this.$refs["navbar-toggle"];
       elem.classList.toggle("icon-rotate");
    }
  }
}
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

 .icon-rotate {
   position: relative;
   top: 1px;
   transition: all 0.3s;
   transform: rotate(180deg);
 }

 .navbar {
   width: 100%;
   position: fixed;
   top: 0;
   z-index: 1000;
   background: #FEFEFE;
 }

 //======= Animation line under menu item =========
 :slotted( .nav-link ) {
   position: relative;
   width: fit-content;
 }

 :slotted( .nav-link:before ) {
   content: "";
   position: absolute;
   bottom: 5px;
   width: 100%;
   height: 2px;
   background: #767475;
   transform: scaleX(0);
   transition: transform 0.3s;
 }

 :slotted( .nav-link:hover:before ) {
   transform: scaleX(1);
 }

 :slotted(.active) {
   font-weight: bold;
 }


 //.navbar-collapse {
 //  flex-flow: row-reverse;
 //}

 .navbar-toggler {
   width: 40px;
   height: 30px;
   outline: none;
   box-shadow: none;
   border: none;

   &:focus {
     box-shadow: none;
   }
 }

 button:focus(:focus-visible) {
   outline: none;
 }

 .navbar-toggler-icon {
   width: 20px;
   height: 20px;
 }

 // ======= Animation elements which have wrapper Transition tag ========
 .nav-enter-active,
 .nav-leave-active {
  transition: opacity 3s ease,
              margin-top 2s ease;
  }

 .nav-enter-from,
 .nav-leave-to {
   opacity: 0;
   margin-top: 50px;
 }

</style>
