<template>
  <SectionTitle
    :title="'全方位企業管理系統'"
    :subtitle="'AUTH-TECH'"
    :bordered="true"
  />
  <!-- PC & Tablet -->
  <div class="section7-inner-container d-none d-md-flex flex-row">
    <div
      v-for="(item, index) in section7Content"
      :key="index"
      class="section7-item-container"
    >
      <div class="section7-item d-flex flex-row">
        <img
          class="section7-image"
          :src="require(`@/assets/icons/solution-icon${index + 1}.svg`)"
          :alt="`${item[0].title}圖示`"
        />
        <SectionContent :content="item" :lg="true" />
      </div>
    </div>
  </div>

  <!-- Mobile -->
  <div class="section7-inner-container d-flex d-md-none flex-column">
    <div
      v-for="(item, index) in section7Content"
      :key="index"
      class="section7-item-container"
    >
      <div class="section7-item d-flex flex-column">
        <img
          class="section7-image"
          :src="require(`@/assets/icons/solution-icon${index + 1}.svg`)"
          :alt="`${item[0].title}圖示`"
        />
        <SectionContent :content="item" :lg="true" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SectionContent from "@/components/SectionContent.vue";
import SectionTitle from "@/components/SectionTitle.vue";

interface Section7Content {
  title: string;
  text: string;
}

export default defineComponent({
  name: "Section7",
  components: { SectionContent, SectionTitle },
  props: {
    section7Content: {
      type: Array as PropType<Array<Array<Section7Content>>>,
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
  .section7-inner-container {
    margin: 72px 0px;

    .section7-item-container {
      width: 30%;

      .section7-item {
        .section7-image {
          height: 96px;
          margin-right: 30px;
        }
      }
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section7-inner-container {
    margin: 38px 0px;

    .section7-item-container {
      width: 30%;

      .section7-item {
        .section7-image {
          height: 80px;
          margin-right: 18px;
        }
      }
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section7-inner-container {
    margin: 42px 0px;

    .section7-item-container {
      width: 30%;

      .section7-item {
        .section7-image {
          height: 50px;
          margin-right: 8px;
        }
      }
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section7-inner-container {
    margin: 30px 0px;

    .section7-item-container {
      width: 32%;

      .section7-item {
        .section7-image {
          height: 50px;
          margin-right: 8px;
        }
      }
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section7-inner-container {
    margin: 18px 0px;

    .section7-item-container {
      margin-bottom: 20px;

      .section7-item {
        .section7-image {
          height: 45px;
          margin-bottom: 6px;
        }
      }
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section7-inner-container {
    margin: 18px 0px;

    .section7-item-container {
      margin-bottom: 20px;
      text-align: center;

      .section7-item {
        .section7-image {
          height: 45px;
          margin-bottom: 6px;
        }
      }
    }
  }
}

// 其他固定CSS
.section7-inner-container {
  justify-content: space-between;

  .section7-item {
    align-items: center;
  }
}
</style>
