<template>
  <div class="section3-container">
    <SectionTitle :title="title" :bordered="false" />
    <!-- PC & Tablet -->
    <div class="section-row d-none d-md-flex flex-row">
      <div v-for="(item, index) in content" :key="index" :class="`col-${col}`">
        <div class="section-container">
          <h4 class="section3-category">{{ item.category }}</h4>
          <h5
            v-for="(item2, index2) in item.items"
            :key="index2"
            class="section3-category-item"
          >
            {{ item2 }}
          </h5>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="section-row d-flex d-md-none flex-column">
      <div
        v-for="(item, index) in content"
        :key="index"
        class="section-container col-12"
      >
        <h4 class="section3-category">{{ item.category }}</h4>
        <div class="row g-0">
          <h5
            v-for="(item2, index2) in item.items"
            :key="index2"
            class="section3-category-item col-4"
          >
            {{ item2 }}
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";

interface Section3Content {
  category: string;
  items: Array<string>;
}
export default defineComponent({
  name: "Section3",
  components: { SectionTitle },
  props: {
    content: {
      type: Array as PropType<Array<Section3Content>>,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    col: {
      type: Number,
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
  .section-row {
    margin-top: 42px;

    .section-container {
      width: 92%;
      margin: 0 auto;

      .section3-category {
        @include set-font(24px, 500);
        padding-bottom: 18px;
        border-bottom: 2px solid #e6e6e6;
      }

      .section3-category-item {
        @include set-font(20px, 500);
        margin-top: 18px;
      }
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section-row {
    margin-top: 32px;

    .section-container {
      width: 92%;
      margin: 0 auto;

      .section3-category {
        @include set-font(18px, 500);
        padding-bottom: 16px;
        border-bottom: 2px solid #e6e6e6;
      }

      .section3-category-item {
        @include set-font(16px, 500);
        margin-top: 16px;
      }
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section-row {
    margin-top: 32px;

    .section-container {
      width: 92%;
      margin: 0 auto;

      .section3-category {
        @include set-font(16px, 500);
        padding-bottom: 12px;
        border-bottom: 2px solid #e6e6e6;
      }

      .section3-category-item {
        @include set-font(14px, 500);
        margin-top: 12px;
      }
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section-row {
    margin-top: 24px;

    .section-container {
      width: 92%;
      margin: 0 auto;

      .section3-category {
        @include set-font(14px, 500);
        padding-bottom: 8px;
        border-bottom: 2px solid #e6e6e6;
      }

      .section3-category-item {
        @include set-font(14px, 500);
        margin-top: 8px;
      }
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section-row {
    .section-container {
      margin: 24px auto;
      width: 95%;

      .section3-category {
        @include set-font(16px, 500);
        padding-bottom: 8px;
        border-bottom: 1px solid #e6e6e6;
      }

      .section3-category-item {
        @include set-font(14px, 500);
        margin-top: 8px;
      }
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section-row {
    .section-container {
      margin: 24px auto;
      width: 100%;

      .section3-category {
        @include set-font(14px, 500);
        padding-bottom: 8px;
        border-bottom: 1px solid #e6e6e6;
      }

      .section3-category-item {
        @include set-font(14px, 500);
        margin-top: 8px;
      }
    }
  }
}

// 其他固定CSS

.section3-category {
  margin-bottom: 0px;
}

.section3-category-item {
  color: $theme-dark-gray;
  margin-bottom: 0px;
}
</style>
