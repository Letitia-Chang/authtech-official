<template>
  <div @click="scrollToTop()" id="back-to-top" class="d-none d-lg-flex">
    <img src="@/assets/icons/go-to-top.svg" alt="置頂按鈕" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Widget",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  #back-to-top {
    bottom: 270px;
    right: 107px;
    border-radius: 10px;
    @include size(56px, 56px);

    img {
      @include size(30px, 30px);
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  #back-to-top {
    bottom: 272px;
    right: 76px;
    border-radius: 5px;
    @include size(42px, 42px);

    img {
      @include size(22px, 22px);
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  #back-to-top {
    bottom: 212px;
    right: 59px;
    border-radius: 5px;
    @include size(34px, 34px);

    img {
      @include size(18px, 18px);
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
}

// 其他固定CSS
#back-to-top {
  @extend %alignment1;
  position: fixed;
  z-index: 1;
  background-color: $theme-color;
  opacity: 0.7;
  cursor: pointer;
}
</style>
