<template>
  <div class="service">
    <CoverImage :page="'service'" :brightness="1" :align="'center'">
      <template v-slot:cover-image-content>
        <h1 class="title-text2">服務項目</h1>
        <h2 class="subtitle-text-en">SERVICE AREA</h2>
      </template>
    </CoverImage>

    <!-- Section -->
    <div class="page-container2">
      <!-- Section 3 -->
      <Section3 :title="'產業服務'" :content="section3Content" :col="4" />

      <!-- Section1 -->
      <div class="section1-container">
        <Section1 :content="section1Content1" :col="4" />
      </div>
      <div class="section1-container">
        <Section1 :content="section1Content2" :col="4" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoverImage from "@/components/CoverImage.vue";
import Section1 from "@/components/sections/Section1.vue";
import Section3 from "@/components/sections/Section3.vue";

export default defineComponent({
  name: "Service",
  components: { CoverImage, Section1, Section3 },
  data() {
    return {
      section1Content1: [
        {
          icon: "service-icon1",
          title: "行銷導流管理系統",
          text: "各行各業擁有不同的顧客屬性，因此我們提供了很大的彈性，讓您更方便找出屬於您們的最佳客戶分類。",
        },
        {
          icon: "service-icon1",
          title: "業務銷售管理系統",
          text: "從潛在客戶到客戶服務中的接觸、客戶資料、標簽分衆、訪談記錄、後續追蹤，到業務的行程規劃及業績成交報表。",
        },
        {
          icon: "service-icon1",
          title: "服務行程管理系統",
          text: "系統也包含服務行程通知，提前告知客戶所需注意事項與提醒，大大降低客戶的顧慮，提高客戶對企業的信賴度。",
        },
      ],
      section1Content2: [
        {
          icon: "service-icon1",
          title: "商品庫存管理系統",
          text: "通過購物車系統下訂綁定該客戶自動生成訂單回傳到系統。庫存盤點，儲位倉庫管理擴大到分店之間的庫存移動都能進行客制化。",
        },
        {
          icon: "service-icon1",
          title: "人力資源管理系統",
          text: "輕鬆有效管理人力資源的分配，針對預約制更加有效管理人力資源規劃，包含客制化人事管理，有效減少人力成本。",
        },
        {
          icon: "service-icon1",
          title: "約聘人員管理系統",
          text: "更清楚識別技術人員的相關資訊與派遣行程，同時也有兼職管理系統，清楚記錄工作派遣時數與獎金分配。",
        },
      ],
      section3Content: [
        {
          category: "美容服務業",
          items: ["SPA醫美", "汽車美容", "寵物美容", "除毛紋眉", "美容美髮"],
        },
        {
          category: "租賃服務業",
          items: [
            "空間出租",
            "道具出租",
            "服裝出租",
            // "運輸工具出租",
            "運輸工具",
            // "機械設備出租",
            "機械設備",
            // "攝影器材出租",
            "攝影器材",
          ],
        },
        {
          category: "企業公司",
          items: [
            "零售服務",
            "餐飲服務",
            "顧客管理",
            "工商服務",
            "運動服務",
            "藝文服務",
          ],
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// COVER IMAGE
.title-text2 {
  @include cover-title-cn("theme");
}

.subtitle-text-en {
  @include cover-subtitle-en("theme");
}

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  // SECTION
  .page-container2 {
    margin-bottom: 50px;
  }

  // SECTION 1
  .section1-container {
    margin-top: 60px;
    margin-bottom: 150px;
  }

  // SECTION 3
  .section3-container {
    margin-top: 72px;
    margin-bottom: 72px;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  // SECTION 1
  .section1-container {
    margin-top: 50px;
    margin-bottom: 127px;
  }

  // SECTION 3
  .section3-container {
    margin-top: 32px;
    margin-bottom: 32px;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  // SECTION 1
  .section1-container {
    margin-top: 42px;
    margin-bottom: 80px;
  }

  // SECTION 3
  .section3-container {
    margin-top: 32px;
    margin-bottom: 32px;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  // SECTION
  .page-container2 {
    margin-bottom: 30px;
  }

  // SECTION 1
  .section1-container {
    margin-top: 23px;
    margin-bottom: 35px;
  }

  // SECTION 3
  .section3-container {
    margin-top: 24px;
    margin-bottom: 24px;
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  // SECTION
  .page-container2 {
    margin-bottom: 70px;
  }

  // SECTION 3
  .section3-container {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  // SECTION
  .page-container2 {
    margin-bottom: 40px;
  }
  // SECTION 3
  .section3-container {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

// 其他固定CSS
// SECTION 1
.section1-container {
  display: inline-block;
}

// SECTION 3
.section3-container {
  text-align: center;
  letter-spacing: 0.25em;
}
</style>
