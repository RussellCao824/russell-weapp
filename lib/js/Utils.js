//获取当前日期
const getNowDate = () => {
    let dateObj = new Date();
    return dateObj.getFullYear() + "-" + (dateObj.getMonth() + 1) + "-" + dateObj.getDate();
};

//获取当前月份
const getNowMonth = () => {
    let dateObj = new Date();
    return dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1);
};

//获取当前的具体时间（格式：小时:分钟）
const getNowTime = () => {
    let dateObj = new Date();
    return `${dateObj.getHours()}:${dateObj.getMinutes()}`;
};

/**
 * 将用'-'衔接的日期格式智能转换为文字
 * @param {*} date 
 */
const dateConvertText = (date) => {
    if (!date) {
        return;
    }
    const strArray = date.split('-');
    let result = '';
    switch (strArray.length) {
        case 1: result = `${strArray[0]}年`; break;
        case 2: result = `${strArray[0]}年${strArray[1]}月`; break;
        case 2: result = `${strArray[0]}年${strArray[1]}月${strArray[2]}日`; break;
        default: break;
    }
    return result;
};

//get the time of linux stamps use the format of
const getTimeByStamps = (timeStamps) => {
    if (!timeStamps) {
        return;
    }
    const date = new Date(timeStamps); //获取一个时间对象
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + ' ';
    const h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
    const m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
    const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    return Y + M + D + h + m + s;
}

/**
 * 情感记录等级码转换为等级文本表述
 * @param {*} levelCode 
 */
const emotionLevelConvert = (levelCode) => {
    let levelTitle = '';
    switch (levelCode) {
        case 1: levelTitle = '轻度'; break;
        case 2: levelTitle = '中度'; break;
        case 3: levelTitle = '重度'; break;
        default: break;
    }
    return levelTitle;
}

/**
 * 转换审核状态值为状态文字信息
 * @param Int code 
 */
const checkStatusConvert = code => {
    let status = '';
    switch (code) {
        case 1: status = '审核中'; break;
        case 2: status = '审核通过'; break;
        case 3: status = '审核失败'; break;
        default: break;
    }
    return status;
}

// 显示繁忙提示
const showBusy = text => wx.showToast({
    title: text,
    icon: 'loading',
    duration: 100000
});

// 显示成功提示
const showSuccess = text => wx.showToast({
    title: text,
    icon: 'success'
});

// 显示失败提示
const showModel = (title, content, successCallback = null) => {
    wx.hideToast();
    wx.showModal({
        title,
        content: content,
        showCancel: false,
        success: successCallback
    });
};

// 创建toast提示
const showToast = (title, mask = false, duration = 1500, icon = 'none', successCallback = null) => {
    wx.hideToast();
    wx.showToast({
        title: title,
        icon: icon,
        duration: duration,
        mask: mask,
        success: successCallback
    });
};

/**
 * get value from nested object
 * @param Object o
 * @param Array p
 * @returns any
 */
const deepGet = (o, p) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : (xs[x] === null ? null : xs[x]), o);

/**
 * get array list from m to n
 * @param Number m
 * @param Number n
 * @returns Array[Number]
 */
const range = (m, n) => Array(n - m + 1).fill().map((x, i) => m + i);

/**
 * validate the correction of the login phone number
 * @param Number phoneNumber
 * @returns Boolean
 */
const phoneValidate = (phoneNumber) => {
    //when an empty info is inputed,don't show error message
    if (phoneNumber === "") {
        return true;
    }
    let reg = /^[1]([3-9])[0-9]{9}$/; //validate rule
    return reg.test(phoneNumber);
};

/**
 * validate the correction of the smsCode for 6 characters
 * @param String smsCode
 * @returns Boolean
 */
const smsCodeValidate = (smsCode) => {
    //when an empty info is inputed,don't show error message
    if (smsCode === "") {
        return true;
    }
    let reg = /^\d{6}$/; //validate rule
    return reg.test(smsCode);
};

/*
 * scan qrcode
 * @returns Promise
 */
function scanQRCode() {
    return new Promise((resolve, reject) => {
        wx.scanCode({
            success(res) {
                return resolve(res.result)
            },
            fail() {
                return resolve(null)
            }
        })
    })
}

/**
 * graphql返回结果进行格式化处理
 * @param {*} promise 
 */
const to = promise => {
    return promise
        .then(data => ([null, data]))
        .catch(err => ([err, null]))
}

/**
 * global request error handleError
 */
const handleError = (err) => {
    let errMsg = deepGet(err, ['errors', 0, 'message']);
    if (!errMsg) {
        errMsg = '接口请求错误';
    }
    setTimeout(() => {
        showModel('提示', errMsg);
    }, 1000);
}

/**
 * emulate sleep
 */
const wait = (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve();
        }, sec * 1000);
    })
}

/**
 * get last element of array
 */
const last = (arr) => arr[arr.length - 1];

/**
 * convert url to real qr data
 */
const getQRCodeData = (url) => {
    const code = last(url.split('/'));
    if (/^[a-zA-Z0-9]+$/.test(code)) {
        return code
    } else {
        return null
    }
}

const plainStringify = (obj) => {
    return JSON.stringify(obj).replace(/\"([^(\")"]+)\":/g, "$1:")
}

/**
 * 获取当前页面绝对路径
 */
const getCurrentUrl = () => {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const url = `/${currentPage.route}`;
    return url;
}

/**
 * 验证中文名称输入(是否全为汉字)
 * @param {*} name 
 */
const chineseNameInputValidate = (name) => {
    const pattern = /^[\u4e00-\u9fa5]+$/;
    return pattern.test(name);
}

/**
 * 验证最多两位小数的金钱数额
 * @param {*} amount 
 */
const amountValidate = amount => {
    const pattern = /^(([1-9][0-9]*)|(([0]\.\d{0,2}|[1-9][0-9]*\.\d{0,2})))$/;
    return pattern.test(amount);
}

/**
 * 日期格式转为时间戳
 * @param {*} date 
 */
const dateConvertStamp = date => {
    return Date.parse(new Date(date)) / 1000;
}

/**
 * 根据当前时间判断是一天的时间区间
 */
const timeTextConvert = () => {
    // 获取当前时间
    let timeNow = new Date();
    // 获取当前小时
    let hours = timeNow.getHours();
    // 设置默认文字
    let text = '';
    // 判断当前时间段
    if (hours >= 0 && hours <= 10) {
        text = '早上好';
    } else if (hours > 10 && hours <= 14) {
        text = '中午好';
    } else if (hours > 14 && hours <= 18) {
        text = '下午好';
    } else if (hours > 18 && hours <= 24) {
        text = '晚上好';
    }
    // 返回当前时间段对应的状态
    return text;
}

/**
 * 根据机型动态计算导航栏高度
 */
const getNavigationBarHeight = () => {
    //胶囊上边框距顶部距离
    const capsuleTop = wx.getMenuButtonBoundingClientRect().top;
    //状态栏高度
    const statusBarHeight = wx.getSystemInfoSync().statusBarHeight;
    //药囊上边距状态栏下边的距离，即药囊在导航内容栏中的上下边距
    const capsuleGap = capsuleTop - statusBarHeight;
    //导航内容栏的高度动态计算
    const navContentHeight = capsuleGap * 2 + 32;
    return navContentHeight;
}

export {
    getNowDate,
    getNowMonth,
    dateConvertText,
    showBusy,
    showSuccess,
    showModel,
    deepGet,
    range,
    scanQRCode,
    to,
    phoneValidate,
    handleError,
    wait,
    last,
    getQRCodeData,
    plainStringify,
    getTimeByStamps,
    smsCodeValidate,
    checkStatusConvert,
    emotionLevelConvert,
    getCurrentUrl,
    chineseNameInputValidate,
    showToast,
    amountValidate,
    dateConvertStamp,
    getNowTime,
    timeTextConvert,
    getNavigationBarHeight
}