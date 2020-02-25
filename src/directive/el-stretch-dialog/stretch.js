import { addResizeListener, removeResizeListener } from 'element-ui/src/utils/resize-event'

const getStyle = (function() {
  if (window.document.currentStyle) {
    return (dom, attr) => dom.currentStyle[attr]
  } else {
    return (dom, attr) => getComputedStyle(dom, false)[attr]
  }
})()

const init = (el, binding, vnode) => {
  const dragDom = el.querySelector('.el-dialog')
  const { value } = binding
  let width = '50%'
  let height = 'auto'
  let marginTop = '15vh'
  if (marginTop.includes('vh')) {
    marginTop = +document.body.clientWidth * (+marginTop.split('vh')[0] / 100)
  } else {
    marginTop = +marginTop.replace(/\px/g, '')
  }
  if ((value && value.width)) {
    if (value.width.includes('%')) {
      width = +document.body.clientWidth * (+value.width.replace(/\%/g, '') / 100)
    } else {
      width = +value.width.replace(/\px/g, '')
    }
    if (width > document.body.clientWidth) {
      width = document.body.clientWidth + 'px'
    } else {
      width = value.width
    }
  }
  if ((value && value.height)) {
    if (height.includes('%')) {
      height = +document.body.clientHeight * (+value.height.replace(/\%/g, '') / 100)
    } else {
      height = +value.height.replace(/\px/g, '')
    }
    if (height + marginTop > document.body.clientHeight) {
      height = document.body.clientHeight - marginTop + 'px'
    } else {
      height = value.height
    }
  }

  dragDom.style.cssText += `;top:0px;left:0px;margin:15vh auto 0px auto;height:${height};width:${width}; `
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
    const { value } = binding
    let isFullScreen = false
    let nowHight = 0
    let nowWidth = 0
    let nowMarginTop = 0
    const minWidth = (value && value.width) || '50%'
    const minHeight = (value && value.height) || 300
    dialogHeaderEl.style.cssText += ';cursor:move;'
    // 1.双击全屏
    dialogHeaderEl.ondblclick = (e) => {
      if (!isFullScreen) {
        nowHight = dragDom.clientHeight
        nowWidth = dragDom.clientWidth
        debugger
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
    // 3.拉伸
    dragDom.onmousemove = (e) => {
      if (e.clientX > dragDom.offsetLeft + dragDom.clientWidth - 10 || dragDom.offsetLeft + 10 > e.clientX) {
        dragDom.style.cursor = 'w-resize'
      } else if (el.scrollTop + e.clientY > dragDom.offsetTop + dragDom.clientHeight - 10) {
        dragDom.style.cursor = 's-resize'
      } else {
        dragDom.style.cursor = 'default'
        dragDom.onmousedown = null
      }

      dragDom.onmousedown = (e) => {
        const clientX = e.clientX
        const clientY = e.clientY

        const ELscrollTop = el.scrollTop

        const dragDomWidth = dragDom.offsetWidth
        const dragDomHeight = dragDom.offsetHeight

        const screenWidth = document.body.clientWidth
        const screenHeight = document.body.clientHeight

        const dragDomLeft = dragDom.offsetLeft
        const dragDomRight = screenWidth - dragDom.offsetLeft - dragDomWidth
        const dragDomTop = dragDom.offsetTop
        const dragDomBottom = screenHeight - dragDom.offsetTop - dragDomHeight

        dragDom.style.userSelect = 'none'

        // 判断点击的位置是不是为头部

        if (clientX > dragDomLeft && clientX < dragDomLeft + dragDomWidth && clientY > dragDomTop && clientY < dragDomTop + 100) {

          // 如果是头部在此就不做任何动作，以上有绑定dialogHeaderEl.onmousedown = moveDown;

        } else {
          document.onmousemove = function(e) {
            e.preventDefault() // 移动时禁用默认事件

            // 左侧鼠标拖拽位置
            const diffX = clientX - e.clientX
            const minDiffX = dragDomRight > dragDomLeft ? dragDomLeft : dragDomRight
            if (clientX > dragDomLeft && clientX < dragDomLeft + 10) {
              // 往左拖拽
              if (clientX > e.clientX) {
                if (diffX < minDiffX) {
                  dragDom.style.width = dragDomWidth + diffX * 2 + 'px'
                } else {
                  dragDom.style.width = dragDomWidth + minDiffX * 2 + 'px'
                }
              }
              // 往右拖拽
              if (clientX < e.clientX && dragDom.clientWidth >= minWidth) {
                dragDom.style.width = dragDomWidth - diffX * 2 + 'px'
              }
            }

            // 右侧鼠标拖拽位置

            if (clientX > dragDomLeft + dragDomWidth - 10 && clientX < dragDomLeft + dragDomWidth) {
              // 往左拖拽

              if (clientX > e.clientX && dragDom.clientWidth >= minWidth) {
                dragDom.style.width = dragDomWidth - diffX * 2 + 'px'
              }

              // 往右拖拽
              if (clientX < e.clientX) {
                if (-(diffX) < minDiffX) {
                  dragDom.style.width = dragDomWidth - diffX * 2 + 'px'
                } else {
                  dragDom.style.width = dragDomWidth + minDiffX * 2 + 'px'
                }
              }
            }

            // 底部鼠标拖拽位置
            const diffY = e.clientY - clientY
            if (ELscrollTop + clientY > dragDomTop + dragDomHeight - 10 && ELscrollTop + clientY < dragDomTop + dragDomHeight) {
              // 往上拖拽

              if (diffY < 0 && dragDom.clientHeight >= minHeight) {
                dragDom.style.height = dragDomHeight + diffY + 'px'
              }

              // 往下拖拽

              if (diffY > 0) {
                if (diffY < dragDomBottom) {
                  dragDom.style.height = dragDomHeight + diffY + 'px'
                } else {
                  dragDom.style.height = dragDomHeight + dragDomBottom + 'px'
                }
              }
            }
          }

          // 拉伸结束

          document.onmouseup = function(e) {
            document.onmousemove = null

            document.onmouseup = null
          }
        }
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

// export default {
//   bind(el, binding, vnode, oldVnode) {
//     // 弹框可拉伸最小宽高

//     const minWidth = 400

//     const minHeight = 300

//     // 初始非全屏

//     let isFullScreen = false

//     // 当前宽高

//     let nowWidth = 0

//     // let nowHight = 0

//     // 当前顶部高度

//     let nowMarginTop = 0

//     // 获取弹框头部（这部分可双击全屏）

//     const dialogHeaderEl = el.querySelector('.el-dialog__header')

//     // 弹窗

//     const dragDom = el.querySelector('.el-dialog')

//     // 给弹窗加上overflow auto；不然缩小时框内的标签可能超出dialog；

//     dragDom.style.overflow = 'auto'

//     // 清除选择头部文字效果

//     // dialogHeaderEl.onselectstart = new Function("return false");

//     // 头部加上可拖动cursor

//     dialogHeaderEl.style.cursor = 'move'

//     // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);

//     const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)

//     const moveDown = (e) => {
//       // 鼠标按下，计算当前元素距离可视区的距离

//       const disX = e.clientX - dialogHeaderEl.offsetLeft

//       const disY = e.clientY - dialogHeaderEl.offsetTop

//       // 获取到的值带px 正则匹配替换

//       let styL, styT

//       // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px

//       if (sty.left.includes('%')) {
//         styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100)

//         styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100)
//       } else {
//         styL = +sty.left.replace(/\px/g, '')

//         styT = +sty.top.replace(/\px/g, '')
//       };

//       document.onmousemove = function(e) {
//         // 通过事件委托，计算移动的距离

//         const l = e.clientX - disX

//         const t = e.clientY - disY

//         // 移动当前元素

//         dragDom.style.left = `${l + styL}px`

//         dragDom.style.top = `${t + styT}px`

//         // 将此时的位置传出去

//         // binding.value({x:e.pageX,y:e.pageY})
//       }

//       document.onmouseup = function(e) {
//         document.onmousemove = null

//         document.onmouseup = null
//       }
//     }

//     dialogHeaderEl.onmousedown = moveDown

//     // 双击头部全屏效果

//     dialogHeaderEl.ondblclick = (e) => {
//       if (isFullScreen == false) {
//         // nowHight = dragDom.clientHeight

//         nowWidth = dragDom.clientWidth

//         nowMarginTop = dragDom.style.marginTop

//         dragDom.style.left = 0

//         dragDom.style.top = 0

//         dragDom.style.height = '100VH'

//         dragDom.style.width = '100VW'

//         dragDom.style.marginTop = 0

//         isFullScreen = true

//         dialogHeaderEl.style.cursor = 'initial'

//         dialogHeaderEl.onmousedown = null
//       } else {
//         dragDom.style.height = 'auto'

//         dragDom.style.width = nowWidth + 'px'

//         dragDom.style.marginTop = nowMarginTop

//         isFullScreen = false

//         dialogHeaderEl.style.cursor = 'move'

//         dialogHeaderEl.onmousedown = moveDown
//       }
//     }

//     dragDom.onmousemove = function(e) {
//       // const moveE = e

//       if (e.clientX > dragDom.offsetLeft + dragDom.clientWidth - 10 || dragDom.offsetLeft + 10 > e.clientX) {
//         dragDom.style.cursor = 'w-resize'
//       } else if (el.scrollTop + e.clientY > dragDom.offsetTop + dragDom.clientHeight - 10) {
//         dragDom.style.cursor = 's-resize'
//       } else {
//         dragDom.style.cursor = 'default'

//         dragDom.onmousedown = null
//       }

//       dragDom.onmousedown = (e) => {
//         const clientX = e.clientX

//         const clientY = e.clientY

//         const dragDomWidth = dragDom.clientWidth

//         const dragDomHeight = dragDom.clientHeight

//         const dragDomLeft = dragDom.offsetLeft

//         const dragDomTop = dragDom.offsetTop

//         dragDom.style.userSelect = 'none'

//         const ELscrollTop = el.scrollTop

//         // 判断点击的位置是不是为头部

//         if (clientX > dragDomLeft && clientX < dragDomLeft + dragDomWidth && clientY > dragDomTop && clientY < dragDomTop + 100) {

//           // 如果是头部在此就不做任何动作，以上有绑定dialogHeaderEl.onmousedown = moveDown;

//         } else {
//           document.onmousemove = function(e) {
//             e.preventDefault() // 移动时禁用默认事件

//             // 左侧鼠标拖拽位置

//             if (clientX > dragDomLeft && clientX < dragDomLeft + 10) {
//               // 往左拖拽

//               if (clientX > e.clientX) {
//                 dragDom.style.width = dragDomWidth + (clientX - e.clientX) * 2 + 'px'
//               }

//               // 往右拖拽

//               if (clientX < e.clientX) {
//                 if (dragDom.clientWidth < minWidth) {

//                 } else {
//                   dragDom.style.width = dragDomWidth - (e.clientX - clientX) * 2 + 'px'
//                 }
//               }
//             }

//             // 右侧鼠标拖拽位置

//             if (clientX > dragDomLeft + dragDomWidth - 10 && clientX < dragDomLeft + dragDomWidth) {
//               // 往左拖拽

//               if (clientX > e.clientX) {
//                 if (dragDom.clientWidth < minWidth) {

//                 } else {
//                   dragDom.style.width = dragDomWidth - (clientX - e.clientX) * 2 + 'px'
//                 }
//               }

//               // 往右拖拽

//               if (clientX < e.clientX) {
//                 dragDom.style.width = dragDomWidth + (e.clientX - clientX) * 2 + 'px'
//               }
//             }

//             // 底部鼠标拖拽位置

//             if (ELscrollTop + clientY > dragDomTop + dragDomHeight - 20 && ELscrollTop + clientY < dragDomTop + dragDomHeight) {
//               // 往上拖拽

//               if (clientY > e.clientY) {
//                 if (dragDom.clientHeight < minHeight) {

//                 } else {
//                   dragDom.style.height = dragDomHeight - (clientY - e.clientY) * 2 + 'px'
//                 }
//               }

//               // 往下拖拽

//               if (clientY < e.clientY) {
//                 dragDom.style.height = dragDomHeight + (e.clientY - clientY) * 2 + 'px'
//               }
//             }
//           }

//           // 拉伸结束

//           document.onmouseup = function(e) {
//             document.onmousemove = null

//             document.onmouseup = null
//           }
//         }
//       }
//     }
//   }
// }
