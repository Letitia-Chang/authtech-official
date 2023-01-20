<template>
  <SectionTitle :title="'為什麼選擇 AUTH-TECH'" :bordered="true" />
  <!-- PC & Tablet -->
  <div class="section8 d-none d-md-flex flex-row">
    <div class="d-flex flex-column section8-left">
      <SectionContent :content="section8Content" :lg="true" />
    </div>
    <div class="section8-right">
      <img
        class="section8-image1"
        src="@/assets/icons/solution-icon5.svg"
        alt="社群平台圖示：Apple蘋果、Facebook臉書、Line、Android安卓、Messenger"
      />
      <img
        class="section8-image2"
        src="@/assets/icons/solution-icon4.svg"
        alt="多位職員於辦公室內思考，試圖透過數據、圖表等方式找出解決方案"
      />
    </div>
  </div>

  <!-- Mobile -->
  <div class="section8 d-flex d-md-none flex-column align-items-center">
    <div class="section8-right">
      <img
        class="section8-image1"
        src="@/assets/icons/solution-icon5.svg"
        alt="社群平台圖示：Apple蘋果、Facebook臉書、Line、Android安卓、Messenger"
      />
      <img
        class="section8-image2"
        src="@/assets/icons/solution-icon4.svg"
        alt="多位職員於辦公室內思考，試圖透過數據、圖表等方式找出解決方案"
      />
    </div>
    <div class="d-flex flex-column section8-left">
      <SectionContent :content="section8Content" :lg="true" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SectionContent from "@/components/SectionContent.vue";
import SectionTitle from "@/components/SectionTitle.vue";

interface Section8Content {
  title: string;
  text: string;
}

export default defineComponent({
  name: "Section8",
  components: { SectionContent, SectionTitle },
  props: {
    section8Content: {
      type: Array as PropType<Array<Section8Content>>,
      required: true,
    },
  },
});
</script>

<!-- No "scoped" added to pass down attribute to component SectionContent.vue -->
<style lang="scss">
// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  .section8 {
    margin: 70px 0px;

    .section8-left {
      .section-content {
        margin-bottom: 48px;
      }
    }

    .section8-right {
      .section8-image1 {
        height: 180px;
        left: -125px;
        bottom: 25px;
      }

      .section8-image2 {
        height: 428px;
      }
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section8 {
    margin: 32px 0px;

    .section8-left {
      .section-content {
        margin-bottom: 40px;
      }
    }

    .section8-right {
      .section8-image1 {
        height: 146px;
        left: -74px;
        bottom: 75px;
      }

      .section8-image2 {
        height: 292px;
      }
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section8 {
    margin: 32px 0px;

    .section8-left {
      .section-content {
        margin-bottom: 24px;
      }
    }

    .section8-right {
      .section8-image1 {
        height: 132px;
        left: -30px;
        bottom: 0px;
      }

      .section8-image2 {
        height: 254px;
      }
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section8 {
    margin-top: 16px;

    .section8-left {
      .section-content {
        margin-bottom: 16px;
      }
    }

    .section8-right {
      .section8-image1 {
        height: 105px;
        left: -15px;
        bottom: 0px;
      }

      .section8-image2 {
        height: 205px;
      }
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section8 {
    margin: 22px 0px;

    .section8-left {
      .section-content {
        margin-bottom: 16px;

        p:first-of-type {
          text-align: center;
        }

        p:nth-of-type(2) {
          text-align: start;
        }
      }
    }

    .section8-right {
      margin-bottom: 50px;

      .section8-image1 {
        height: 105px;
        left: -60px;
        bottom: -18px;
      }

      .section8-image2 {
        height: 197px;
      }
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section8 {
    margin: 22px 0px;

    .section8-left {
      .section-content {
        margin-bottom: 16px;

        p:first-of-type {
          text-align: center;
        }

        p:nth-of-type(2) {
          text-align: start;
        }
      }
    }

    .section8-right {
      margin-bottom: 50px;

      .section8-image1 {
        width: 98px;
        left: -12px;
        bottom: -20px;
      }

      .section8-image2 {
        height: 170px;
      }
    }
  }
}

// 其他固定CSS
.section8 {
  justify-content: space-between;

  .section8-right {
    position: relative;

    .section8-image1 {
      position: absolute;
    }
  }
}
</style>
