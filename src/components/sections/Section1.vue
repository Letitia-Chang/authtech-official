<template>
  <!-- PC / Tablet -->
  <div class="d-none d-md-flex flex-row section1">
    <div v-for="(item, index) in content" :key="index" :class="`col-${col}`">
      <div
        class="d-flex flex-column section1-item"
        :class="lg == true ? 'section1-width-lg' : 'section1-width'"
      >
        <img
          :class="lg == true ? 'section1-image-lg' : 'section1-image'"
          :src="require(`@/assets/icons/${item.icon}.svg`)"
          :alt="`${item.title}圖示`"
        />
        <h4 class="section1-item-title">{{ item.title }}</h4>
        <p class="section1-item-text">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>

  <!-- Mobile (under 768px) -->
  <div
    class="d-md-none flex-column section1"
    :class="[stackAtSmall === true ? 'd-none d-sm-flex ' : 'd-flex']"
  >
    <div v-for="(item, index) in content" :key="index" class="col-12">
      <div
        class="d-flex flex-row section1-item"
        :class="lg == true ? 'section1-width-lg' : 'section1-width'"
      >
        <img
          :class="lg == true ? 'section1-image-lg' : 'section1-image'"
          :src="require(`@/assets/icons/${item.icon}.svg`)"
          :alt="`${item.title}圖示`"
        />
        <div class="d-flex flex-column">
          <h4 class="section1-item-title">{{ item.title }}</h4>
          <p class="section1-item-text">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- StackAtSmall (under 415px) -->
  <div
    v-if="stackAtSmall === true"
    class="d-flex d-sm-none flex-column section1"
  >
    <div v-for="(item, index) in content" :key="index" class="col-12">
      <div
        class="d-flex flex-column section1-item"
        :class="lg == true ? 'section1-width-lg' : 'section1-width'"
      >
        <img
          :class="lg == true ? 'section1-image-lg' : 'section1-image'"
          :src="require(`@/assets/icons/${item.icon}.svg`)"
          :alt="`${item.title}圖示`"
        />
        <div class="d-flex flex-column section1-item-stacked">
          <h4 class="section1-item-title">{{ item.title }}</h4>
          <p class="section1-item-text">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Section1Content {
  icon: string;
  title: string;
  text: string;
}

export default defineComponent({
  name: "Section1",
  props: {
    content: {
      type: Array as PropType<Array<Section1Content>>,
      required: true,
    },
    col: {
      type: Number,
      required: true,
    },
    lg: {
      type: Boolean,
      required: false,
    },
    stackAtSmall: {
      type: Boolean,
      required: false,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  .section1 {
    .section1-width {
      width: 85%;
    }

    .section1-width-lg {
      width: 90%;
    }

    .section1-item {
      margin: 0px auto;

      .section1-image {
        height: 178px;
        margin-bottom: 32px;
      }

      .section1-image-lg {
        height: 245px;
        margin-bottom: 32px;
      }

      .section1-item-title {
        @include set-font(24px, 600);
        color: $theme-color;
        margin-bottom: 15px;
      }

      .section1-item-text {
        @include set-font2(20px, 400, 0.1em);
        color: $theme-dark-gray;
      }
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section1 {
    .section1-width {
      width: 85%;
    }

    .section1-width-lg {
      width: 75%;
    }

    .section1-item {
      margin: 0px auto;

      .section1-image {
        height: 130px;
        margin-bottom: 16px;
      }

      .section1-image-lg {
        height: 180px;
        margin-bottom: 24px;
      }

      .section1-item-title {
        @include set-font(18px, 600);
        color: $theme-color;
        margin-bottom: 15px;
      }

      .section1-item-text {
        @include set-font2(16px, 400, 0.1em);
        color: $theme-dark-gray;
      }
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section1 {
    .section1-width {
      width: 85%;
    }

    .section1-width-lg {
      width: 75%;
    }

    .section1-item {
      margin: 0px auto;

      .section1-image {
        height: 96px;
        margin-bottom: 16px;
      }

      .section1-image-lg {
        height: 150px;
        margin-bottom: 24px;
      }

      .section1-item-title {
        @include set-font(16px, 600);
        color: $theme-color;
        margin-bottom: 15px;
      }

      .section1-item-text {
        @include set-font2(14px, 400, 0.1em);
        color: $theme-dark-gray;
      }
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section1 {
    .section1-width {
      width: 85%;
    }

    .section1-width-lg {
      width: 90%;
    }

    .section1-item {
      margin: 0px auto;

      .section1-image {
        height: 80px;
        margin-bottom: 8px;
      }

      .section1-image-lg {
        height: 120px;
        margin-bottom: 18px;
      }

      .section1-item-title {
        @include set-font(14px, 600);
        color: $theme-color;
        margin-bottom: 8px;
      }

      .section1-item-text {
        @include set-font2(14px, 400, 0.1em);
        color: $theme-dark-gray;
      }
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section1 {
    .section1-width {
      width: 90%;
    }

    .section1-width-lg {
      width: 100%;
    }

    .section1-item {
      margin: 24px auto;
      // justify-content: center;
      justify-content: flex-start;

      .section1-image {
        height: 80px;
        margin-bottom: 0px;
        margin-right: 8px;
      }

      .section1-image-lg {
        height: 90px;
        margin-right: 16px;
      }

      .section1-item-stacked {
        margin-top: 10px;
      }

      .section1-item-title {
        @include set-font(16px, 600);
        color: $theme-color;
        margin-bottom: 8px;
      }

      .section1-item-text {
        @include set-font2(14px, 400, 0.1em);
        color: $theme-dark-gray;
        margin-bottom: 0px;
      }
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section1 {
    .section1-width {
      width: 100%;
    }

    .section1-width-lg {
      width: 100%;
    }

    .section1-item {
      margin: 20px auto;
      // justify-content: center;
      justify-content: flex-start;

      .section1-image {
        height: 80px;
        margin-bottom: 0px;
        margin-right: 8px;
      }

      .section1-image-lg {
        height: 85px;
        margin-right: 10px;
      }

      .section1-item-stacked {
        margin-top: 10px;
      }

      .section1-item-title {
        @include set-font(16px, 600);
        color: $theme-color;
        margin-bottom: 8px;
      }

      .section1-item-text {
        @include set-font2(14px, 400, 0.1em);
        color: $theme-dark-gray;
        margin-bottom: 0px;
      }
    }
  }
}

// 其他固定CSS
.section1 {
  // @extend %alignment2;
  justify-content: space-between;
  align-items: flex-start;

  .section1-item {
    @extend %alignment1;
  }
}
</style>
