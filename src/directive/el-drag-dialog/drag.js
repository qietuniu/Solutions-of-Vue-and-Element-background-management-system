/*
 * @Author: qietuniu
 * @Date: 2020-06-15 11:05:19
 * @Last Modified by: qietuniu
 * @Last Modified time: 2020-06-15 11:17:58
 * @description: addResizeListener/removeResizeListener
 */

import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'

/**
 * 获取样式
 * currentStyle:该属性只兼容IE,不兼容火狐和谷歌;getComputedStyle:该属性是兼容火狐谷歌,不兼容IE
 */
const getStyle = (function() {
  if (window.document.currentStyle) {
    return (dom, attr) => dom.currentStyle[attr]
  } else {
    return (dom, attr) => getComputedStyle(dom, false)[attr]
  }
})()

/**
 * 默认弹框参数
 * @param {*} el
 * @param {*} binding:https://cn.vuejs.org/v2/guide/custom-directive.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0
 * @param {*} vnode
 */
const init = (el, binding, vnode) => {
  const dragDom = el.querySelector('.el-dialog')
  const { value } = binding
  const width = (value && value.width) || '50%'
  const height = (value && value.height) || 'auto'
  const marginTop = (value && value.marginTop) || '15vh'

  dragDom.style.cssText += `;top:0px;left:0px;margin:${marginTop} auto 0px auto;height:${height};width:${width}; `
}

export default {
  bind(el, binding, vnode) {
    el.resizeListener = () => {
      init(el, binding, vnode)
    }
    // parameter 1 is must be "Element" type
    addResizeListener(window.document.body, el.resizeListener)
    const dialogHeaderEl = el.querySelector('.el-dialog__header')
    const dragDom = el.querySelector('.el-dialog')
    // const { value } = binding
    let isFullScreen = false
    let nowHight = 0
    let nowWidth = 0
    let nowMarginTop = 0
    dialogHeaderEl.style.cssText += ';cursor:move;'
    // 1.双击全屏
    dialogHeaderEl.ondblclick = (e) => {
      if (!isFullScreen) {
        nowHight = dragDom.clientHeight
        nowWidth = dragDom.clientWidth
        nowMarginTop = dragDom.style.marginTop == '0px' ? dragDom.style.top : dragDom.style.marginTop
        dragDom.style.left = 0
        dragDom.style.top = 0
        dragDom.style.height = '100VH'
        dragDom.style.width = '100VW'
        dragDom.style.marginTop = 0
        isFullScreen = true
        dialogHeaderEl.style.cursor = 'initial'
      } else {
        dragDom.style.height = nowHight + 'px'
        dragDom.style.width = nowWidth + 'px'
        dragDom.style.marginTop = nowMarginTop
        isFullScreen = false
        dialogHeaderEl.style.cursor = 'move'
      }
    }
    // 2.拖拽
    dialogHeaderEl.onmousedown = (e) => {
      // 当前弹出框距离可视区域距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft
      const disY = e.clientY - dialogHeaderEl.offsetTop

      const dragDomWidth = dragDom.offsetWidth
      const dragDomHeight = dragDom.offsetHeight

      const screenWidth = document.body.clientWidth
      const screenHeight = document.body.clientHeight

      const minDragDomLeft = dragDom.offsetLeft
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth

      const minDragDomTop = dragDom.offsetTop
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight

      // 获取到的值带px 正则匹配替换
      let styL = getStyle(dragDom, 'left')
      let styT = getStyle(dragDom, 'top')
      let styMT = getStyle(dragDom, 'margin-top')
      if (styL.includes('%')) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100)
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100)
        styMT = +document.body.clientHeight * (+styMT.replace(/\%/g, '') / 100)
      } else {
        styL = +styL.replace(/\px/g, '')
        styT = +styT.replace(/\px/g, '')
        styMT = +styMT.replace(/\px/g, '')
      }

      document.onmousemove = function(e) {
        let left = e.clientX - disX
        let top = e.clientY - disY
        // 边界
        if (-(left) > minDragDomLeft) {
          left = -minDragDomLeft
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft
        }

        if (-(top) > minDragDomTop) {
          top = -minDragDomTop
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop
        }
        // 移动当前元素
        dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT + styMT}px;margin-top:0px`
        vnode.child.$emit('dragDialog')
      }
      document.onmouseup = function(e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  },
  inserted(el, binding, vnode) {
    // 初始化位置
    init(el, binding, vnode)
  },
  update(el, binding, vnode) {
    // 初始化位置
    init(el, binding, vnode)
  },
  unbind(el) {
    removeResizeListener(window.document.body, el.resizeListener)
  }
}
