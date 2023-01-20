<template>
  <router-link :to="link">
    <button class="button-alt">
      {{ text }}
    </button>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonAlt",
  props: {
    link: {
      type: String,
      required: true,
    },
    text: {
      type: String,
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
  .button-alt {
    @include set-font(20px, 600);
    @include size(220px, 65px);
    margin-top: 48px;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .button-alt {
    @include set-font(18px, 600);
    @include size(180px, 45px);
    margin-top: 40px;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .button-alt {
    @include set-font(16px, 600);
    @include size(160px, 40px);
    margin-top: 40px;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .button-alt {
    @include set-font(14px, 600);
    @include size(110px, 32px);
    margin-top: 16px;
  }
}

// 遊覽區域寬度範圍小於768px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 767px) {
  a {
    width: 100%;

    .button-alt {
      @include set-font(16px, 600);
      @include size(100%, 40px);
      margin-top: 16px;
      margin-bottom: 24px;
    }
  }
}

// 其他固定CSS
.button-alt {
  @extend %button-alt;
}
</style>
