<template>
  <div class="section15-item2 d-flex flex-row">
    <!-- One Column -->
    <div v-if="content.length == 1" class="form-full-col d-flex flex-column">
      <p class="form-info-title2">
        <span v-if="content[0].required === true"> * </span>
        {{ content[0].title }}
      </p>
      <input
        :id="`input-${content[0].id}`"
        :placeholder="
          content[0].placeholder !== null ? content[0].placeholder : '輸入資訊'
        "
        type="text"
      />
    </div>

    <!-- Two Columns -->
    <div v-else class="d-flex w-100 justify-content-between">
      <div class="form-left-col d-flex flex-column">
        <p class="form-info-title2">
          <span v-if="content[0].required === true"> * </span>
          {{ content[0].title }}
        </p>
        <input
          type="text"
          :id="`input-${content[0].id}`"
          :placeholder="
            content[0].placeholder !== null
              ? content[0].placeholder
              : '輸入資訊'
          "
        />
      </div>

      <div class="form-right-col d-flex flex-column">
        <p class="form-info-title2">
          <span v-if="content[1].required === true"> * </span>
          {{ content[1].title }}
        </p>
        <input
          type="text"
          :id="`input-${content[1].id}`"
          :placeholder="
            content[1].placeholder !== null
              ? content[1].placeholder
              : '輸入資訊'
          "
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface TextInputContent {
  id: string;
  required: boolean;
  title: string;
  placeholder: string | null;
}

export default defineComponent({
  name: "TextInput",
  props: {
    content: {
      type: Array as PropType<Array<TextInputContent>>,
      required: true,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  .section15-item2 {
    padding: 21px 0px;
    margin-top: 8px;

    .form-info-title2 {
      @include set-font(24px, 600);
      margin-bottom: 32px;
    }

    input {
      @include set-font(20px, 500);
      padding-bottom: 10px;
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section15-item2 {
    padding: 14px 0px;
    margin-top: 8px;

    .form-info-title2 {
      @include set-font(20px, 600);
      margin-bottom: 20px;
    }

    input {
      @include set-font(16px, 500);
      padding-bottom: 5px;
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section15-item2 {
    padding: 15px 0px;
    margin-top: 8px;

    .form-info-title2 {
      @include set-font(16px, 600);
      margin-bottom: 20px;
    }

    input {
      @include set-font(14px, 500);
      padding-bottom: 1px;
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section15-item2 {
    padding: 15px 0px;
    margin-top: 8px;

    .form-info-title2 {
      @include set-font(14px, 600);
      margin-bottom: 12px;
    }

    input {
      @include set-font(12px, 500);
      padding-bottom: 1px;
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section15-item2 {
    padding: 15px 0px;

    .form-info-title2 {
      @include set-font(14px, 600);
      margin-bottom: 12px;
    }

    input {
      @include set-font(12px, 500);
      padding-bottom: 1px;
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section15-item2 {
    padding: 15px 0px;

    .form-info-title2 {
      @include set-font(14px, 600);
      margin-bottom: 12px;
    }

    input {
      @include set-font(12px, 500);
      padding-bottom: 1px;
    }
  }
}

// 其他固定CSS
.section15-item2 {
  @extend %alignment2;
  width: 100%;

  .form-left-col,
  .form-right-col {
    width: 45%;
  }

  .form-full-col {
    width: 100%;
  }

  .form-info-title2 {
    color: $theme-color;

    span {
      color: $theme-blue;
    }
  }

  input {
    color: $theme-dark-gray;
    border: none;
    border-bottom: 1px solid $theme-light-gray;
  }

  input::placeholder {
    color: $theme-light-gray;
  }
}
</style>
