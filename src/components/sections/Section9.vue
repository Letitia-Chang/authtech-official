<template>
  <SectionTitle :title="content.title" :bordered="true" />
  <p class="section9-text theme-text">
    {{ content.text }}
  </p>
  <div class="d-flex flex-row section9-btn-container">
    <ButtonBasic
      :link="content.buttonLink"
      :text="content.buttonText"
      :fullAtMobile="true"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
import ButtonBasic from "@/components/buttons/ButtonBasic.vue";

interface Section9Content {
  title: string;
  text: string;
  buttonText: string;
  buttonLink: string;
}
export default defineComponent({
  name: "Section9",
  components: { SectionTitle, ButtonBasic },
  props: {
    content: {
      type: Object as PropType<Section9Content>,
      required: true,
    },
  },
});
</script>

<!-- No "scoped" added to pass down attribute to component SectionContent.vue -->
<style lang="scss">
@import "@/assets/scss/global.scss";

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  .section9-text {
    margin-top: 48px;
  }

  .section9-btn-container {
    margin-top: 64px;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section9-text {
    margin-top: 32px;
  }

  .section9-btn-container {
    margin-top: 42px;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section9-text {
    margin-top: 32px;
  }

  .section9-btn-container {
    margin-top: 32px;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section9-text {
    margin-top: 16px;
  }

  .section9-btn-container {
    margin-top: 24px;
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section9-text {
    margin-top: 16px;
  }

  .section9-btn-container {
    width: 100%;
    margin-top: 28px;
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section9-text {
    margin-top: 8px;
  }

  .section9-btn-container {
    width: 100%;
    margin-top: 24px;
  }
}

// 其他固定CSS
.section9-text {
  letter-spacing: 0.1em;
}

.section9-btn-container {
  justify-content: center;
}

.section9-btn {
  @extend %button-basic;
}
</style>
