<template>
  <div class="section15-item2 d-flex flex-row">
    <!-- ** Date ** -->
    <div
      v-if="dateSetting"
      class="d-flex flex-column"
      :class="[dateSetting && timeSetting ? 'form-left-col' : 'form-full-col']"
    >
      <p class="form-info-title2">
        <span v-if="dateSetting.required === true"> * </span>
        {{ dateSetting.title }}
      </p>
      <input class="date-input" type="date" :id="`input-${ dateSetting.id}`" />
    </div>

    <!-- ** Time ** -->
    <div
      v-if="timeSetting"
      class="d-flex flex-column"
      :class="[dateSetting && timeSetting ? 'form-right-col' : 'form-full-col']"
    >
      <p class="form-info-title2">
        <span v-if="timeSetting.required === true"> * </span>
        {{ timeSetting.title }}
      </p>
      <div class="select-time">
        <div @click="expand = !expand" class="selected-time">
          {{ selected }}
          <img v-if="!expand" src="@/assets/icons/arrow-down.svg" />
          <img v-else src="@/assets/icons/arrow-up.svg" />
        </div>
        <!-- Dropdown Options -->
        <input type="hidden" :id="`input-${timeSetting.id}`" :value="selected">
        <div v-if="expand == true" class="select-options d-flex flex-column">
          <div
            v-for="time in timeOptions(timeSetting.unit, timeSetting.range)"
            :key="time"
            @click="
              selected = time;
              expand = !expand;
            "
            class="select-option"
            :class="{
              selected: selected == time,
              'not-selected': selected !== time,
            }"
          >
            {{ time }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface DateSetting {
  id: string;
  title: string;
  required: boolean;
}

interface TimeSetting {
  id: string;
  title: string;
  required: boolean;
  unit: 1 | 0.5;
  range: Array<number>;
}

export default defineComponent({
  name: "DateTimeInput",
  data() {
    return {
      expand: false,
      selected: this.timeSetting
        ? this.timeOptions(this.timeSetting.unit, this.timeSetting.range)[0]
        : "",
    };
  },
  props: {
    dateSetting: {
      type: Object as PropType<DateSetting>,
      required: false,
    },
    timeSetting: {
      type: Object as PropType<TimeSetting>,
      required: false,
    },
  },
  methods: {
    timeOptions(unit: 1 | 0.5, range: Array<number>) {
      let options = [];
      if (unit == 1) {
        for (let i = range[0]; i < range[1] + 1; i++) {
          options.push(`${i}:00`);
        }
      } else {
        for (let i = range[0]; i < range[1] + 1; i++) {
          options.push(`${i}:00`);
          if (i < range[1]) {
            options.push(`${i}:30`);
          }
        }
      }
      return options;
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

  .select-time {
    .selected-time {
      @include set-font(20px, 500);
      padding-bottom: 10px;

      img {
        @include absolute2(5px, 5px);
        width: 24px;
      }
    }

    .select-options {
      margin-top: 10px;

      .select-option {
        @include set-font(20px, 500);
      }
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

  .select-time {
    .selected-time {
      @include set-font(16px, 500);
      padding-bottom: 5px;

      img {
        @include absolute2(5px, 5px);
        width: 24px;
      }
    }

    .select-options {
      margin-top: 5px;

      .select-option {
        @include set-font(20px, 500);
      }
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

  .select-time {
    .selected-time {
      @include set-font(14px, 500);
      padding-bottom: 1px;

      img {
        @include absolute2(0px, 0px);
        width: 20px;
      }
    }

    .select-options {
      margin-top: 5px;

      .select-option {
        @include set-font(20px, 500);
      }
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

  .select-time {
    .selected-time {
      @include set-font(14px, 500);
      padding-bottom: 1px;

      img {
        @include absolute2(0px, 0px);
        width: 20px;
      }
    }

    .select-options {
      margin-top: 5px;

      .select-option {
        @include set-font(16px, 500);
      }
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

  .select-time {
    .selected-time {
      @include set-font(14px, 500);
      padding-bottom: 1px;

      img {
        @include absolute2(0px, 0px);
        width: 20px;
      }
    }

    .select-options {
      margin-top: 5px;

      .select-option {
        @include set-font(16px, 500);
      }
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

  .select-time {
    .selected-time {
      @include set-font(14px, 500);
      padding-bottom: 1px;

      img {
        @include absolute2(0px, 0px);
        width: 20px;
      }
    }

    .select-options {
      margin-top: 5px;

      .select-option {
        @include set-font(16px, 500);
      }
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

.select-time {
  position: relative;

  .selected-time {
    color: $theme-dark-gray;
    border: none;
    border-bottom: 1px solid $theme-light-gray;
    position: relative;
    cursor: pointer;

    img {
      cursor: pointer;
    }
  }

  .select-options {
    background-color: white;
    border: 1px solid $theme-light-gray;
    border-radius: 10px;
    width: 100%;
    position: absolute;
    padding: 12px;
    height: 324px;
    overflow: scroll;

    .select-option {
      cursor: pointer;
      padding: 10px;

      &.not-selected {
        color: $theme-dark-gray;
      }

      &.selected {
        color: white;
        background-color: $theme-blue;
      }
    }

    .select-option:hover {
      color: white;
      background-color: $theme-blue;
    }
  }
}
</style>
