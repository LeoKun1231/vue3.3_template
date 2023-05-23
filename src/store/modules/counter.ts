/*
 * @Author: hqk
 * @Date: 2023-05-21 15:31:57
 * @LastEditors: hqk
 * @LastEditTime: 2023-05-21 22:03:08
 * @Description:
 */

export const useCouterStore = defineStore('couter', () => {
  const count = ref(0)

  function changeCountAction(num: number) {
    count.value = count.value + num
  }

  return {
    count,
    changeCountAction,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCouterStore as any, import.meta.hot))
