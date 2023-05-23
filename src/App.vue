<!--
 * @Author: leo
 * @Date: 2023-05-23 16:17:29
 * @LastEditors: leo
 * @LastEditTime: 2023-05-23 17:33:40
 * @Description:
-->
<script setup lang="ts">
import { ElConfigProvider } from 'element-plus'
</script>

<template>
  <ElConfigProvider>
    <RouterView />
  </ElConfigProvider>
</template>

<style scoped lang="less"></style>
