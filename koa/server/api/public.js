const baseUrl = 'https://www.meituan.com/ptapi'
let api = {
  suggest:`${baseUrl}/suggest`,
  recommendList:`${baseUrl}/poi/recommend-list`,
  getcomment:`${baseUrl}/poi/getcomment`
}

module.exports = api