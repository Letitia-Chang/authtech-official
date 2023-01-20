<template>
  <footer class="d-flex flex-column footer-section">
    <p class="footer-title">奧斯數位整合股份有限公司</p>
    <p class="footer-title-en">AuthTech Digital & Integration LLC.</p>
    <p class="footer-text">402 台中市南區忠明南路787號9樓 A2</p>
    <p class="footer-text">04 2265 7611</p>
    <p class="footer-copyright">
      Copyright Ⓒ Auth Tech Digital & Integration LLC. Allrights Reserved.
    </p>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  .footer-section {
    padding: 40px 96px;

    .footer-title {
      @include set-font(24px, 800);
      margin-bottom: 0px;
    }

    .footer-title-en {
      @include set-font(16px, 600);
      margin-bottom: 16px;
    }

    .footer-text {
      @include set-font(18px, 400);
      margin-bottom: 0px;
    }

    .footer-copyright {
      @include set-font(14px, 400);
      margin-top: 12px;
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .footer-section {
    padding: 40px 64px;

    .footer-title {
      @include set-font(18px, 800);
      margin-bottom: 0px;
    }

    .footer-title-en {
      @include set-font(12px, 600);
      margin-bottom: 16px;
    }

    .footer-text {
      @include set-font(14px, 400);
      margin-bottom: 0px;
    }

    .footer-copyright {
      @include set-font(12px, 400);
      margin-top: 12px;
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .footer-section {
    padding: 32px 50px;

    .footer-title {
      @include set-font(16px, 800);
      margin-bottom: 0px;
    }

    .footer-title-en {
      @include set-font(12px, 600);
      margin-bottom: 12px;
    }

    .footer-text {
      @include set-font(14px, 400);
      margin-bottom: 0px;
    }

    .footer-copyright {
      @include set-font(12px, 400);
      margin-top: 10px;
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .footer-section {
    padding: 32px;

    .footer-title {
      @include set-font(14px, 800);
      margin-bottom: 0px;
    }

    .footer-title-en {
      @include set-font(12px, 600);
      margin-bottom: 10px;
    }

    .footer-text {
      @include set-font(12px, 400);
      margin-bottom: 0px;
    }

    .footer-copyright {
      @include set-font(12px, 400);
      margin-top: 10px;
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .footer-section {
    padding: 32px 16px;

    .footer-title {
      @include set-font(16px, 800);
      margin-bottom: 0px;
    }

    .footer-title-en {
      @include set-font(12px, 600);
      margin-bottom: 8px;
    }

    .footer-text {
      @include set-font(12px, 400);
      margin-bottom: 0px;
    }

    .footer-copyright {
      @include set-font(12px, 400);
      margin-top: 8px;
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .footer-section {
    padding: 32px 16px;

    .footer-title {
      @include set-font(16px, 800);
      margin-bottom: 0px;
    }

    .footer-title-en {
      @include set-font(12px, 600);
      margin-bottom: 8px;
    }

    .footer-text {
      @include set-font(12px, 400);
      margin-bottom: 0px;
    }

    .footer-copyright {
      @include set-font(12px, 400);
      margin-top: 8px;
    }
  }
}

// 其他固定CSS
.footer-section {
  width: 100%;
  background-color: $theme-color;

  p {
    color: white;
    text-align: start;
  }

  .footer-copyright {
    margin-bottom: 0px;
  }
}
</style>
