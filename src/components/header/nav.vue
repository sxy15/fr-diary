<template>
  <div class="nav-container">
    <div class="nav-jello"></div>
    <div 
      v-for="(item, i) in NAV_TABS"
      :key="item.route"
      class="nav-item"
      @click="clkNavItem(i)"
      >
      {{ item.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { NAV_TABS } from '~/constant';

  let transformX = ref();
  const clkNavItem = (i: number) => {
    transformX.value = `translateX(${(80 + 2) * i}px)`;
  }
</script>

<style lang="scss" scoped>
  .nav-container {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 2px;
    padding: 4px;
    background-color: #161b22;
    border-radius: 40px;

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      pointer-events: none;
      content: "";
      border: 1px solid #484f58;
      -webkit-mask-image: linear-gradient(rgba(0, 0, 0, .08), rgba(0, 0, 0, .04));
      mask-image: linear-gradient(rgba(0, 0, 0, .08), rgba(0, 0, 0, .04));
      border-radius: inherit;
    }
  }

  .nav-item {
    position: relative;
    width: 80px;
    padding: 7px 0;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: inherit;
    transition: background-color .2s;
  }

  .nav-jello {
    position: absolute;
    width: 80px;
    height: 32px;
    background: linear-gradient(#fff, hsla(0, 0%, 100%, .5));
    border-radius: inherit;
    transition: transform .6s cubic-bezier(.3,0,0,1);
    transform: v-bind(transformX);

    &::before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      display: block;
      pointer-events: none;
      content: "";
      background-color: #30363d;
      background-clip: padding-box;
      border: 1px solid transparent;
      border-radius: inherit;
    }
  }
</style>