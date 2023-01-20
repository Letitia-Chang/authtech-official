<template>
  <div
    class="cover-image"
    :style="[
      { backgroundImage: `url(/static/covers/webp/cover-${page}.webp)` },
      { filter: `brightness(${brightness})` },
    ]"
  >
  <!-- <div
    class="cover-image"
    :style="[
      { backgroundImage: `url(/static/covers/cover-${page}.png)` },
      { filter: `brightness(${brightness})` },
    ]"
  > -->
    <div
      class="d-flex flex-column"
      :class="[page == 'home' ? 'content-wrapper' : 'content-wrapper2']"
      style="width: fit-content"
      :style="{ alignItems: align }"
    >
      <slot name="cover-image-content"></slot>
    </div>

    <!-- Form Submitted -->
    <div class="form-submitted-modal">
      <slot name="floating-element"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CoverImage",
  props: {
    page: {
      type: String,
      required: true,
    },
    brightness: {
      type: Number,
      required: true,
    },
    align: {
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
  .cover-image {
    height: 920px;
    padding-top: 345px;

    .content-wrapper,
    .content-wrapper2 {
      margin-left: 10vw;
    }
  }

  .form-submitted-modal {
    top: 248px;
    // top: 25vh;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .cover-image {
    height: 620px;
    padding-top: 250px;

    .content-wrapper,
    .content-wrapper2 {
      margin-left: 10vw;
    }
  }

  .form-submitted-modal {
    top: 142px;
    // top: 20vh;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .cover-image {
    height: 520px;
    padding-top: 192px;

    .content-wrapper,
    .content-wrapper2 {
      margin-left: 10vw;
    }
  }

  .form-submitted-modal {
    top: 146px;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .cover-image {
    height: 450px;
    padding-top: 172px;

    .content-wrapper,
    .content-wrapper2 {
      margin-left: 10vw;
    }
  }

  .form-submitted-modal {
    top: 112px;
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .cover-image {
    height: 450px;
    padding-top: 146px;

    .content-wrapper {
      margin-left: 10vw;
    }

    .content-wrapper2 {
      margin: 0 auto;
    }
  }

  .form-submitted-modal {
    top: 112px;
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .cover-image {
    height: 450px;
    padding-top: 146px;

    .content-wrapper {
      margin-left: 10vw;
    }

    .content-wrapper2 {
      margin: 0 auto;
    }
  }

  .form-submitted-modal {
    top: 112px;
  }
}
// 其他固定CSS
.cover-image {
  @extend %background-image;
  position: relative;
  width: 100%;
}

.form-submitted-modal {
  width: 100%;
  position: absolute;
  z-index: 1;
}
</style>
