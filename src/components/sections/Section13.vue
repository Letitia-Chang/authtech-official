<template>
  <!-- PC & Tablet -->
  <div class="d-none d-md-block">
    <SectionTitle
      :title="'LINE@好友越來越多，茫茫人海找不到客戶！<br>超強大LINE@線上客服功能，自動幫您管理客戶名單！'"
      :bordered="true"
    />
    <div class="section13-inner-container">
      <div class="section13 row g-0">
        <div style="width: 28%">
          <div class="d-flex flex-column">
            <div
              v-for="index in 2"
              :key="index"
              class="d-flex flex-column section13-item"
            >
              <h5 class="d-flex">
                <img
                  :src="
                    require(`@/assets/icons/${content[index - 1].icon}.svg`)
                  "
                  :alt="`${content[index - 1].title}圖示`"
                />
                {{ content[index - 1].title }}
              </h5>
              <p>{{ content[index - 1].text }}</p>
            </div>
          </div>
        </div>
        <div style="width: fit-content">
          <img class="section13-image" src="@/assets/icons/tech-icon1.svg" />
        </div>
        <div style="width: 28%">
          <div class="d-flex flex-column">
            <div
              v-for="index in 2"
              :key="index"
              class="d-flex flex-column section13-item"
            >
              <h5 class="d-flex">
                <img
                  :src="
                    require(`@/assets/icons/${content[index + 1].icon}.svg`)
                  "
                  :alt="`${content[index + 1].title}圖示`"
                />
                {{ content[index + 1].title }}
              </h5>
              <p>{{ content[index + 1].text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile -->
  <div class="d-md-none">
    <SectionTitle
      :title="'LINE@好友越來越多，茫茫人海找不到客戶！超強大線上客服功能，為您管理客戶名單！'"
      :bordered="true"
    />

    <div class="section13-inner-container">
      <div class="section13 row g-0">
        <div class="d-flex flex-column">
          <div
            v-for="index in 2"
            :key="index"
            class="d-flex flex-row section13-item"
          >
            <h5 class="d-flex">
              <img
                :src="require(`@/assets/icons/${content[index - 1].icon}.svg`)"
                :alt="`${content[index - 1].title}圖示`"
              />
              {{ content[index - 1].title }}
            </h5>
            <p>{{ content[index - 1].text }}</p>
          </div>
        </div>

        <img class="section13-image" src="@/assets/icons/tech-icon1.svg" />

        <div class="d-flex flex-column">
          <div
            v-for="index in 2"
            :key="index"
            class="d-flex flex-row section13-item"
          >
            <h5 class="d-flex">
              <img
                :src="require(`@/assets/icons/${content[index + 1].icon}.svg`)"
                :alt="`${content[index + 1].title}圖示`"
              />
              {{ content[index + 1].title }}
            </h5>
            <p>{{ content[index + 1].text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SectionTitle from "@/components/SectionTitle.vue";

interface Section13Content {
  icon: string;
  title: string;
  text: string;
}

export default defineComponent({
  name: "Section13",
  components: { SectionTitle },
  props: {
    content: {
      type: Array as PropType<Array<Section13Content>>,
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
  .section13-inner-container {
    margin: 34px 0px;

    .section13 {
      .section13-image {
        height: 355px;
      }

      .section13-item {
        @include size(100%, 245px);
        // @include size(400px, 245px);
        margin: 14px 0px;
        padding: 30px;

        h5 {
          @include set-font(24px, 700);
          margin-bottom: 20px;

          img {
            @include size(64px, 64px);
            margin-right: 18px;
          }
        }

        p:last-of-type {
          @include set-font(20px, 500);
        }
      }
    }
  }
}

// 遊覽區域寬度範圍在1440px~1919px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1440px) and (max-width: 1919px) {
  .section13-inner-container {
    margin: 24px 0px;

    .section13 {
      .section13-image {
        height: 275px;
      }

      .section13-item {
        @include size(100%, 190px);
        // @include size(284px, 190px);
        margin: 8px 0px;
        padding: 30px;

        h5 {
          @include set-font(18px, 700);
          margin-bottom: 20px;

          img {
            @include size(64px, 64px);
            margin-right: 18px;
          }
        }

        p:last-of-type {
          @include set-font(16px, 500);
          color: white;
        }
      }
    }
  }
}

// 遊覽區域寬度範圍在1024px~1440px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 1024px) and (max-width: 1439px) {
  .section13-inner-container {
    margin: 24px 0px;

    .section13 {
      .section13-image {
        height: 207px;
      }

      .section13-item {
        @include size(100%, 157px);
        // @include size(212px, 157px);
        margin: 8px 0px;
        padding: 16px;

        h5 {
          @include set-font(16px, 700);
          margin-bottom: 16px;

          img {
            @include size(48px, 48px);
            margin-right: 8px;
          }
        }

        p:last-of-type {
          @include set-font(14px, 500);
        }
      }
    }
  }
}

// 遊覽區域寬度範圍在768px~1023px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 768px) and (max-width: 1023px) {
  .section13-inner-container {
    margin: 18px 0px;

    .section13 {
      .section13-image {
        height: 180px;
      }

      .section13-item {
        @include size(100%, 130px);
        // @include size(200px, 130px);
        margin: 6px 0px;
        padding: 16px;

        h5 {
          @include set-font(16px, 700);
          margin-bottom: 8px;

          img {
            @include size(48px, 48px);
            margin-right: 8px;
          }
        }

        p:last-of-type {
          @include set-font(12px, 500);
        }
      }
    }
  }
}

// 遊覽區域寬度範圍在415px~767px，則下方CSS描述會立即被套用：
@media only screen and (min-width: 415px) and (max-width: 767px) {
  .section13-inner-container {
    margin: 2px 0px;

    .section13 {
      .section13-image {
        height: 148px;
        margin: 14px 0px;
      }

      .section13-item {
        @include size(100%, 80px);
        margin: 6px 0px;
        padding: 16px;
        justify-content: flex-start;

        p {
          margin-bottom: 0px;
        }

        h5 {
          @include set-font(16px, 700);
          margin-right: 12px;
          width: 175px;

          img {
            @include size(48px, 48px);
            margin-right: 8px;
          }
        }

        p:last-of-type {
          @include set-font(12px, 500);
          width: 48%;
        }
      }
    }
  }
}

// 遊覽區域寬度範圍小於415px，則下方CSS描述會立即被套用：
@media only screen and (max-width: 414px) {
  .section13-inner-container {
    margin: 2px 0px;

    .section13 {
      .section13-image {
        height: 148px;
      }

      .section13-item {
        @include size(100%, 80px);
        margin: 6px 0px;
        padding: 16px;
        justify-content: flex-start;

        p {
          margin-bottom: 0px;
        }

        h5 {
          @include set-font(16px, 700);
          width: 130px;
          margin-right: 8px;

          img {
            @include size(40px, 40px);
            margin-right: 8px;
          }
        }

        p:last-of-type {
          @include set-font(12px, 500);
          width: 60%;
        }
      }
    }
  }
}

// 其他固定CSS
.section13 {
  @extend %alignment2;

  .section13-item {
    background-color: $theme-color;
    align-items: center;

    p,
    h5 {
      color: white;
    }

    h5 {
      align-items: center;
    }
  }
}
</style>
