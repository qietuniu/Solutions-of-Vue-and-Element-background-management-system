import drag from './drag'

const install = function(Vue) {
  Vue.directive('el-drag-dialog', drag)
}

if (window.Vue) {
  window['el-drag-dialog'] = drag
  Vue.use(install); // eslint-disable-line
}

drag.install = install
export default drag
// https://www.jianshu.com/p/c3ce06c423af?tdsourcetag=s_pctim_aiomsg
// https://blog.csdn.net/diaojw090/article/details/90232600
// https://blog.csdn.net/sqlquan/article/details/92806779
// https://www.jianshu.com/p/0daf43364da5
