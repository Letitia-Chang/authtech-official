<template>
  <div class="row g-0">
    <div
      v-for="(item, index) in content"
      :key="index"
      class="col-12 col-md-6 section12-item-container"
    >
      <div class="section12-item">
        <h5 class="theme-title-lg d-flex align-items-center">
          <img
            :src="require(`@/assets/icons/${item.icon}.svg`)"
            :alt="`${item.title}圖示`"
          />
          {{ item.title }}
        </h5>
        <p class="theme-text">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Section12Content {
  icon: string;
  title: string;
  text: string;
}

export default defineComponent({
  name: "Section12",
  props: {
    content: {
      type: Array as PropType<Array<Section12Content>>,
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
  .section12-item-container {
    margin-bottom: 45px;

    .section12-item {
      width: 75%;

      img {
        @include size(50px, 50px);
        margin-right: 16px;
      }
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section12-item-container {
    margin-bottom: 60px;

    .section12-item {
      width: 75%;

      img {
        @include size(50px, 50px);
        margin-right: 16px;
      }
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section12-item-container {
    margin-bottom: 30px;

    .section12-item {
      width: 75%;

      img {
        @include size(32px, 32px);
        margin-right: 8px;
      }
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section12-item-container {
    margin-bottom: 20px;

    .section12-item {
      width: 75%;

      img {
        @include size(24px, 24px);
        margin-right: 8px;
      }
    }
  }
}

// 遊覽區域寬度範圍小於768px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 767px) {
  .section12-item-container {
    margin-bottom: 20px;

    .section12-item {
      width: 100%;

      img {
        @include size(24px, 24px);
        margin-right: 8px;
      }
    }
  }
}
</style>
