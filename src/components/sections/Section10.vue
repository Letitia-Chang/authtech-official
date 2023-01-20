<template>
  <SectionTitle :title="'整合Line@開發更強大的功能'" :bordered="true" />
  <div class="section10-inner-container">
    <Section1 :content="content" :col="4" :lg="true" :stackAtSmall="true" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Section1 from "@/components/sections/Section1.vue";
import SectionTitle from "@/components/SectionTitle.vue";

interface Section1Content {
  icon: string;
  title: string;
  text: string;
}

export default defineComponent({
  name: "Section10",
  components: { Section1, SectionTitle },
  props: {
    content: {
      type: Object as PropType<Section1Content>,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// 大於 1920px 時，套用以下 css

@media screen and (min-width: 1920px) {
  .section10-inner-container {
    margin-top: 45px;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section10-inner-container {
    margin-top: 32px;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section10-inner-container {
    margin-top: 30px;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section10-inner-container {
    margin-top: 23px;
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section10-inner-container {
    margin-top: 18px;
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section10-inner-container {
    margin-top: 18px;
  }
}

// 其他固定CSS
</style>
