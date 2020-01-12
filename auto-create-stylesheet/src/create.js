const fs = require('fs')

function create(inputPath, outputPath) {
  fs.readFile(inputPath, (err, data) => {
    if (err) {
      console.log(err)
      throw err
    }
    let jsx = data.toString()
    let reg = /(?<=styles.).*?[\}\,\(\]]/g
    let res = jsx.match(reg)
    // console.log(res)
    let styles = {}
    res.forEach(style => {
      const end = style.length - 1
      const key = style.substring(0, end)
      if (style[end] === '(') {
        styles[key] = () => { }
      } else {
        styles[key] = `{}`
      }
    })
    const styles_str = transformToString(styles)
    let template = `import { StyleSheet } from 'react-native'
    
export default StyleSheet.create(${styles_str})`
    outputPath = formatOutputPath(inputPath, outputPath)
    output(outputPath, template)
  })
}

function transformToString(styles) {
  let str = JSON.stringify(styles, (k, v) => {
    if (typeof v === 'function') return `() => {}`
    else return v
  }, '\t')
  return str.replace(/\"/g, '').replace(/\{\}/g, '{\r\n\r\n\t}')
}

function formatOutputPath(inputPath, outputPath) {
  if (!outputPath.match(/.js/)) {
    const start = inputPath.lastIndexOf('\\') + 1
    const end = inputPath.lastIndexOf('.jsx')
    outputPath.lastIndexOf('\\') !== outputPath.length - 1 ?
      outputPath += ('\\' + inputPath.substring(start, end)) + '.js' :
      outputPath += inputPath.substring(start, end) + '.js' 
  }
  return outputPath
}

function output(outputPath, template) {
  fs.writeFile(outputPath, template, 'utf8', (err) => {
    if (err) {
      console.log(err)
      throw err
    } else {
      console.log('生成成功')
    }
  })
}

module.exports = create