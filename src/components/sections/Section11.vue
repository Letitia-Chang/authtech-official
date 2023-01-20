<template>
  <SectionTitle :title="'Line@客服擴充管理'" :bordered="true" />
  <!-- PC & Tablet & Mobile (above 415px) -->
  <div class="d-none d-sm-block section11-inner-container">
    <div class="section11-title-row d-flex flex-row">
      <div class="section11-col1-title d-flex flex-row">
        <h5 class="mb-0">{{ title[0] }}</h5>
      </div>
      <div class="section11-col2-title d-flex flex-row">
        <h5 class="mb-0">{{ title[1] }}</h5>
      </div>
      <div class="section11-col3-title d-flex flex-row">
        <h5 class="mb-0">{{ title[2] }}</h5>
      </div>
    </div>

    <div
      v-for="(item, index) in content"
      :key="index"
      class="section11-content-row d-flex flex-row"
    >
      <div class="section11-col1-item d-flex flex-row">
        <p class="mb-0">{{ item.function }}</p>
      </div>
      <div class="section11-col2-item d-flex flex-row">
        <p class="mb-0">{{ item.lineManager }}</p>
      </div>
      <div class="section11-col3-item d-flex flex-row">
        <p class="mb-0">{{ item.authTech }}</p>
      </div>
    </div>
  </div>

  <!-- Mobile (under 415px) -->
  <div class="d-sm-none section11-inner-container">
    <div class="section11-legends d-flex flex-row">
      <div class="section11-legend-1 d-flex flex-row">
        <div></div>
        <h5 class="mb-0">{{ title[1] }}</h5>
      </div>
      <div class="section11-legend-2 d-flex flex-row">
        <div></div>
        <h5 class="mb-0">{{ title[2] }}</h5>
      </div>
    </div>

    <div
      v-for="(item, index) in content"
      :key="index"
      class="section11-content-row d-flex flex-row"
    >
      <div class="section11-col1-item d-flex flex-row">
        <h6 class="mb-0">{{ item.function }}</h6>
      </div>
      <div class="d-flex flex-column section11-stacked-col">
        <div class="section11-col2-item d-flex flex-row">
          <p class="mb-0">{{ item.lineManager }}</p>
        </div>
        <div class="section11-col3-item d-flex flex-row">
          <p class="mb-0">{{ item.authTech }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";

interface Section11Content {
  function: string;
  lineManager: string;
  authTech: string;
}

export default defineComponent({
  name: "Section11",
  components: { SectionTitle },
  props: {
    content: {
      type: Array as PropType<Array<Section11Content>>,
      required: true,
    },
    title: {
      type: Array as PropType<Array<string>>,
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
  .section11-inner-container {
    margin: 48px 0px;

    .section11-title-row {
      margin-bottom: 12px;

      div {
        margin: auto 12px;
      }

      .section11-col1-title,
      .section11-col2-title {
        width: 20%;
      }

      .section11-col3-title {
        width: 60%;
      }

      h5 {
        @include set-font(22px, 600);
      }
    }

    .section11-content-row {
      margin-bottom: 24px;

      div {
        height: 74px;
        padding: 12px;
      }

      p {
        text-align: center;
        @include set-font(20px, 500);
      }

      .section11-col1-item {
        border: 1px solid $theme-color;
        width: 20%;
        margin: auto 12px;
        color: $theme-dark-gray;
      }

      .section11-col2-item {
        background-color: #8e8e8e;
        width: 20%;
        margin: auto 12px;

        color: white;
      }

      .section11-col3-item {
        background-color: $theme-color;
        width: 60%;
        color: white;
        margin: auto 12px;
      }
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section11-inner-container {
    margin: 32px 0px;

    .section11-title-row {
      margin-bottom: 12px;

      div {
        margin: auto 8px;
      }

      .section11-col1-title,
      .section11-col2-title {
        width: 20%;
      }

      .section11-col3-title {
        width: 60%;
      }

      h5 {
        @include set-font(18px, 600);
      }
    }

    .section11-content-row {
      margin-bottom: 16px;

      div {
        height: 74px;
        padding: 12px;
      }

      p {
        text-align: center;
        @include set-font(16px, 500);
      }

      .section11-col1-item {
        border: 1px solid $theme-color;
        width: 20%;
        margin: auto 8px;
        color: $theme-dark-gray;
      }

      .section11-col2-item {
        background-color: #8e8e8e;
        width: 20%;
        margin: auto 8px;

        color: white;
      }

      .section11-col3-item {
        background-color: $theme-color;
        width: 60%;
        color: white;
        margin: auto 8px;
      }
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section11-inner-container {
    margin: 16px 0px;

    .section11-title-row {
      margin-bottom: 12px;

      div {
        margin: auto 8px;
      }

      .section11-col1-title,
      .section11-col2-title {
        width: 20%;
      }

      .section11-col3-title {
        width: 60%;
      }

      h5 {
        @include set-font(18px, 600);
      }
    }

    .section11-content-row {
      margin-bottom: 16px;

      div {
        height: 56px;
        padding: 3px 12px;
      }

      p {
        text-align: center;
        @include set-font(14px, 500);
      }

      .section11-col1-item {
        border: 1px solid $theme-color;
        width: 20%;
        margin: auto 8px;
        color: $theme-dark-gray;
      }

      .section11-col2-item {
        background-color: #8e8e8e;
        width: 20%;
        margin: auto 8px;

        color: white;
      }

      .section11-col3-item {
        background-color: $theme-color;
        width: 60%;
        color: white;
        margin: auto 8px;
      }
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section11-inner-container {
    margin: 18px 0px;

    .section11-title-row {
      margin-bottom: 8px;

      div {
        margin: auto 4px;
      }

      .section11-col1-title,
      .section11-col2-title {
        width: 20%;
      }

      .section11-col3-title {
        width: 60%;
      }

      h5 {
        @include set-font(14px, 600);
      }
    }

    .section11-content-row {
      margin-bottom: 8px;

      div {
        height: 56px;
        padding: 3px 12px;
      }

      p {
        text-align: center;
        @include set-font(14px, 500);
      }

      .section11-col1-item {
        border: 1px solid $theme-color;
        width: 20%;
        margin: auto 4px;
        color: $theme-dark-gray;
      }

      .section11-col2-item {
        background-color: #8e8e8e;
        width: 20%;
        margin: auto 4px;

        color: white;
      }

      .section11-col3-item {
        background-color: $theme-color;
        width: 60%;
        color: white;
        margin: auto 4px;
      }
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section11-inner-container {
    margin: 16px 0px;

    .section11-title-row {
      margin-bottom: 8px;

      .section11-col1-title {
        margin-right: 4px;
      }

      .section11-col2-title {
        margin-left: 4px;
        margin-right: 4px;
      }

      .section11-col3-title {
        margin-left: 4px;
      }

      .section11-col1-title,
      .section11-col2-title {
        width: 26%;
      }

      .section11-col3-title {
        width: 48%;
      }

      h5 {
        @include set-font(12px, 600);
      }
    }

    .section11-content-row {
      margin-bottom: 8px;

      div {
        height: 64px;
        padding: 7px 8px;
      }

      p {
        text-align: start;
        @include set-font(12px, 500);
      }

      .section11-col1-item {
        border: 1px solid #c6c6c6;
        width: 26%;
        margin-right: 4px;
        color: $theme-dark-gray;
      }

      .section11-col2-item {
        background-color: #8e8e8e;
        width: 26%;
        margin: auto 4px;
        color: white;
      }

      .section11-col3-item {
        background-color: $theme-color;
        width: 48%;
        color: white;
        margin-left: 4px;
      }
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section11-inner-container {
    margin: 16px 0px;

    .section11-legends {
      margin-bottom: 12px;
      justify-content: center;

      .section11-legend-1,
      .section11-legend-2 {
        align-items: center;
        margin: 0px 12px;

        div {
          @include size(11px, 11px);
          margin-right: 8px;
        }
      }

      .section11-legend-1 div {
        background-color: #8e8e8e;
      }

      .section11-legend-2 div {
        background-color: $theme-color;
      }

      h5 {
        @include set-font(12px, 600);
      }
    }

    .section11-content-row {
      margin-bottom: 8px;

      p,
          h6 {
        text-align: start;
        @include set-font(12px, 500);
      }

      .section11-col1-item {
        border: 1px solid #c6c6c6;
        height: 100px;
        width: 30%;
        margin-right: 4px;
        color: $theme-dark-gray;
        padding: 33px 4px;
      }

      .section11-stacked-col {
        width: 70%;
        justify-content: space-between;

        .section11-col2-item,
        .section11-col3-item {
          @include size(100%, -webkit-fill-available);

          color: white;
          padding: 0px 8px;
        }

        .section11-col2-item {
          background-color: #8e8e8e;
          margin-bottom: 2px;
        }

        .section11-col3-item {
          background-color: $theme-color;
          margin-top: 2px;
        }
      }
    }
  }
}

// 其他固定CSS
.section11-title-row {
  div {
    @extend %alignment1;
  }
}

.section11-content-row {
  div {
    @extend %alignment1;
  }
}
</style>
