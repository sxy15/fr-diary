<script setup lang="ts">
  import { particleLine } from 'canvas-effect'

  onMounted(() => {
    particleLine({
      id: 'canvas',
      count: 150,
      color: '104, 150, 66'
    })
  })
</script>

<template>
  <main class="pt-[80px] h-100vh bg-[var(--background)]">
    <Header />

    <canvas id="canvas"></canvas>
  </main>
</template>

<style scoped lang="scss">
  #canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transition;
    z-index: 1;
  }
</style>