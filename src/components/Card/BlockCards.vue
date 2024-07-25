<template>
 <div class="BlockCards">

   <slot name="title"></slot>

   <slot name="sub-title"></slot>

   <slot name="cards"></slot>
<!--   <Title :componentClass="styleMainTitle">-->
<!--      <template v-slot:name>-->
<!--         <h1 class="mainTitle">{{ nameTitle }}</h1>-->
<!--      </template>-->
<!--   </Title>-->

<!--   <Title class="pb-5" :componentClass="styleSubTitle">-->
<!--      <template v-slot:name>-->
<!--         <h6 class="subTitle">{{ nameSubTitle }}</h6>-->
<!--      </template>-->
<!--   </Title>-->

<!--   <Card :dataCard="dataCard"></Card>-->

 </div>
</template>

<script lang="ts">
import Title from "components/Title/Title.vue";
import Card from "components/Card/Card.vue";

export default {
  name: "BlockCards",
  data() {
    return {
      nameTitle: "Каталог товарів",
      nameSubTitle: "Найпопулярніші товари у продажу",
      styleMainTitle: "",
      styleSubTitle: "",
    }
  },
  props: {
    dataCard: {
      type: Array,
      default: []
    }
  },
  components: {
    Title,
    Card
  }

}
</script>

<style lang="scss" scoped>
@import "scss/variables.scss";

.mainTitle {
  font-weight: 700;
}
.subTitle {
  color: $sub-title;
}

</style>
