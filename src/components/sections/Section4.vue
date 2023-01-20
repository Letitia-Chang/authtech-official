<template>
  <SectionTitle :title="title" :bordered="true" />
  <div class="section4-inner-container">
    <div class="d-flex flex-row section4">
      <div class="d-flex flex-column col-12 col-md-7 section4-left">
        <SectionContent :content="content" />
      </div>
      <div class="section4-right d-none d-md-block">
        <img
          class="section4-image"
          :src="require(`@/assets/icons/${icon}.svg`)"
          :alt="imgAltText"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
import SectionContent from "@/components/SectionContent.vue";

interface SectionContentType {
  title: string;
  text: string;
}

export default defineComponent({
  name: "Section4",
  components: { SectionTitle, SectionContent },
  props: {
    content: {
      type: Array as PropType<Array<SectionContentType>>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    imgAltText: {
      type: String,
      required: true,
    },
  },
});
</script>

<!-- No "scoped" added to pass down attribute to component SectionContent.vue -->
<style lang="scss">
// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  .section4-inner-container {
    margin-top: 50px;

    .section4-left {
      justify-content: space-around;
    }

    .section4-image {
      height: 320px;
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section4-inner-container {
    margin-top: 32px;

    .section-content {
      margin-bottom: 40px;
    }

    .section4-image {
      height: 255px;
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section4-inner-container {
    margin-top: 32px;

    .section-content {
      margin-bottom: 32px;
    }

    .section4-image {
      height: 200px;
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section4-inner-container {
    margin-top: 24px;

    .section-content {
      margin-bottom: 18px;
    }

    .section4-image {
      height: 170px;
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section4-inner-container {
    margin-top: 20px;

    .section-content {
      margin-bottom: 18px;
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section4-inner-container {
    margin-top: 18px;

    .section-content {
      margin-bottom: 16px;
    }
  }
}

// 其他固定CSS
.section4-inner-container {
  display: inline-block;
  width: 100%;
}

.section4 {
  justify-content: space-between;
}
</style>
