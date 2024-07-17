<template>
  <div class="!outline-none cursor-pointer w-[40px] text-center" @click="toggleDark">
    <Icon v-if="isDark" class="h-[16px] w-[16px] text-white" icon="carbon-moon" />
    <Icon v-else class="h-[16px] w-[16px]" icon="carbon-sun" />
  </div>
</template>

<script setup lang="ts">
  import { Icon } from '@iconify/vue'
  import { toggleDark, isDark } from '~/composables/dark';
</script>
