<template>
  <div class="nav-container">
    <div v-for="item in NAV_TABS">
      <router-link 
        class="nav-item text-white dark:text-black"
        :to="item.route"
        replace
        >
        {{ item.label }}
      </router-link>
    </div>
    <div class="nav-jello"></div>
  </div>
</template>

<script setup lang="ts">
  import { NAV_TABS } from '~/constant';
</script>

<style lang="scss" scoped>
  .nav-container {
    position: relative;
    background: var(--nav-bg);
    border: var(--nav-border);
    border-radius: 24px;
    display: flex;
    font-size: 14px;
    padding: 4px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    user-select: none;
    box-shadow: var(--ui-second-box-shadow);
  }

  .nav-item {
    position: relative;
    cursor: pointer;
    border-radius: 50px;
    -webkit-box-align: center;
    padding: 0px 16px;
    transition: opacity 0.3s ease 0s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 1;
    user-select: none;
    // color: var(--nav-text);
    // mix-blend-mode: v-bind();
  }
</style>