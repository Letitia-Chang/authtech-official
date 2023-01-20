<template>
  <div class="form-title">{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormTitle",
  props: {
    title: {
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
  .form-title {
    @include set-font(20px, 500);
    padding: 10px 0px;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .form-title {
    @include set-font(16px, 500);
    padding: 10px 0px;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .form-title {
    @include set-font(16px, 500);
    padding: 7px 0px;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .form-title {
    @include set-font(14px, 500);
    padding: 5px 0px;
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .form-title {
    @include set-font(14px, 500);
    padding: 5px 0px;
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .form-title {
    @include set-font(14px, 500);
    padding: 5px 0px;
  }
}

// 其他固定CSS
.form-title {
  background-color: $theme-color;
  color: white;
  text-align: center;
}
</style>
