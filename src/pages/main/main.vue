<!--
 * @Author: leo
 * @Date: 2023-05-23 16:39:42
 * @LastEditors: leo
 * @LastEditTime: 2023-05-23 18:02:29
 * @Description:
-->
<script setup lang="ts">
const countStore = useCouterStore()
const { count } = storeToRefs(countStore)

function handleCountAdd() {
  countStore.changeCountAction(1)
}

function changeColor() {
  toggleDark(!isDark.value)
}
</script>

<template>
  <div class="main">
    <h1>{{ count }}</h1>
    <div i-ep-search icon-btn />
    <div i-carbon-4k icon-btn />
    <el-button @click="handleCountAdd">
      111
    </el-button>
    <el-button @click="changeColor">
      修改颜色
    </el-button>
  </div>
</template>

<style scoped lang="less"></style>
