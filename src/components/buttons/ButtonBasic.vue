<template>
  <!-- ** Has Link ** -->
  <div v-if="link">
    <!-- Custom Style -->
    <router-link v-if="customStyle === true" :to="link">
      <button
        class="button-basic-custom"
        :class="[disabled == true ? 'button-disabled' : '']"
      >
        {{ text }}
      </button>
    </router-link>
    <!-- Fixed Style -->
    <router-link v-else :to="link">
      <button
        :class="[
          fullAtMobile == true ? 'button-basic2' : 'button-basic',
          disabled == true ? 'button-disabled' : '',
        ]"
      >
        {{ text }}
      </button>
    </router-link>
  </div>

  <!-- ** No Link ** -->
  <div v-else>
    <!-- Custom Style -->
    <button
      @click="$emit('triggered')"
      v-if="customStyle === true"
      class="button-basic-custom"
      :class="[disabled == true ? 'button-disabled' : '']"
    >
      {{ text }}
    </button>
    <!-- Fixed Style -->
    <button
      v-else
      @click="$emit('triggered')"
      :class="[
        fullAtMobile == true ? 'button-basic2' : 'button-basic',
        disabled == true ? 'button-disabled' : '',
      ]"
    >
      {{ text }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonBasic",
  props: {
    link: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
    },
    fullAtMobile: {
      type: Boolean,
      required: false,
    },
    customStyle: {
      type: Boolean,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["triggered"],
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  .button-basic {
    @include set-font(28px, 500);
    @include size(220px, 65px);
    margin-top: 24px;
  }

  .button-basic2 {
    @include set-font(28px, 500);
    @include size(220px, 65px);
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .button-basic {
    @include set-font(18px, 500);
    @include size(180px, 50px);
    margin-top: 36px;
  }

  .button-basic2 {
    @include set-font(18px, 500);
    @include size(240px, 40px);
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .button-basic {
    @include set-font(18px, 500);
    @include size(160px, 40px);
    margin-top: 28px;
  }

  .button-basic2 {
    @include set-font(18px, 500);
    @include size(200px, 40px);
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .button-basic {
    @include set-font(16px, 500);
    @include size(160px, 40px);
    margin-top: 10px;
  }

  .button-basic2 {
    @include set-font(16px, 500);
    @include size(200px, 40px);
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .button-basic {
    @include set-font(16px, 500);
    @include size(120px, 35px);
    margin-top: 14px;
  }

  .button-basic2 {
    @include set-font(16px, 500);
    @include size(252px, 40px);
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .button-basic {
    @include set-font(16px, 500);
    @include size(112px, 35px);
    margin-top: 14px;
  }

  .button-basic2 {
    @include set-font(16px, 500);
    @include size(288px, 40px);
  }
}

// 其他固定CSS
.button-disabled {
  background-color: $theme-light-gray;
  cursor: not-allowed;
  box-shadow: none;
}

.button-basic,
.button-basic2,
.button-basic-custom {
  @extend %button-basic;
}
</style>
