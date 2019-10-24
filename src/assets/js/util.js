function getUrlParam(name){
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r!=null){
    return  decodeURI(r[2]);
  }
  return '';
}
function formateDate(date, format){
  const paddNum = function (num) {
    num += "";
    return num.replace(/^(\d)$/, "0$1");
  };
  if (typeof date === 'string') {
    if(date.indexOf('.0')==date.length-2){ //末尾有.0导致ios返回invalid date
      date = date.substring(0,date.length - 2);
    }
    date = date.replace(/-/g,'/');//兼容ios,xxxx-xx-xx会返回invalid date
    date = new Date(date);
  }
  let getWeekDay = function (d) {
    if (d == 1) {
      return "星期一";
    } else if (d == 2) {
      return "星期二";
    } else if (d == 3) {
      return "星期三";
    } else if (d == 4) {
      return "星期四";
    } else if (d == 5) {
      return "星期五";
    } else if (d == 6) {
      return "星期六";
    } else if (d == 0) {
      return "星期日";
    }
  };
  // 指定格式字符
  const cfg = {
    yyyy: date.getFullYear(), // 年 : 4位
    yy: date.getFullYear().toString().substring(2),// 年 : 2位
    M: date.getMonth() + 1, // 月 : 如果1位的时候不补0
    MM: paddNum(date.getMonth() + 1), // 月 : 如果1位的时候补0
    d: date.getDate(), // 日 : 如果1位的时候不补0
    dd: paddNum(date.getDate()),// 日 , 如果1位的时候补0
    h: date.getHours(), // 时
    hh: paddNum(date.getHours()), // 时,如果1位的时候补0
    m: date.getMinutes(), // 分
    mm: paddNum(date.getMinutes()), // 分,如果1位的时候补0
    s: date.getSeconds(), // 秒
    ss: paddNum(date.getSeconds()), // 秒 ,如果1位的时候补0
    w: getWeekDay(date.getDay())
    // 周几
  };
  format || (format = "yyyy-MM-dd");
  return format.replace(/([a-z])(\1)*/ig, function (m) {
    return cfg[m];
  });
}
function browserInfo(){
  const ua=navigator.userAgent;
  const info = {
    userAgent: ua,
    isAndroid: Boolean(ua.match(/android/ig)),
    isIphone: Boolean(ua.match(/iphone|ipod/ig)),
    isWeixin: Boolean(ua.match(/MicroMessenger/ig)),
    isSafari: Boolean(ua.match(/Safari/ig))
  }
  return info;
}
export default {
  getUrlParam,
  formateDate,
  browserInfo
}
