/**
 * @file ttf 相关错误号定义
 * @author mengke01(kekee000@gmail.com)
 */

define(function (require) {

    var string = require('common/string');

    var error = {
        10001: '超出读取范围：${0}, ${1}',
        10002: '超出写入范围：${0}, ${1}',
        10003: '未知数据类型：${0}, ${1}',
        10004: '不支持svg解析',

        10101: '错误的ttf文件',
        10102: '错误的woff文件',
        10103: '错误的svg文件',
        10104: '读取ttf文件错误',
        10105: '读取woff文件错误',
        10106: '读取svg文件错误',
        10107: '写入ttf文件错误',
        10108: '写入woff文件错误',
        10109: '写入svg文件错误',

        10110: '读取eot文件错误',
        10111: '读取eot字体错误',

        10200: '重复的unicode代码点，字形序号：${0}',
        10201: 'ttf字形轮廓数据为空',
        10202: '不支持标志位：ARGS_ARE_XY_VALUES',
        10203: '未找到表：${0}',
        10204: '读取ttf表错误',
        10205: '未找到解压函数',

        10301: '错误的otf文件',
        10302: '读取otf表错误',
        10303: 'otf字形轮廓数据为空'
    };

    /**
     * 抛出一个异常
     *
     * @param  {number} number 异常号
     */
    error.raise = function (number) {

        var message = error[number];

        if (arguments.length > 1) {
            var args = typeof arguments[1] === 'object'
                ? arguments[1]
                : Array.prototype.slice.call(arguments, 1);
            message = string.format(message, args);
        }

        var e = new Error(message);
        e.number = number;

        throw e;
    };

    return error;
});
