<template>
  <div class="d-flex flex-row navigation-bar">
    <!-- Left -->
    <div class="left-nav">
      <router-link to="/">
        <img src="@/assets/logos/authtech.svg" class="d-none d-lg-block" />
        <img src="@/assets/logos/authtech-logo.svg" class="d-lg-none" />
      </router-link>
    </div>
    <!-- Right -->
    <div class="d-none d-lg-flex flex-row right-nav">
      <router-link to="/about"> 關於我們 </router-link>
      <router-link to="/service"> 服務項目 </router-link>
      <router-link to="/solution"> 解決方案 </router-link>
      <router-link to="/tech"> AUTH </router-link>
      <router-link to="/contact"> 聯絡我們 </router-link>
    </div>

    <!-- Menu Btn (display under 1024px) -->
    <div class="d-flex d-lg-none">
      <img
        @click="expand = !expand"
        class="menu-btn"
        src="@/assets/icons/menu.svg"
      />
    </div>

    <!-- Expanded Menu (display under 1024px) -->
    <div id="menu-expanded" class="menu-expanded d-flex d-lg-none flex-column">
      <router-link @click="expand = !expand" to="/about">關於我們</router-link>
      <router-link @click="expand = !expand" to="/service"
        >服務項目</router-link
      >
      <router-link @click="expand = !expand" to="/solution"
        >解決方案</router-link
      >
      <router-link @click="expand = !expand" to="/tech">AUTH TECH</router-link>
      <router-link @click="expand = !expand" to="/contact"
        >聯絡我們</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header",
  data() {
    return {
      expand: false,
    };
  },
  watch: {
    $route(to, from) {
      this.expand = false;
    },
    expand() {
      const target = document.getElementById("menu-expanded")! as HTMLElement;

      if (this.expand == true) {
        target.style.setProperty("opacity", "1");
        target.style.setProperty("visibility", "visible");
      } else {
        target.style.setProperty("opacity", "0");
        target.style.setProperty("visibility", "hidden");
      }
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  .navigation-bar {
    @include size(100%, 100px);
    padding: 0px 96px;

    .left-nav {
      img {
        
        height: 40px;
      }
    }

    .right-nav {
      a {
        @include set-font(20px, 700);
        margin: 0px 16px;
      }

      a:nth-of-type(4) {
        padding: 10px 40px;
        border-radius: 100px;
      }

      a:last-of-type {
        border: 2px solid $theme-color;
        padding: 8px 40px;
        border-radius: 100px;
      }
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .navigation-bar {
    @include size(100%, 72px);
    padding: 0px 65px;

    .left-nav {
      img {
        height: 30px;
      }
    }

    .right-nav {
      a {
        @include set-font(16px, 500);
        margin: 0px 8px;
      }

      a:nth-of-type(4) {
        padding: 6px 32px;
      }

      a:last-of-type {
        padding: 4px 28px;
        border: 2px solid $theme-color;
      }
    }
  }
}

// 遊覽區域寬度範圍在1024px~1439px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .navigation-bar {
    @include size(100%, 64px);
    padding: 0px 48px;

    .left-nav {
      img {
        height: 30px;
      }
    }

    .right-nav {
      a {
        @include set-font(14px, 500);
        margin: 0px 4px;
      }

      a:nth-of-type(4) {
        padding: 8px 16px;
      }

      a:last-of-type {
        padding: 6px 16px;
        border: 2px solid $theme-color;
      }
    }
  }
}

// 遊覽區域寬度範圍在0px~1023px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 1023px) {
  .navigation-bar {
    @include size(100%, 56px);

    .left-nav {
      img {
        height: 24px;
      }
    }

    .menu-btn {
      @include size(24px, 24px);
      cursor: pointer;
    }

    .menu-expanded {
      @include absolute(56px, 0px);
      background-color: rgba(255, 255, 255, 0.9);
      width: 100%;
      transition: all 0.5s;
      opacity: 0;
      visibility: hidden;

      a {
        @include set-font(18px, 500);
        text-decoration: none;
        color: black;
        border-bottom: 1px solid $theme-light-gray;
        text-align: center;
        padding: 16px 0px;
      }

      a:nth-of-type(4),
      a:last-of-type {
        @include set-font(18px, 600);
        color: $theme-color;
      }
    }
  }
}
// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .navigation-bar {
    padding: 0px 40px;

    .menu-expanded {
      padding: 0px 18px;
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .navigation-bar {
    padding: 0px 16px;

    .menu-expanded {
      padding: 0px 16px;
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .navigation-bar {
    padding: 0px 16px;

    .menu-expanded {
      padding: 0px 16px;
    }
  }
}

// 其他固定CSS
.navigation-bar {
  @extend %alignment2;
  @include shadow(0px, 4px, 10px, 0px, 0.15);
  // background-color: rgba(255, 255, 255, 0.5);
  background-color: rgba(255, 255, 255, 0.8);
  position: fixed;
  z-index: 1;

  .right-nav {
    align-items: center;

    a {
      color: black;
      text-decoration: none;
      vertical-align: middle;
      padding-top: 1%;
    }

    a:nth-of-type(4) {
      color: white;
      background-color: $theme-color;
      border-radius: 100px;
    }

    a:last-of-type {
      color: $theme-color;
      border-radius: 100px;
    }
  }
}
</style>
