import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost, deletePost } from '../../../actions/post_actions';
import { closeModal } from '../../../actions/modal_actions';
import TextForm from './link_form';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const postId = ownProps.postId;
  const posts = state.entities.posts;
  const post = posts[postId];
  return ({
    currentUser: currentUser,
    post: post,
    formType: "Edit Text",
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (post) => dispatch(updatePost(post)),
    deletePost: (id) => dispatch(deletePost(id)),
    otherForm: (
      <button onClick={() => dispatch(openModal('Edit Text'))}>
        Edit
      </button>
    ),
    closeModal: () => dispatch(closeModal),

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TextForm));