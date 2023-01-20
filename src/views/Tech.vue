<template>
  <div class="tech">
    <!-- PC & Tablet CoverImage -->
    <CoverImage
      :page="'tech'"
      :brightness="1"
      :align="'flex-start'"
      id="tech-cover-image"
      class="d-none d-md-flex"
    >
      <template v-slot:cover-image-content>
        <img
          class="logo-image"
          src="@/assets/logos/authtech.svg"
          alt="奧斯數位整合股份有限公司商標"
        />
        <h1 class="subtitle-text2">用對工具，網路開店一點都不難！</h1>
        <h2 class="subtitle-text2">同時管理 FB+LINE@+官網</h2>
        <div class="social-icons">
          <img
            @click="redirectFB()"
            src="@/assets/icons/FB.svg"
            alt="Facboook臉書圖示，可點擊"
          />
          <img
            @click="redirectLine()"
            src="@/assets/icons/Line.svg"
            alt="Line圖示，可點擊"
          />
        </div>
      </template>
    </CoverImage>

    <!-- Mobile CoverImage -->
    <CoverImage
      :page="'tech'"
      :brightness="1"
      :align="'flex-start'"
      style="padding-top: 168px"
      class="d-flex d-md-none"
    >
      <template v-slot:cover-image-content>
        <div class="d-flex flex-column w-100 align-items-center">
          <img
            class="logo-image1"
            src="@/assets/logos/authtech-logo.svg"
            alt="奧斯數位整合股份有限公司商標"
          />
          <img
            class="logo-image2"
            src="@/assets/logos/authtech-word.svg"
            alt=""
          />
          <h1 class="subtitle-text2">用對工具，網路開店一點都不難！</h1>
          <h2 class="subtitle-text2">同時管理 FB+LINE@+官網</h2>
          <div class="social-icons">
            <img
              @click="redirectFB()"
              src="@/assets/icons/FB.svg"
              alt="Facboook臉書圖示，可點擊"
            />
            <img
              @click="redirectLine()"
              src="@/assets/icons/Line.svg"
              alt="Line圖示，可點擊"
            />
          </div>
        </div>
      </template>
    </CoverImage>

    <!-- Section -->
    <div class="page-container2">
      <!-- Section 13 -->
      <div class="section13-outer-container">
        <Section13 :content="section13Content" />
      </div>
    </div>

    <!-- Section 14 -->
    <div class="section14-outer-container">
      <Section14 :content="section14Content" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoverImage from "@/components/CoverImage.vue";
import Section13 from "@/components/sections/Section13.vue";
import Section14 from "@/components/sections/Section14.vue";

export default defineComponent({
  name: "Tech",
  components: { CoverImage, Section13, Section14 },
  data() {
    return {
      section13Content: [
        {
          icon: "tech-icon2",
          title: "標籤功能",
          text: "茫茫人海中，新客、舊客名字長得一模一樣，如何分辨客戶？",
        },
        {
          icon: "tech-icon4",
          title: "Ai自動回覆",
          text: "客服人員離線怎麼辦？",
        },
        {
          icon: "tech-icon3",
          title: "串聯客戶資料",
          text: "爲何需要串聯客戶資料這個功能？",
        },
        {
          icon: "tech-icon5",
          title: "同時管理多帳號",
          text: "小幫手只有一位，但是帳號、分店太多，回不完怎麼辦",
        },
      ],
      section14Content: [
        {
          title: "花大錢買了系統，但是員工都嫌難用嗎？",
          image: "/static/images/tech-image1.png",
          // image: "/static/images/webp/tech-image1.webp",
          text: "從新手菜鳥到資深老員工，只要三分鐘就可以學會！介面超簡單，操作步驟人性化，菜鳥、老鳥一學就上手。",
        },
        {
          title: " 客戶定義功能",
          image: "/static/images/tech-image2.png",
          // image: "/static/images/webp/tech-image2.webp",
          text: "無法更改LINE@用戶名稱，讓您感動頭痛嗎？AUTH-TECH幫您超越LINE@限制，不只可以修改用戶名稱，還可以定義客戶狀態，誰有購買紀錄？誰是新客？誰是陌生客戶？一眼就可以辨識清楚！",
        },
        {
          title: "紙本紀錄，緊要關頭總是找不到客戶資料！",
          image: "/static/images/tech-image3.png",
          // image: "/static/images/webp/tech-image3.webp",
          text: "只要輸入「客戶手機號碼」，就可以找到所有客戶相關訂單！電話、地址、訂單資訊、簡訊記錄、聯繫記錄、消費紀錄，打開客戶資料馬上一目了然。",
        },
        {
          title: "客戶行程不撞期，比GOOGLE行事曆更有保障！",
          image: "/static/images/tech-image4.png",
          // image: "/static/images/webp/tech-image4.webp",
          text: "員工曾經一時手誤，同一時段約了兩組客人，搞出超大烏龍嗎？AUTH-TECH完整的預約系統，為您嚴格把關，不用擔心一時恍神KEY錯資料！",
        },
        {
          title: "還在用FB、LINE@預約嗎？",
          image: "/static/images/tech-image5.png",
          // image: "/static/images/webp/tech-image5.webp",
          text: "整合FB、LINE@、官網、線上聊天訊息，幫您把客資都留下來！讓客戶自己找上門，將每一筆聊天紀錄，都轉換成有價值的訂單，為公司帶來實際營收！",
        },
      ],
    };
  },
  methods: {
    redirectFB() {
      window.open("https://www.facebook.com/");
    },
    redirectLine() {
      window.open("https://line.me/zh-hant/");
    },
  },
});
</script>
<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  // COVER IMAGE
  #tech-cover-image {
    padding-top: 524px;
  }

  .logo-image {
    height: 50px;
    margin-bottom: 20px;
  }

  .social-icons {
    margin-top: 18px;

    img {
      height: 62px;
    }

    img:nth-of-type(2) {
      margin-left: 20px;
    }
  }

  // SECTION 13
  .section13-outer-container {
    margin: 95px 0px;
  }

  // SECTION 14
  .section14-outer-container {
    margin-top: 40px;
    margin-bottom: 145px;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  // COVER IMAGE
  #tech-cover-image {
    padding-top: 230px;
  }

  .logo-image {
    height: 32px;
    margin-bottom: 17px;
  }

  .social-icons {
    margin-top: 12px;

    img {
      height: 62px;
    }

    img:nth-of-type(2) {
      margin-left: 20px;
    }
  }

  // SECTION 13
  .section13-outer-container {
    margin: 24px 0px;
  }

  // SECTION 14
  .section14-outer-container {
    margin-top: 80px;
    margin-bottom: 85px;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  // COVER IMAGE
  #tech-cover-image {
    padding-top: 230px;
  }

  .logo-image {
    height: 30px;
    margin-bottom: 12px;
  }

  .social-icons {
    margin-top: 10px;

    img {
      height: 45px;
    }

    img:nth-of-type(2) {
      margin-left: 20px;
    }
  }

  // SECTION 13
  .section13-outer-container {
    margin: 24px 0px;
  }

  // SECTION 14
  .section14-outer-container {
    margin-top: 32px;
    margin-bottom: 100px;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  // COVER IMAGE
  #tech-cover-image {
    padding-top: 218px;
  }

  .logo-image {
    height: 24px;
    margin-bottom: 14px;
  }

  .social-icons {
    margin-top: 10px;

    img {
      height: 45px;
    }

    img:nth-of-type(2) {
      margin-left: 20px;
    }
  }

  // SECTION 13
  .section13-outer-container {
    margin: 18px 0px;
  }

  // SECTION 14
  .section14-outer-container {
    margin-top: 30px;
    margin-bottom: 40px;
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  // COVER IMAGE
  #tech-cover-image {
    padding-top: 168px;
  }

  .logo-image1,
  .logo-image2 {
    margin-bottom: 16px;
  }

  .logo-image1 {
    height: 24px;
  }

  .logo-image2 {
    height: 15px;
  }

  .social-icons {
    margin-top: 24px;

    img {
      height: 50px;
    }

    img:nth-of-type(2) {
      margin-left: 12px;
    }
  }

  // SECTION 13
  .section13-outer-container {
    margin: 18px 0px;
  }

  // SECTION 14
  .section14-outer-container {
    margin-top: 6px;
    margin-bottom: 34px;
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  // COVER IMAGE
  #tech-cover-image {
    padding-top: 168px;
  }

  .logo-image1,
  .logo-image2 {
    margin-bottom: 16px;
  }

  .logo-image1 {
    height: 24px;
  }

  .logo-image2 {
    height: 15px;
  }

  .social-icons {
    margin-top: 24px;

    img {
      height: 50px;
    }

    img:nth-of-type(2) {
      margin-left: 12px;
    }
  }

  // SECTION 13
  .section13-outer-container {
    margin: 18px 0px;
  }

  // SECTION 14
  .section14-outer-container {
    margin-top: 6px;
    margin-bottom: 34px;
  }
}

// 其他固定CSS
.subtitle-text2 {
  color: $theme-color;
  text-align: start;
}

.social-icons {
  img {
    margin-bottom: 0px;
    cursor: pointer;
  }
}
</style>
