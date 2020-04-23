/*
 * 功能 : 封装通用常量与公共方法
 * 作者 : 罗永梅（381612175@qq.com）
 * 日期 : 2017-8-31
 * 版本 : version 1.0
 */
/* eslint-disable */
export default {
    /* 通用正则表达式 */
    regUserName: /^(?![a-zA-Z]+$)[a-zA-Z][a-zA-Z0-9]{5,15}$/,
    // 真实姓名
    regRealName: /^[\u4E00-\u9FA5](([\u4E00-\u9FA5]|·(?!·))){0,18}[\u4E00-\u9FA5]$/,
    // 统一社会信用代码
    regUscCode: /^[0-9A-ZW]{18}$/,
    // 银行账户
    regBankAccount: /^[1-9]\d{7,25}$/,
    // 邮政编码正则表达式
    regPostCode: /^[1-9]\d{5}$/,
    // 邮箱正则表达式
    regEmail: /^[\.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    // 企业单位名称
    regCompanyName: /^[\u4E00-\u9FA5a-zA-Z]((?![·\.\(\)（）]{2,4})([\u4E00-\u9FA5a-zA-Z·\.\(\)（）])){0,98}[\u4E00-\u9FA5]$/,
    // 手机号正则表达式
    regMobile: /^1(3|4|5|7|8)\d{9}$/,
    // 手机号正则表达式
    regPassword: /^[\w]{6,12}$/,
    // 普通电话(包含手机和座机)正则表达式
    regPhone: /^(1\d{10}$)|(((400)-(\d{3})-(\d{4}))|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{3,7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/,
    // 网站地址正则表达式
    regWebsite: /^(http|https):\/\/[\u4E00-\u9FA5A\w\-_]+(\.[\u4E00-\u9FA5A\w\-_]+)+([\u4E00-\u9FA5A\w\-\.,@?^=%&amp;:/~\+#]*[\u4E00-\u9FA5A\w\-\@?^=%&amp;/~\+#])?/,

    // 启动全屏
    // LaunchFullScreen: (element) => {
    //     if(element.requestFullscreen) element.requestFullscreen();
    //     else if(element.mozRequestFullScreen) element.mozRequestFullScreen();
    //     else if(element.webkitRequestFullscreen) element.webkitRequestFullscreen();
    //     else if(element.msRequestFullscreen) element.msRequestFullscreen();
    // },
    // // 退出全屏
    // ExitFullscreen: () => {
    //     if(document.exitFullscreen) document.exitFullscreen();
    //     else if(document.mozCancelFullScreen) document.mozCancelFullScreen();
    //     else if(document.webkitExitFullscreen) document.webkitExitFullscreen();
    // }
}
