import axios from 'axios';

export const getCommentList = function() {
  return (dispatch) => {
    return axios.get('http://localhost:3003/mapi/comment')
    .then(res => {
      const data = res.data.list;
      dispatch({
        type: 'HOME_LIST',
        commentList: data
      })
    })
  }
}