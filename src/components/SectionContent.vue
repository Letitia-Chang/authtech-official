<template>
  <div class="section-content" v-for="(item, index) in content" :key="index">
    <h4 :class="lg == true ? 'theme-title-lg' : 'theme-title'">
      {{ item.title }}
    </h4>
    <p
      :class="lg == true ? 'theme-text-lg' : 'theme-text'"
      v-html="item.text"
    ></p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface SectionContent {
  title: string;
  text: string;
}

export default defineComponent({
  name: "SectionContent",
  props: {
    content: {
      type: Array as PropType<Array<SectionContent>>,
      required: true,
    },
    lg: {
      type: Boolean,
      required: false,
    },
  },
});
</script>