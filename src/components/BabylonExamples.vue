<template>
  <div class="babylon">
    <h2 class="babylon__h2 h2">Babylon Examples</h2>
    <canvas class="babylon__canvas canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BasicScene } from "@/BabylonExamples/BasicScene"

defineProps<{
  msg: string
}>()

const canvas = ref();

onMounted(() => {
  canvas.value = document.querySelector("canvas")!;
  new BasicScene(canvas.value)
})





</script>



<style scoped>
.canvas {
  width: 1280px;
  height: 720px;
}
</style>
