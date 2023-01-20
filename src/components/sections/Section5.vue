<template>
  <div class="section5">
    <SectionTitle :title="content.title" :bordered="true" />
    <div
      class="section5-image"
      :style="{ backgroundImage: `url(${content.image})` }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";

interface Section5Content {
  title: string;
  image: string;
}

export default defineComponent({
  name: "Section5",
  components: { SectionTitle },
  props: {
    content: {
      type: Object as PropType<Section5Content>,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  .section5-image {
    @include size(100%, 362px);
    margin-top: 45px;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section5-image {
    @include size(100%, 268px);
    margin-top: 32px;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section5-image {
    @include size(100%, 200px);
    margin-top: 16px;
  }
}

// 遊覽區域寬度範圍小於1024px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 1023px) {
  .section5-image {
    @include size(100%, 160px);
    margin-top: 26px;
  }
}

// 其他固定CSS
.section5-image {
  @extend %background-image;
}
</style>
