'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');

function create(inputPath, outputPath) {
  fs.readFile(inputPath, function (err, data) {
    if (err) {
      console.log(err);
      throw err;
    }
    var jsx = data.toString();
    var reg = /(?<=styles.).*?[\}\,\(\]]/g;
    var res = jsx.match(reg);
    // console.log(res)
    var styles = {};
    res.forEach(function (style) {
      var end = style.length - 1;
      var key = style.substring(0, end);
      if (style[end] === '(') {
        styles[key] = function () {};
      } else {
        styles[key] = '{}';
      }
    });
    var styles_str = transformToString(styles);
    var template = 'import { StyleSheet } from \'react-native\'\n    \nexport default StyleSheet.create(' + styles_str + ')';
    outputPath = formatOutputPath(inputPath, outputPath);
    output(outputPath, template);
  });
}

function transformToString(styles) {
  var str = (0, _stringify2.default)(styles, function (k, v) {
    if (typeof v === 'function') return '() => {}';else return v;
  }, '\t');
  return str.replace(/\"/g, '').replace(/\{\}/g, '{\r\n\r\n\t}');
}

function formatOutputPath(inputPath, outputPath) {
  if (!outputPath.match(/.js/)) {
    var start = inputPath.lastIndexOf('\\') + 1;
    var end = inputPath.lastIndexOf('.jsx');
    outputPath.lastIndexOf('\\') !== outputPath.length - 1 ? outputPath += '\\' + inputPath.substring(start, end) + '.js' : outputPath += inputPath.substring(start, end) + '.js';
  }
  return outputPath;
}

function output(outputPath, template) {
  fs.writeFile(outputPath, template, 'utf8', function (err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log('生成成功');
    }
  });
}

module.exports = create;