<!--
 * @Author: hqk
 * @Date: 2022-12-21 19:20:45
 * @LastEditors: hqk
 * @LastEditTime: 2023-05-21 15:05:23
 * @Description:
-->
<script setup lang="ts">
import ErrorImg from '~/assets/img/error.jpg'

const router = useRouter()

function handleRefresh() {
  location.reload()
}

function handleBack() {
  router.back()
}
</script>

<template>
  <div class="not-found flex items-center justify-center">
    <div class="not-found__body flex flex-col items-center border-2 border-gray-50 rounded-3xl px-20 py-12 shadow-xl">
      <div class="not-found__bg">
        <img :src="ErrorImg">
      </div>
      <div class="not-found__title mt-6 text-4xl">
        糟糕，网页出现故障或不存在！
      </div>
      <div class="not-found__desc my-8 text-center text-2xl">
        我们正在尝试解决您遇到的错误，请重试。 🤗
      </div>
      <div class="not-found__btn">
        <el-button round auto-insert-space @click="handleRefresh">
          刷新
        </el-button>
        <el-button type="primary" round auto-insert-space class="!ml-14" @click="handleBack">
          返回
        </el-button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.not-found {
  height: 100%;
  &__btn {
    --el-font-size-base: 24px;
    .el-button {
      padding: 20px 40px;
    }
  }
}
</style>
