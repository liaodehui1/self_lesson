const baseUrl = 'https://nc.meituan.com/ptapi'
let api = {
  getScenesList:`${baseUrl}/getScenesList`,
  getHotFilms:`${baseUrl}/getHotFilms`,
  getComingFilms:`${baseUrl}/getComingFilms`,
  minsuCitys:`${baseUrl}/minsuCitys`,
  minsu:`${baseUrl}/minsu`,
  recommends:`${baseUrl}/recommends`
}

module.exports = api