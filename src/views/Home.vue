<template>
  <div class="home">
    <CoverImage :page="'home'" :brightness="1" :align="'flex-start'">
      <template v-slot:cover-image-content>
        <h1 class="title-text">O2O電商 + LINE電商</h1>
        <h2 class="subtitle-text">輕鬆擁有獨家線上銷售系統</h2>
        <h2 class="subtitle-text">開發您的網路市場</h2>
        <ButtonBasic :link="'/tech'" :text="'了解更多'" />
      </template>
    </CoverImage>

    <!-- <div class="d-flex flex-column" style="width: 300px;">
      <p
        v-for="(item, index) in optionsLang"
        @click="setLang(item.value)"
        :key="index"
      ></p>
    </div> -->

    <div class="page-container">
      <!-- SECTION 1 -->
      <div class="section1-container">
        <Section1 :content="section1Content" :col="3" />
      </div>

      <!-- SECTION 2 -->
      <div class="section2-container">
        <Section2 :content="section2Content1" />
      </div>

      <div class="section2-container">
        <Section2 :content="section2content2" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import i18n from "@/main";

import CoverImage from "@/components/CoverImage.vue";
import Section1 from "@/components/sections/Section1.vue";
import Section2 from "@/components/sections/Section2.vue";
import ButtonBasic from "@/components/buttons/ButtonBasic.vue";

export default defineComponent({
  name: "Home",
  components: { CoverImage, Section1, Section2, ButtonBasic },
  // i18n,
  data() {
    return {
      section1Content: [
        {
          icon: "home-icon1",
          title: "CRM客戶關係管理系統",
          // text: "CRM 不單是客戶關係管理，更是「與客戶互動歷程的管理」。是一種企業與客戶之間關係互動的管理系統。",
          text: "CRM 不單是客戶關係管理，更是「與客戶互動歷程的管理」。",
        },
        {
          icon: "home-icon2",
          title: "線上訊息中心",
          // text: "串接各社群平台聊天系統,一次集中管理各方平臺訊息，加快回覆效率、提高您的線上邀約率與成交率。",
          text: "串接各社群平台聊天系統,一次集中管理各方平臺訊息，加快回覆效率。",
        },
        {
          icon: "home-icon3",
          title: "行銷導流管理系統",
          text: "各行各業擁有不同的顧客屬性，因此我們提供了很大的彈性，讓您更方便找出屬於您們的最佳客戶分類。",
        },
        {
          icon: "home-icon4",
          title: "獲客預約管理系統",
          text: "透過網站填寫表達直接將資訊傳回AUTH系統，客制化客戶資料管理、訂單管理更是減少企業的人力成本。",
        },
      ],
      section2Content1: {
        title: "服務項目",
        subtitle: "BUSINESS AREA",
        text: "AUTH系統整合 ERP 企業資源規劃、CRM 客戶關係管理，以及附加擴充 Line@管理系統、串接金流系統、線上簽約系統。",
        buttonText: "Learn More",
        buttonLink: "/service",
        image: "/static/images/home-image1.jpg",
      },
      section2content2: {
        title: "關於我們",
        subtitle: "ABOUT US",
        text: "奧斯數位整合主要經營理念在於結合人性需求，加入科技所能提供的協助，開發真正客製化，有溫度的系統工具，所以希望在各個開發的產品上都能擁有 CRM 客戶關係管理的概念提供最有效率的幫助。",
        buttonText: "Learn More",
        buttonLink: "/about",
        image: "/static/images/home-image2.jpg",
      },
      // optionsLang: [
      //   { text: "繁體中文", value: "zh" },
      //   { text: "English", value: "en" },
      // ],
    };
  },
  // methods: {
  //   // 儲存切換的語系
  //   setLang(newLang: string) {
  //     i18n.locale = newLang;
  //     localStorage.setItem("locale", newLang);
  //   },
  // },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// COVER IMAGE
.title-text,
.subtitle-text {
  color: white;
  text-align: start;
}

.page-container {
  margin-bottom: 110px;
}

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  // SECTION 1
  .section1-container {
    margin: 70px 0px;
  }

  // SECTION 2
  .section2-container {
    margin-top: 35px;
    margin-bottom: 100px;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  // SECTION 1
  .section1-container {
    margin: 50px 0px;
  }

  // SECTION 2
  .section2-container {
    margin-top: 35px;
    margin-bottom: 85px;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  // SECTION 1
  .section1-container {
    margin: 40px 0px;
  }

  // SECTION 2
  .section2-container {
    margin-top: 20px;
    margin-bottom: 56px;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  // SECTION 1
  .section1-container {
    margin: 30px 0px;
  }

  // SECTION 2
  .section2-container {
    margin-top: 0px;
    margin-bottom: 40px;
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  // SECTION 1
  .section1-container {
    margin: 6px 0px;
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  // SECTION 1
  .section1-container {
    margin: 6px 0px;
  }
}

// 其他固定CSS

// SECTION 1
.section1-container {
  display: inline-block;
}

// SECTION 2
.section2-container {
  display: inline-block;
  width: 100%;
}
</style>
