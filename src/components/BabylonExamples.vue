<template>
  <div class="babylon">
    <h2 class="babylon__h2 h2">Babylon Examples</h2>
    <canvas class="babylon__canvas canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { BasicScene } from "@/BabylonExamples/BasicScene"
import { StandardMaterials } from "@/BabylonExamples/StandardMaterials"
import { PBR } from "@/BabylonExamples/PBR"

defineProps<{
  msg: string
}>()

const canvas = ref();

onMounted(() => {
  canvas.value = document.querySelector("canvas")!;
  new PBR(canvas.value)
})





</script>



<style scoped>
.babylon {
  width: 100%;
  height: 100%;
}



.canvas {
  width: 100%;
  height: 100%;
}
</style>
