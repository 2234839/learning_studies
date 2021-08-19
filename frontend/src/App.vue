<template>
  <n-card>
    <n-space vertical>
      <n-input v-model:value="lm.originalText" placeholder="待翻译文本" />
      <n-input v-model:value="lm.myTranslation" placeholder="自己的翻译" />
      <n-input v-model:value="lm.correctTranslation" placeholder="翻译结果" />
      <MarkInput :unit-list="units"></MarkInput>
    </n-space>
  </n-card>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from 'vue'
import { NButton, NCard, NInput, NSpace } from 'naive-ui'
import { LearningMarkers, textToUnit } from './DataStructure/LearningMarkers'
import MarkInput from './components/MarkInput.vue'
export default defineComponent({
  name: 'App',
  setup() {
    const lm = reactive(new LearningMarkers())
    Object.assign(lm, {
      originalText:
        "Okay, so it is on the map, it's just not at the right coords. Interesting.",
      myTranslation: '好的，所以他在一个地图上，他仅仅不是一个好点子',
      correctTranslation:
        '好吧，所以它是在地图上，只是没有在正确的坐标上。有趣。',
    })
    const html = ref('<b>那么这个是什么？</b>')
    const units = computed(() => {
      return textToUnit(lm.type.origin, lm.originalText)
    })
    return {
      lm,
      html,
      units,
    }
  },
  components: {
    NButton,
    NCard,
    NInput,
    NSpace,
    MarkInput,
  },
})
</script>

<style></style>
