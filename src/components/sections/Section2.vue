<template>
  <!-- PC / Tablet -->
  <div class="d-none d-md-flex flex-row section2">
    <div class="section2-left">
      <h3 class="section2-title">{{ content.title }}</h3>
      <h4 class="section2-subtitle">{{ content.subtitle }}</h4>
      <p class="section2-text">
        {{ content.text }}
      </p>
      <!-- router-link: 內部頁面切換 -->
      <ButtonAlt :link="content.buttonLink" :text="content.buttonText" />
    </div>
    <div class="section2-right">
      <div
        class="section2-image"
        :style="{ backgroundImage: `url(${content.image})` }"
      ></div>
    </div>
  </div>

  <!-- Mobile (under 768px) -->
  <div class="d-flex d-md-none flex-column section2">
    <div
      class="section2-image"
      :style="{ backgroundImage: `url(${content.image})` }"
    ></div>
    <h3 class="section2-title">{{ content.title }}</h3>
    <h4 class="section2-subtitle">{{ content.subtitle }}</h4>
    <p class="section2-text">
      {{ content.text }}
    </p>
    <!-- router-link: 內部頁面切換 -->
    <ButtonAlt :link="content.buttonLink" :text="content.buttonText" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ButtonAlt from "@/components/buttons/ButtonAlt.vue";

interface Section2Content {
  title: string;
  subtitle: string;
  text: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

export default defineComponent({
  name: "Section2",
  components: { ButtonAlt },
  props: {
    content: {
      type: Object as PropType<Section2Content>,
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
  .section2 {
    .section2-left {
      width: 45%;

      .section2-title {
        @include set-font2(28px, 500, 0.1em);
        margin-bottom: 12px;
      }

      .section2-subtitle {
        @include set-font(24px, 500);
        color: $theme-color;
        margin-bottom: 12px;
      }

      .section2-text {
        @include set-font2(20px, 400, 0.1em);
        color: $theme-dark-gray;
        padding-top: 12px;
        border-top: 2px solid $theme-light-gray;
      }
    }

    .section2-right {
      .section2-image {
        border-radius: 30px;
        @include size(615px, 520px);
      }
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section2 {
    .section2-left {
      width: 45%;

      .section2-title {
        @include set-font2(20px, 500, 0.1em);
        margin-bottom: 12px;
      }

      .section2-subtitle {
        @include set-font(16px, 500);
        color: $theme-color;
        margin-bottom: 12px;
      }

      .section2-text {
        @include set-font2(16px, 400, 0.1em);
        color: $theme-dark-gray;
        padding-top: 12px;
        border-top: 2px solid $theme-light-gray;
      }
    }

    .section2-right {
      .section2-image {
        border-radius: 30px;
        @include size(390px, 300px);
      }
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section2 {
    .section2-left {
      width: 50%;

      .section2-title {
        @include set-font2(18px, 500, 0.1em);
        margin-bottom: 12px;
      }

      .section2-subtitle {
        @include set-font(14px, 500);
        color: $theme-color;
        margin-bottom: 12px;
      }

      .section2-text {
        @include set-font2(14px, 400, 0.1em);
        color: $theme-dark-gray;
        padding-top: 12px;
        border-top: 2px solid $theme-light-gray;
      }
    }

    .section2-right {
      .section2-image {
        border-radius: 20px;
        @include size(398px, 274px);
      }
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section2 {
    .section2-left {
      width: 52%;

      .section2-title {
        @include set-font2(16px, 500, 0.1em);
        margin-bottom: 8px;
      }

      .section2-subtitle {
        @include set-font(14px, 500);
        color: $theme-color;
        margin-bottom: 8px;
      }

      .section2-text {
        @include set-font2(14px, 400, 0.1em);
        color: $theme-dark-gray;
        padding-top: 8px;
        border-top: 1px solid $theme-light-gray;
      }
    }

    .section2-right {
      .section2-image {
        border-radius: 10px;
        @include size(283px, 206px);
      }
    }
  }
}

// 遊覽區域寬度範圍小於768px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 767px) {
  .section2 {
    .section2-title {
      @include set-font2(16px, 500, 0.1em);
      width: 100%;
      margin-top: 16px;
      margin-bottom: 8px;
      text-align: center;
    }

    .section2-subtitle {
      @include set-font(14px, 500);
      width: 100%;
      color: $theme-color;
      margin-bottom: 8px;
      text-align: center;
    }

    .section2-text {
      @include set-font2(14px, 400, 0.1em);
      width: 100%;
      color: $theme-dark-gray;
      padding-top: 8px;
      border-top: 1px solid $theme-light-gray;
      margin-bottom: 0px;
    }

    .section2-image {
      border-radius: 10px;
      @include size(100%, 180px);
    }
  }
}

// 其他固定CSS
.section2 {
  @extend %alignment3;

  .section2-image {
    @extend %background-image;
  }
}
</style>
