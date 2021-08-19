<template>
  <div class="flex">
    <div v-for="(item, index) in unitList" :key="index" class="ml-1">{{ item }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, PropType } from 'vue'

export default defineComponent({
  props: {
    unitList: {
      type: Array as PropType<string[]>,
    },
  },
  setup(props, ctx) {
    const html = ref('')
    return {}
  },
})
</script>
