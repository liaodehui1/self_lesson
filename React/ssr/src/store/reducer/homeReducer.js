const defaultState = {
  commentList: []
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case 'HOME_LIST':
    return {
      ...state,
      commentList: action.commentList
    }
    default:
      return state
  }
}