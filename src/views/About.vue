<template>
  <div class="about">
    <CoverImage :page="'about'" :brightness="1" :align="'center'">
      <template v-slot:cover-image-content>
        <h1 class="title-text2">關於我們</h1>
        <h2 class="subtitle-text-en">ABOUT US</h2>
      </template>
    </CoverImage>

    <!-- Section -->
    <div class="page-container2">
      <!-- Section 4 -->
      <div class="section4-outer-container">
        <Section4
          :title="'經營理念'"
          :icon="'about-icon1'"
          :content="sectionContent"
          :imgAltText="'經營理念圖示，一支橘色的箭命中的藍色標靶的中心'"
        />
      </div>

      <!-- Section 5 -->
      <Section5 :content="section5Content" />

      <!-- Section 6 -->
      <div class="section6-container">
        <Section6 :content="sectionContent2" :contentIcons="section6Content" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoverImage from "@/components/CoverImage.vue";
import Section4 from "@/components/sections/Section4.vue";
import Section5 from "@/components/sections/Section5.vue";
import Section6 from "@/components/sections/Section6.vue";

export default defineComponent({
  name: "About",
  components: { CoverImage, Section4, Section5, Section6 },
  data() {
    return {
      sectionContent: [
        {
          title: "協助企業持續獲利、永續發展",
          text: "整合不同產業所需，補足不足之處。幫助企業規模化現有的商業模式，將系統功能發揮得淋漓盡致，達到真正的雙贏。",
        },
        {
          title: "系統可以改變企業獲利模式",
          text: "這個世界如果少了如果，會少了很多能改變世界的可能性。我們堅持只有那些瘋狂到以為能夠改變世界的如果，才能真正讓這個世界能變得更美好。",
        },
      ],
      section5Content: {
        title: "關於我們",
        image: "/static/images/about-image1.png",
        // image: "/static/images/webp/about-image1.webp",
      },
      sectionContent2: [
        {
          title: "科技在走 系統要有",
          text: "我們開發符合人性需求、有溫度的企業資源規劃系統，雖然我們不敢說自己第一，但我們卻是獨一無二的。軟體開發首創！<br/><br/>讓企業一次擁有多個系統工具：CRM客戶關係管理、LINE官方、FB Messenger、ERP企業管理系統....等。",
        },
      ],
      section6Content: [
        `CRM<br/>客戶關係<br/>管理系統`,
        "線上<br/>訊息中心",
        "獲客預約<br/>管理系統",
        "行銷導流<br/>管理系統",
        "業務銷售<br/>管理系統",
        "服務行程<br/>管理系統",
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
  // SECTION
  .page-container2 {
    margin-bottom: 50px;
  }

  // SECTION 4
  .section4-outer-container {
    margin: 72px 0px;
  }

  // SECTION 6
  .section6-container {
    display: inline-block;
    margin: 60px 0px;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  // SECTION
  .page-container2 {
    margin-bottom: 60px;
  }

  // SECTION 4
  .section4-outer-container {
    margin: 32px 0px;
  }

  // SECTION 6
  .section6-container {
    display: inline-block;
    margin: 40px 0px;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  // SECTION
  .page-container2 {
    margin-bottom: 68px;
  }

  // SECTION 4
  .section4-outer-container {
    margin: 32px 0px;
  }

  // SECTION 6
  .section6-container {
    display: inline-block;
    margin: 32px 0px;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  // SECTION
  .page-container2 {
    margin-bottom: 24px;
  }

  // SECTION 4
  .section4-outer-container {
    margin: 24px 0px;
  }

  // SECTION 6
  .section6-container {
    display: inline-block;
    margin: 24px 0px;
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  // SECTION
  .page-container2 {
    margin-bottom: 56px;
  }

  // SECTION 4
  .section4-outer-container {
    margin: 24px 0px;
  }

  // SECTION 6
  .section6-container {
    display: inline-block;
    margin: 24px 0px;
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  // SECTION
  .page-container2 {
    margin-bottom: 24px;
  }

  // SECTION 4
  .section4-outer-container {
    margin: 16px 0px;
  }

  // SECTION 6
  .section6-container {
    display: inline-block;
    margin: 24px 0px;
  }
}
</style>
