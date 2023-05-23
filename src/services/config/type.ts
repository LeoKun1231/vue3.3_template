/*
 * @Author: hqk
 * @Date: 2022-12-21 19:35:13
 * @LastEditors: hqk
 * @LastEditTime: 2022-12-23 19:01:07
 * @Description:
 */
import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface AppInterceptor<T> {
  requestSuccessFn?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export default interface AppRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: AppInterceptor<T>
}
