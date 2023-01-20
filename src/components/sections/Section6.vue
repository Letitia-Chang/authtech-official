<template>
  <!-- PC & Tablet -->
  <div class="d-none d-md-flex flex-row section6">
    <div class="section6-left col-6">
      <SectionContent :content="content" />
    </div>
    <div class="section6-right">
      <div class="row g-0 w-100 justify-content-between">
        <div
          v-for="(item, index) in contentIcons"
          :key="index"
          class="section6-right-item col-4"
        >
          <h5 v-html="item"></h5>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile -->
  <div class="d-flex d-md-none flex-column section6 justfy-content-center">
    <div class="section6-left col-12">
      <SectionContent :content="content" />
    </div>

    <div class="section6-right d-flex flex-column w-100 align-items-center">
      <div class="row g-0 justify-content-between">
        <div v-for="(item, index) in contentIcons" :key="index" class="col-6">
          <div class="section6-right-item">
            <h5 v-html="item"></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SectionContent from "@/components/SectionContent.vue";

interface SectionContentType {
  title: string;
  image: string;
}

export default defineComponent({
  name: "Section6",
  components: { SectionContent },
  props: {
    content: {
      type: Array as PropType<Array<SectionContentType>>,
      required: true,
    },
    contentIcons: {
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
  .section6 {
    .section6-left {
      padding-top: 45px;
    }

    .section6-right {
      width: 570px;
      margin-right: 76px;

      .section6-right-item {
        @include size(160px, 160px);
        padding: 32px 36px;
        margin-bottom: 16px;

        h5 {
          @include set-font(20px, 600);
        }
      }
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section6 {
    .section6-right {
      width: 440px;

      .section6-right-item {
        @include size(120px, 120px);
        padding: 27px 28px;
        margin-bottom: 16px;

        h5 {
          @include set-font(16px, 600);
        }
      }
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section6 {
    .section6-right {
      width: 362px;
      // margin-right: 23px;

      .section6-right-item {
        @include size(110px, 110px);
        padding: 22px 27px;
        margin-bottom: 16px;

        h5 {
          @include set-font(14px, 600);
        }
      }
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section6 {
    .section6-right {
      width: 332px;

      .section6-right-item {
        @include size(100px, 100px);
        padding: 20px 22px;
        margin-bottom: 8px;

        h5 {
          @include set-font(14px, 600);
        }
      }
    }
  }
}

// 遊覽區域寬度範圍小於768px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 767px) {
  .section6 {
    .section6-right {
      margin: 20px 0px;

      .section6-right-item {
        @include size(120px, 120px);
        padding: 30px 28px;
        margin-bottom: 16px;
        margin-left: auto;
        margin-right: auto;

        h5 {
          @include set-font(16px, 600);
        }
      }
    }
  }
}

// 其他固定CSS

.section6 {
  justify-content: space-between;

  .section6-right-item {
    @extend %background-image;
    @extend %alignment1;
    background-image: url("/static/backgrounds/about-bg1.png");
    // background-image: url("/static/backgrounds/webp/about-bg1.webp");
    display: flex;

    h5 {
      color: white;
      text-align: center;
      margin-bottom: 0px;
    }
  }
}
</style>
