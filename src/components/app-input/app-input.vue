<script setup lang='ts'>
const { name } = withDefaults(defineProps<{
  name: string
}>(), {
  name: 'defaultName',
})
const inputValue = defineModel<string>()
</script>

<template>
  <div my-10>
    <div my-2>
      name: {{ name }}
    </div>
    <ElInput v-model="inputValue" />
  </div>
</template>

<style scoped lang="less">
</style>
