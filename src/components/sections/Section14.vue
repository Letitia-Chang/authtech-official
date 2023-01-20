<template>
  <div class="page-container2">
    <SectionTitle :title="'為什麼企業都用這個管理系統！'" :bordered="true" />
  </div>
  <div class="section14-scroller-container">
    <div class="section14-scroller row g-0 flex-nowrap">
      <div
        v-for="(item, index) in content"
        :key="index"
        style="width: fit-content"
      >
        <div class="section14-item d-flex flex-column">
          <h5 class="section14-item-title">
            {{ item.title }}
          </h5>
          <div
            class="section14-item-image"
            :style="{ backgroundImage: `url(${item.image})` }"
          ></div>
          <p class="section14-item-text">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="section14-btn-row d-flex flex-row justify-content-center">
    <ButtonBasic :link="'/contact'" :text="'立即預約'" :customStyle="true" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";
import ButtonBasic from "@/components/buttons/ButtonBasic.vue";

interface Section14Content {
  title: string;
  image: string;
  text: string;
}

export default defineComponent({
  name: "Section14",
  components: { SectionTitle, ButtonBasic },
  props: {
    content: {
      type: Array as PropType<Array<Section14Content>>,
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
  .section14-scroller-container {
    margin-top: 55px;

    .section14-scroller {
      padding: 65px 0px;

      .section14-item {
        width: 450px;
        margin: 0px 21px;

        .section14-item-title {
          @include set-font(20px, 700);
          margin-bottom: 32px;
        }
        .section14-item-image {
          @include size(100%, 300px);
        }

        .section14-item-text {
          @include set-font(20px, 500);
          margin-top: 32px;
        }
      }
    }
  }

  .section14-btn-row {
    margin-top: 72px;

    .button-basic-custom {
      @include set-font(28px, 500);
      padding: 16px 80px;
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section14-scroller-container {
    margin-top: 32px;

    .section14-scroller {
      padding: 65px 0px;

      .section14-item {
        width: 400px;
        margin: 0px 10px;

        .section14-item-title {
          @include set-font(18px, 700);
          margin-bottom: 24px;
        }

        .section14-item-image {
          @include size(100%, 300px);
        }

        .section14-item-text {
          @include set-font(16px, 500);
          margin-top: 24px;
        }
      }
    }
  }

  .section14-btn-row {
    margin-top: 32px;

    .button-basic-custom {
      @include set-font(20px, 500);
      padding: 16px 80px;
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section14-scroller-container {
    margin-top: 32px;

    .section14-scroller {
      padding: 48px 0px;

      .section14-item {
        width: 320px;
        margin: 0px 10px;

        .section14-item-title {
          @include set-font(16px, 700);
          margin-bottom: 24px;
        }

        .section14-item-image {
          @include size(100%, 200px);
        }

        .section14-item-text {
          @include set-font(14px, 500);
          margin-top: 24px;
        }
      }
    }
  }

  .section14-btn-row {
    margin-top: 32px;

    .button-basic-custom {
      @include set-font(18px, 500);
      padding: 10px 68px;
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section14-scroller-container {
    margin-top: 36px;

    .section14-scroller {
      padding: 24px 0px;

      .section14-item {
        width: 240px;
        margin: 0px 8px;

        .section14-item-title {
          @include set-font(14px, 700);
          margin-bottom: 16px;
        }

        .section14-item-image {
          @include size(100%, 200px);
        }

        .section14-item-text {
          @include set-font(12px, 500);
          margin-top: 16px;
        }
      }
    }
  }

  .section14-btn-row {
    margin-top: 32px;

    .button-basic-custom {
      @include set-font(16px, 500);
      padding: 10px 68px;
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section14-scroller-container {
    margin-top: 24px;

    .section14-scroller {
      padding: 24px 0px;

      .section14-item {
        width: 240px;
        margin: 0px 8px;

        .section14-item-title {
          @include set-font(14px, 700);
          margin-bottom: 16px;
        }

        .section14-item-image {
          @include size(100%, 146px);
        }

        .section14-item-text {
          @include set-font(12px, 500);
          margin-top: 16px;
        }
      }
    }
  }

  .section14-btn-row {
    margin-top: 24px;

    .button-basic-custom {
      @include set-font(16px, 500);
      padding: 10px 116px;
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section14-scroller-container {
    margin-top: 24px;

    .section14-scroller {
      padding: 24px 0px;

      .section14-item {
        width: 200px;
        margin: 0px 8px;

        .section14-item-title {
          @include set-font(14px, 700);
          margin-bottom: 16px;
        }

        .section14-item-image {
          @include size(100%, 146px);
        }

        .section14-item-text {
          @include set-font(12px, 500);
          margin-top: 16px;
        }
      }
    }
  }

  .section14-btn-row {
    margin-top: 24px;

    .button-basic-custom {
      @include set-font(16px, 500);
      padding: 10px 112px;
    }
  }
}

// 其他固定CSS
.section14-scroller-container {
  width: 100%;
  overflow-x: scroll;
  background-color: black;

  .section14-scroller {
    .section14-item {
      .section14-item-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        color: $theme-color;
        text-align: center;
      }
      .section14-item-image {
        @extend %background-image;
        border-radius: 10px;
      }

      .section14-item-text {
        color: white;
        margin-bottom: 0px;
      }
    }
  }
}
</style>
