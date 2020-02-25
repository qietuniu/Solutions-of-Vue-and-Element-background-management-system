import * as files from '@/api/files'
// var elementcss = import 'element-ui/lib/theme-chalk/index.css'
// 合同编号
export function getContractCode() {
  const myDate = new Date()
  var Y = myDate.getFullYear()
  var M =
    myDate.getMonth() + 1 < 10
      ? '0' + (myDate.getMonth() + 1)
      : myDate.getMonth() + 1
  var D = myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate()
  var h = myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours()
  var m =
    myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes()
  var s =
    myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds()
  var S = myDate.getMilliseconds()
  if (S < 10) {
    S = '00' + S
  } else if (S < 100) {
    S = '0' + S
  }
  return 'C' + Y + M + D + h + m + s + S
}
export function getLastDay(myDate) {
  var new_year = parseInt(myDate.split('-')[0])
  var old_month = parseInt(myDate.split('-')[1])
  var new_month = old_month++
  if (new_month > 12) {
    new_month -= 12
    new_year++
  }
  var new_date = new Date(new_year, new_month, 1)

  return (
    new_year +
    '-' +
    (new_month < 10 ? '0' + new_month : new_month) +
    '-' +
    new Date(new_date.getTime() - 1000 * 60 * 60 * 24).getDate()
  )
}
export function getIntArray(start, end) {
  const intArray = []
  for (let i = start; i < end + 1; i++) {
    intArray.push(i)
  }
  return intArray
}
// 获取日期,默认当前时间
export function getDay(type, date = new Date()) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var days = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  var milliseconds = date.getMilliseconds()
  month = month < 10 ? '0' + month : month
  days = days < 10 ? '0' + days : days
  hour = hour < 10 ? '0' + hour : hour
  minute = minute < 10 ? '0' + minute : minute
  second = second < 10 ? '0' + second : second
  if (milliseconds < 100) {
    milliseconds = '0' + milliseconds
    if (milliseconds < 10) {
      milliseconds = '0' + milliseconds
    }
  }
  switch (type) {
    case 'dayTime':
      return (
        year.toString() +
        '-' +
        month.toString() +
        '-' +
        days.toString() +
        ' ' +
        hour.toString() +
        ':' +
        minute.toString() +
        ':' +
        second.toString()
      )
    case 'day':
      return year.toString() + '-' + month.toString() + '-' + days.toString()
    case 'month':
      return year.toString() + '-' + month.toString()
    case 'year':
      return year.toString()
    case 'dayString':
      return year.toString() + '年' + month.toString() + '月' + days.toString() + '日'
    case 'milliseconds':
      return (
        year.toString() +
        month.toString() +
        days.toString() +
        hour.toString() +
        minute.toString() +
        second.toString() +
        milliseconds.toString()
      )
    default:
      return year.toString() + '-' + month.toString() + '-' + days.toString()
  }
}

export function getPreMonth(date) {
  var arr = date.split('-')
  var year = arr[0] // 获取当前日期的年份
  var month = arr[1] // 获取当前日期的月份
  var day = arr[2] // 获取当前日期的日
  // var days = new Date(year, month, 0)
  // days = days.getDate() // 获取当前日期中月的天数
  var year2 = year
  var month2 = parseInt(month) - 1
  if (month2 == 0) {
    year2 = parseInt(year2) - 1
    month2 = 12
  }
  var day2 = day
  var days2 = new Date(year2, month2, 0)
  days2 = days2.getDate()
  if (day2 > days2) {
    day2 = days2
  }
  if (month2 < 10) {
    month2 = '0' + month2
  }
  var t2 = year2 + '-' + month2 + '-' + day2
  return t2
}

export function getNextMonth(date) {
  var arr = date.split('-')
  var year = arr[0] // 获取当前日期的年份
  var month = arr[1] // 获取当前日期的月份
  var day = arr[2] // 获取当前日期的日
  // var days = new Date(year, month, 0)
  // days = days.getDate() // 获取当前日期中的月的天数
  var year2 = year
  var month2 = parseInt(month) + 1
  if (month2 == 13) {
    year2 = parseInt(year2) + 1
    month2 = 1
  }
  var day2 = day
  var days2 = new Date(year2, month2, 0)
  days2 = days2.getDate()
  if (day2 > days2) {
    day2 = days2
  }
  if (month2 < 10) {
    month2 = '0' + month2
  }

  var t2 = year2 + '-' + month2 + '-' + day2
  return t2
}

// 对象转数组
export function objToArr(object) {
  var arr = []
  var i = 0
  for (var item in object) {
    arr[i] = object[item]
    i++
  }
  return arr
}

// 上传文件
export function uploadCommon(f, name) {
  const param = new FormData()
  const timestamp = new Date().getTime()
  param.append('file', f.file)
  param.append('code', timestamp)
  param.append('note', name)
  param.append('name', name + '_' + timestamp)
  param.append('enabled', 2)
  return new Promise((resolve, reject) => {
    files
      .createSetting(param)
      .then(response => {
        resolve(response.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

// 随机生成key
export function randomKey() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

// 导出过滤数据
export function formatJson(filterVal, jsonData) {
  return jsonData.map(v => filterVal.map(j => v[j]))
}

// 打印
export function print(content, w = null, h = null) {
  // Fixes dual-screen position                         Most browsers      Firefox
  const dualScreenLeft =
    window.screenLeft !== undefined ? window.screenLeft : screen.left
  const dualScreenTop =
    window.screenTop !== undefined ? window.screenTop : screen.top

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
      ? document.documentElement.clientWidth
      : screen.width
  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
      ? document.documentElement.clientHeight
      : screen.height
  w = +w === 0 ? width : w
  h = +h === 0 ? height : h
  const left = width / 2 - w / 2 + dualScreenLeft
  const top = height / 2 - h / 2 + dualScreenTop
  var myWindow = window.open(
    '',
    '打印',
    'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width=' +
      w +
      ', height=' +
      h +
      ', top=' +
      top +
      ', left=' +
      left
  )
  var style =
    "<style type='text/css'>.el-row::before{content: ''} .el-row {box-sizing: border-box;-webkit-box-sizing: border-box}.el-row::after, .el-row::before {display: table;} .el-row::after {clear: both;}[class*=el-col-] {float: left;-webkit-box-sizing: border-box;box-sizing: border-box;}.el-col-4 {width: 16.66667%;}.el-col-8 {width: 33.33333%;}.el-col-12 {width: 50%;}.el-col-20 {width: 83.33333%;}.el-col-24 {width: 100%;}.title {font-weight: bold;font-size: 18px;color: #212121;margin-bottom: 16px;text-align: center;}.time {float: left;font-size: 14px;color: #212121;}.time span {color: #616161;margin-right: 16px;}.printTable {border: 1px solid #9e9e9e;border-bottom: none;border-right: none;margin-bottom: 12px;}.printTable .el-col {min-height: 41px;line-height: 40px;color: #616161;border-bottom: 1px solid #9e9e9e;border-right: 1px solid #9e9e9e;padding: 0 12px;box-sizing: border-box;}.printTable .el-col:last-child {border-right: 1px solid #9e9e9e;}.printTable .el-col.el-col-8, .printTable .el-col.el-col-20 {color: #212121;} .orderWrapper .customerWrapper{color:#606266} .feeTitle {text-align: center;font-size: 22px;font-weight: 'bold';color: #212121;margin-bottom: 25px;}.feeDesc{text-indent:2em;font-size:14px;margin-bottom:15px}.feeFooter-title{font-size:16px;margin-top:15px;text-indent:2em}.feeFooter-item{font-size:16px;line-height:24px;margin-top:5px}.feeFooter-sign{display:flex;flex-wrap:wrap;border-top:1px solid #efefef;padding-top:10px;margin-top:10px}.feeFooter-sign .flex{font-size:16px;line-height:24px;flex:1 1 50%;margin-bottom:5px}.commonTable{width:100%;border-top:1px solid #e0e0e0;border-right:1px solid #e0e0e0;font-size:15px;color: #606266;}.commonTable .flex1{flex:1;border-left:1px solid #e0e0e0;border-bottom:1px solid #e0e0e0;text-align:center;padding:10px 0;word-break: break-all;}.commonTable .flex2{flex:2}.flex15{flex:1.5}.commonTable .flex3{flex:3}.commonTable .tableTitle{display:flex;background-color:#f5f5f5}.commonTable .tableTitle .flex1{color:#212121}.commonTable .tableItem{display:flex}</style>"
  myWindow.document.write(content + style)
  myWindow.focus()
  myWindow.document.close() // 关闭document的输出流, 显示选定的数据
  myWindow.print() // 打印当前窗口
  return myWindow
}
