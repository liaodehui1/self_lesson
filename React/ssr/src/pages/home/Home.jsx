import React, { Component } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/withStyles';
import { getCommentList } from '../../store/action/homeAction';
import style from './Home.css';

class Home extends Component {
  componentDidMount() {
    console.log('Home componentDidMounted')
    this.props.getCommentList();
  }
  render() {
    const { commentList } = this.props;
    return ( 
      <div>
        <h3 className={style.title}>Home</h3>
        {
          commentList.map((comment, i) => {
            return (
            <li key={i}>
              {
              comment.content
              }</li>
            )
          })
        }
      </div>
     );
  }
}

// 所有的loadData 都是promise
Home.loadData = function(store) {
  return store.dispatch(getCommentList())
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCommentList: () => {
      dispatch(getCommentList())
    }
  }
}
const mapStateToProps = (state) => {
  return {
    commentList: state.home.commentList
  }
}
export default connect(mapStateToProps,
  mapDispatchToProps)(withStyles(style)(Home));