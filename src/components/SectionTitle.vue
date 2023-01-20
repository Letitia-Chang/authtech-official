<template>
  <!-- 有副標題 -->
  <div v-if="subtitle">
    <h3 class="section-title-with-sub">
      {{ title }}
    </h3>
    <h4 class="section-subtitle" :class="bordered == true ? 'bordered' : ''">
      {{ subtitle }}
    </h4>
  </div>

  <!-- 無副標題 -->
  <h3
    v-else
    v-html="title"
    class="section-title"
    :class="bordered == true ? 'bordered' : ''"
  ></h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    bordered: {
      type: Boolean,
      required: true,
    },
    subtitle: {
      type: String,
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
  .section-title,
  .section-title-with-sub {
    @include set-font(28px, 700);
  }

  .section-title-with-sub {
    margin-bottom: 16px;
  }

  .section-subtitle {
    @include set-font(24px, 500);
  }

  .section-title.bordered,
  .section-subtitle.bordered {
    padding-bottom: 16px;
    border-bottom: 2px solid #e6e6e6;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section-title,
  .section-title-with-sub {
    @include set-font(20px, 700);
  }

  .section-title-with-sub {
    margin-bottom: 16px;
  }

  .section-subtitle {
    @include set-font(18px, 500);
  }

  .section-title.bordered,
  .section-subtitle.bordered {
    padding-bottom: 16px;
    border-bottom: 2px solid #e6e6e6;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section-title,
  .section-title-with-sub {
    @include set-font(18px, 700);
  }

  .section-title-with-sub {
    margin-bottom: 8px;
  }

  .section-subtitle {
    @include set-font(16px, 500);
  }

  .section-title.bordered,
  .section-subtitle.bordered {
    padding-bottom: 16px;
    border-bottom: 2px solid #e6e6e6;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section-title,
  .section-title-with-sub {
    @include set-font(16px, 700);
  }

  .section-title-with-sub {
    margin-bottom: 8px;
  }

  .section-subtitle {
    @include set-font(14px, 500);
  }

  .section-title.bordered,
  .section-subtitle.bordered {
    padding-bottom: 8px;
    border-bottom: 1px solid #e6e6e6;
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section-title,
  .section-title-with-sub {
    @include set-font(18px, 700);
  }

  .section-title-with-sub {
    margin-bottom: 4px;
  }

  .section-subtitle {
    @include set-font(14px, 500);
  }

  .section-title.bordered,
  .section-subtitle.bordered {
    padding-bottom: 8px;
    border-bottom: 1px solid #e6e6e6;
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section-title,
  .section-title-with-sub {
    @include set-font(16px, 700);
  }

  .section-title-with-sub {
    margin-bottom: 4px;
  }

  .section-subtitle {
    @include set-font(14px, 500);
  }

  .section-title.bordered,
  .section-subtitle.bordered {
    padding-bottom: 8px;
    border-bottom: 1px solid #e6e6e6;
  }
}

// 其他固定CSS

.section-title,
.section-title-with-sub {
  color: $theme-color;
  letter-spacing: 0.25em;
  text-align: center;
}

.section-title {
  margin-bottom: 0px;
}

// Not Yet Checked RWD
.section-subtitle {
  letter-spacing: 0.25em;
  text-align: center;
}
</style>
