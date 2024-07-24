<script setup lang="ts">

</script>

<template>
  <div class="header fixed top-0 left-0 z-2 h-[80px] w-full flex flex-row items-center justify-between px-[4vw] py-[12px]">
    <Logo />
    <Nav />
    <DarkToggle />
  </div>
</template>

<style scoped lang="scss">
  .header {
    border-bottom: 1px solid rgb(96, 96, 96, 0.1);
  }
</style>
