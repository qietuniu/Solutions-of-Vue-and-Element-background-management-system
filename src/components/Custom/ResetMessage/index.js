/*
 * @Author: qietuniu
 * @Date: 2020-06-15 10:47:34
 * @Last Modified by: qietuniu
 * @Last Modified time: 2020-06-15 10:51:34
 * @description: messageInstance存放Message实例存在时关闭后创建新实例，单例模式
 */

import { Message } from 'element-ui'
let messageInstance = null
const resetMessage = (options) => {
  if (messageInstance) {
    messageInstance.close()
  }
  messageInstance = Message(options)
}
['error', 'success', 'info', 'warning'].forEach(type => {
  resetMessage[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return resetMessage(options)
  }
})

export default resetMessage
