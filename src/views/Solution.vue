<template>
  <div class="contact">
    <CoverImage :page="'solution'" :brightness="1" :align="'center'">
      <template v-slot:cover-image-content>
        <h1 class="title-text2">解決方案</h1>
        <h2 class="subtitle-text-en">SOLUTIONS</h2>
      </template>
    </CoverImage>

    <!-- Section -->
    <div class="page-container2">
      <!-- Section 7 -->
      <div class="section7-outer-container">
        <Section7 :section7Content="section7Content" />
      </div>

      <!-- Section 8 -->
      <div class="section8-container">
        <Section8 :section8Content="section8Content" />
      </div>

      <!-- Section 9 -->
      <div class="section9-container">
        <Section9 :content="section9Content" />
      </div>

      <!-- Section 10 -->
      <div class="section10-outer-container">
        <Section10 :content="section1Content" />
      </div>

      <!-- Section 11 -->
      <div class="section11-outer-container">
        <Section11
          :content="section11Content"
          :title="['功能', 'LINE@ Manager', 'AUTH-TECH']"
        />
      </div>

      <!-- Section 12 -->
      <div class="section12-container">
        <Section12 :content="section12Content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoverImage from "@/components/CoverImage.vue";
import Section7 from "@/components/sections/Section7.vue";
import Section8 from "@/components/sections/Section8.vue";
import Section9 from "@/components/sections/Section9.vue";
import Section10 from "@/components/sections/Section10.vue";
import Section11 from "@/components/sections/Section11.vue";
import Section12 from "@/components/sections/Section12.vue";

export default defineComponent({
  name: "Contact",
  components: {
    CoverImage,
    Section7,
    Section8,
    Section9,
    Section10,
    Section11,
    Section12,
  },
  data() {
    return {
      section7Content: [
        [
          {
            title: "精準獲客",
            text: "精準分析企業類型，多重篩選，從人群中找到您的顧客。",
          },
        ],
        [
          {
            title: "分眾行銷",
            text: "針對顧客做標籤化分類管理，投放最適行銷訊息與廣告。",
          },
        ],
        [
          {
            title: "深度經營",
            text: "多元化形象經營模式，加深品牌信賴感，提高顧客成交率。",
          },
        ],
      ],
      section8Content: [
        {
          title: "科技在走．系統要有",
          text: "一個超越LINE、FB的CRM、一個專屬服務業的輕型ERP",
        },
        {
          title: "持續獲利．永續發展",
          text: "不只是CRM，更有效轉換廣告名單、更精準獲客分眾行銷、更深度經營客戶關係。",
        },
        {
          title: "一次擁有多個企業管理系統",
          text: "一站管理客戶資料、對話訊息、訂單、行程<br/>一頁整合LINE官方、FB Messenger社群平台<br/>一個後台Web, APP雙開， iOS, Android通用<br/>一次滿足行銷、業務、客服、財會、人資部門",
        },
      ],
      section1Content: [
        {
          icon: "solution-icon6",
          title: "即時提醒",
          text: "客戶行程系統化管理，LINE@客製化排程，依客戶行程發送LINE@訊息，減少人力成本 ，降低疏失 ，增加信任，提升回購率。",
        },
        {
          icon: "solution-icon7",
          title: "LINE@客戶管理",
          text: "LINE@客戶名稱自行定義資料綁定，訂單行程管理一鍵查詢多項品牌同步管理，同一後台回覆，廣告分眾推播",
        },
        {
          icon: "solution-icon8",
          title: "分眾推播",
          text: "深入了解客群需求，讓LINE@廣告更有效精準推播，每位粉絲都是潛在客戶，讓潛在客戶主動開啟對話，引發消費動機。",
        },
      ],
      section9Content: {
        // title: "AUTH-TECH幫企業持續獲利、永續發展",
        title: "讓企業持續獲利、永續發展",
        text: "AUTH系統結合了CRM客戶關係管理、Line@後臺系統串接管理、ERP企業資源規劃等，針對各類大小型企業研發出最合適的統一後臺管理系統方案。AUTH主要的理念是CRM客戶關係管理，通過AUTH與Line@串接綁定收集客戶資料並進行精準行銷，與客戶建立友好的CRM發展，有效開發潛在客戶，達到客戶需求，讓客戶成爲公司資產。",
        buttonText: "線上諮詢",
        buttonLink: "/contact",
      },
      section11Content: [
        {
          function: "客戶名稱定義",
          lineManager: "保留客戶原本設定",
          authTech: "定義無限制，針對企業客製化",
        },
        {
          function: "推播訊息屬性",
          lineManager: "地區/性別/加入時間",
          authTech:
            "「服務中/尚未服務」，「門市個人客戶/所有客戶」等，客戶條件依照企業定義細分",
        },
        {
          function: "對話紀錄保留",
          lineManager: "無限期保留",
          authTech: "無限期保留，附有獨立「關鍵字搜尋」功能",
        },
        {
          function: "客戶資料備註",
          lineManager: "無備註功能",
          authTech: "備註功能無限制，依企業自行備註",
        },
        {
          function: "品牌管理",
          lineManager: "一人無法同步管理多項帳號",
          authTech: "登入VERY1後台，可同步管理多項品牌",
        },
        {
          function: "回覆人員記錄",
          lineManager: "不顯示「已讀」人員",
          authTech: "詳細備註「已讀」人員，供企業回溯",
        },
      ],
      section12Content: [
        {
          icon: "solution-icon9",
          title: "統一後台管理",
          text: "方案上架 、LINE@訊息回覆、分眾推播、手機簡訊內容編輯、排程、服務產品統一上架、定價。",
        },
        {
          icon: "solution-icon10",
          title: "客戶資料整合",
          text: "客戶資料、品牌推播訊息、LINE@ 簡訊內容、門市手動建立備註。",
        },
        {
          icon: "solution-icon11",
          title: "訂單金額自動加總",
          text: "當日營業額自動加總。",
        },
        {
          icon: "solution-icon12",
          title: "服務產品管理",
          text: "產品定價、編號、庫存一鍵查詢。",
        },
        {
          icon: "solution-icon13",
          title: "人力配置",
          text: "依照企業服務模式，可任意切換回覆模式 【 一對一、一對多、多對一 】，減少溝通斷層，避免服務怠慢。",
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
  @include cover-title-cn("white");
}

.subtitle-text-en {
  @include cover-subtitle-en("white");
}

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  // SECTION 7
  .section7-outer-container {
    // display: inline-block;
    margin: 72px 0px;
  }

  // SECTION 8
  .section8-container {
    display: inline-block;
    width: 100%;
    margin-top: 100px;
  }

  // SECTION 9
  .section9-container {
    display: inline-block;
  }

  // SECTION 10
  .section10-outer-container {
    margin-top: 105px;
  }

  // SECTION 11
  .section11-outer-container {
    display: inline-block;
    width: 100%;
    margin-top: 120px;
  }

  // SECTION 12
  .section12-container {
    display: inline-block;
    margin-bottom: 180px;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  // SECTION 7
  .section7-outer-container {
    // display: inline-block;
    margin: 32px 0px;
  }

  // SECTION 8
  .section8-container {
    display: inline-block;
    width: 100%;
    margin-top: 78px;
  }

  // SECTION 9
  .section9-container {
    display: inline-block;
    margin-top: 38px;
  }

  // SECTION 10
  .section10-outer-container {
    margin-top: 120px;
  }

  // SECTION 11
  .section11-outer-container {
    display: inline-block;
    width: 100%;
    margin-top: 97px;
  }

  // SECTION 12
  .section12-container {
    display: inline-block;
    margin-top: 30px;
    margin-bottom: 75px;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  // SECTION 7
  .section7-outer-container {
    // display: inline-block;
    margin: 32px 0px;
  }

  // SECTION 8
  .section8-container {
    display: inline-block;
    width: 100%;
    margin-top: 50px;
  }

  // SECTION 9
  .section9-container {
    display: inline-block;
    margin-top: 16px;
  }

  // SECTION 10
  .section10-outer-container {
    margin-top: 90px;
  }

  // SECTION 11
  .section11-outer-container {
    display: inline-block;
    width: 100%;
    margin-top: 42px;
  }

  // SECTION 12
  .section12-container {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 55px;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  // SECTION 7
  .section7-outer-container {
    // display: inline-block;
    margin: 24px 0px;
  }

  // SECTION 8
  .section8-container {
    display: inline-block;
    width: 100%;
    margin-top: 36px;
  }

  // SECTION 9
  .section9-container {
    display: inline-block;
    margin-top: 24px;
  }

  // SECTION 10
  .section10-outer-container {
    margin-top: 40px;
  }

  // SECTION 11
  .section11-outer-container {
    display: inline-block;
    width: 100%;
    margin-top: 40px;
  }

  // SECTION 12
  .section12-container {
    display: inline-block;
    margin-top: 24px;
    margin-bottom: 50px;
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  // SECTION 7
  .section7-outer-container {
    // display: inline-block;
    margin: 24px 0px;
  }

  // SECTION 8
  .section8-container {
    display: inline-block;
    width: 100%;
    margin-top: 25px;
  }

  // SECTION 9
  .section9-container {
    display: inline-block;
    margin-top: 6px;
  }

  // SECTION 10
  .section10-outer-container {
    margin-top: 40px;
  }

  // SECTION 11
  .section11-outer-container {
    display: inline-block;
    width: 100%;
    margin-top: 16px;
  }

  // SECTION 12
  .section12-container {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  // SECTION 7
  .section7-outer-container {
    // display: inline-block;
    margin: 16px 0px;
  }

  // SECTION 8
  .section8-container {
    display: inline-block;
    width: 100%;
    margin-top: 8px;
  }

  // SECTION 9
  .section9-container {
    display: inline-block;
    margin-top: 6px;
  }

  // SECTION 10
  .section10-outer-container {
    margin-top: 40px;
  }

  // SECTION 11
  .section11-outer-container {
    display: inline-block;
    width: 100%;
    margin-top: 20px;
  }

  // SECTION 12
  .section12-container {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>
