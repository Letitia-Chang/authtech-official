<template>
  <p
    v-for="(item, index) in content"
    :key="index"
    class="d-flex form-info-item"
  >
    <input
      @change="$emit('checked', [category, item.text])"
      :id="`${item.id}`"
      :value="`${item.text}`"
      type="checkbox"
    />
    <span>
      {{ item.text }}
    </span>
  </p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface CheckBoxContent {
  id: string;
  text: string;
}

export default defineComponent({
  name: "CheckboxItem",
  emits: ['checked'],
  props: {
    category: {
      type: String,
      required: true,
    },
    content: {
      type: Array as PropType<Array<CheckBoxContent>>,
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
  .form-info-item {
    @include set-font(20px, 400);

    input {
      margin-right: 15px;
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .form-info-item {
    @include set-font(16px, 400);

    input {
      margin-right: 15px;
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .form-info-item {
    @include set-font(14px, 400);

    input {
      margin-right: 15px;
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .form-info-item {
    @include set-font(14px, 400);

    input {
      margin-right: 15px;
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .form-info-item {
    @include set-font(14px, 400);

    input {
      margin-left: 3px;
      margin-right: 12px;
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .form-info-item {
    @include set-font(14px, 400);

    input {
      margin-left: 3px;
      margin-right: 12px;
    }
  }
}

// 其他固定CSS

.form-info-item {
  color: $theme-dark-gray;
  align-items: center;
  margin: 5px 0px;

  input {
    @include size(15px, 15px);
  }
}
</style>
