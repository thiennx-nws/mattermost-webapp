import PropTypes from 'prop-types';
import React from 'react';

export default class UserReplies extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    let {replyCount} = this.props
    return (
      <div className="user-replies">
        <a onClick={this.props.handleCommentClick}>
          {replyCount < 1 ? replyCount + ' Reply' : replyCount + ' Replies'}
        </a>
      </div>
    )
  }
}