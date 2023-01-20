<template>
  <!-- Checbox Amount Under 3 -->
  <div
    v-if="content.length < 3"
    class="d-flex flex-column flex-md-row"
    :class="[alt === true ? 'section15-item-alt' : 'section15-item']"
  >
    <p
      v-html="title"
      :class="[alt === true ? 'form-info-title-alt' : 'form-info-title']"
    ></p>
    <div class="d-flex flex-column">
      <CheckboxItem
        @checked="passCheckedItem($event)"
        :content="content"
        :category="category"
      />
    </div>
  </div>

  <!-- Checkbox Amount Above 3 -->
  <div
    v-else
    class="d-flex flex-column flex-md-row"
    :class="[alt === true ? 'section15-item-alt' : 'section15-item']"
  >
    <p
      v-html="title"
      :class="[alt === true ? 'form-info-title-alt' : 'form-info-title']"
    ></p>
    <!-- PC & Tablet -->
    <div class="d-none d-md-flex flex-row">
      <div
        v-for="index in Math.ceil(content.length / 3)"
        :key="index"
        class="checkbox-column d-flex flex-column"
      >
        <CheckboxItem
          @checked="passCheckedItem($event)"
          :content="content.slice(index * 3 - 3, index * 3)"
          :category="category"
        />
      </div>
    </div>
    <!-- Mobile -->
    <!-- Two Columns at 320px -->
    <div v-if="content.length < 7" class="d-flex d-md-none flex-row">
      <div
        v-for="index in Math.ceil(content.length / 3)"
        :key="index"
        class="checkbox-column d-flex flex-column"
      >
        <CheckboxItem
          @checked="passCheckedItem($event)"
          :content="content.slice(index * 3 - 3, index * 3)"
          :category="category"
        />
      </div>
    </div>

    <!-- Three Columns at 320px -->
    <div v-else class="d-flex d-md-none flex-row">
      <div
        v-for="index in Math.ceil(content.length / 5)"
        :key="index"
        class="checkbox-column d-flex flex-column"
      >
        <CheckboxItem
          @checked="passCheckedItem($event)"
          :content="content.slice(index * 5 - 5, index * 5)"
          :category="category"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import CheckboxItem from "@/components/forms/CheckboxItem.vue";

interface CheckBoxContent {
  id: string;
  text: string;
}

export default defineComponent({
  name: "Checkbox",
  components: { CheckboxItem },
  emits: ["recieveCheckedItem"],
  props: {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    content: {
      type: Array as PropType<Array<CheckBoxContent>>,
      required: true,
    },
    alt: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    passCheckedItem(data: Array<string>) {
      this.$emit("recieveCheckedItem", data);
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/global.scss";

// 大於 1920px 時，套用以下 css
@media screen and (min-width: 1920px) {
  .section15-item,
  .section15-item-alt {
    justify-content: flex-start;
    align-items: center;
  }

  .section15-item {
    padding: 35px 0px;
    margin-top: 8px;
  }

  .section15-item-alt {
    padding-bottom: 21px;
    margin-top: 8px;
  }

  .form-info-title,
  .form-info-title-alt {
    @include set-font(24px, 600);
  }

  .form-info-title {
    text-align: center;
    width: 220px;
    margin-right: 65px;
  }

  .form-info-title-alt {
    margin-right: 40px;
  }

  .checkbox-column {
    margin-right: 65px;
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section15-item,
  .section15-item-alt {
    justify-content: flex-start;
    align-items: center;
  }

  .section15-item {
    padding: 35px 0px;
  }

  .section15-item-alt {
    padding-bottom: 14px;
    margin-top: 8px;
  }

  .form-info-title,
  .form-info-title-alt {
    @include set-font(20px, 600);
  }

  .form-info-title {
    text-align: center;
    width: 180px;
    margin-right: 70px;
  }

  .form-info-title-alt {
    margin-right: 40px;
  }

  .checkbox-column {
    margin-right: 70px;
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section15-item,
  .section15-item-alt {
    justify-content: flex-start;
    align-items: center;
  }

  .section15-item {
    padding: 35px 0px;
  }

  .section15-item-alt {
    padding-bottom: 15px;
    margin-top: 8px;
  }

  .form-info-title,
  .form-info-title-alt {
    @include set-font(16px, 600);
  }

  .form-info-title {
    text-align: center;
    width: 150px;
    margin-right: 65px;
  }

  .form-info-title-alt {
    margin-right: 40px;
  }

  .checkbox-column {
    margin-right: 65px;
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section15-item,
  .section15-item-alt {
    justify-content: flex-start;
    align-items: center;
  }

  .section15-item {
    padding: 35px 0px;
  }

  .section15-item-alt {
    padding-bottom: 20px;
    margin-top: 15px;
  }

  .form-info-title,
  .form-info-title-alt {
    @include set-font(14px, 600);
  }

  .form-info-title {
    text-align: center;
    width: 130px;
    margin-right: 55px;
  }

  .form-info-title-alt {
    margin-right: 40px;
  }

  .checkbox-column {
    margin-right: 65px;
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section15-item {
    padding: 5px 0px;
    margin-top: 11px;
  }

  .section15-item-alt {
    padding: 15px 0px;
  }

  .form-info-title,
  .form-info-title-alt {
    @include set-font(14px, 600);
  }

  .checkbox-column {
    margin-right: 30px;
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section15-item {
    padding: 5px 0px;
    margin-top: 11px;
  }

  .section15-item-alt {
    padding: 15px 0px;
  }

  .form-info-title,
  .form-info-title-alt {
    @include set-font(14px, 600);
  }

  .checkbox-column {
    margin-right: 10px;
  }
}

// 其他固定CSS
.section15-item,
.section15-item-alt {
  border-bottom: 1px solid $theme-light-gray;
}

.form-info-title,
.form-info-title-alt {
  color: $theme-color;
  margin-bottom: 0px;
}

.checkbox-column {
  justify-content: flex-start;
}
</style>
