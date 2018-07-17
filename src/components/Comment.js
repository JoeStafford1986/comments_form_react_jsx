import React from 'react';

class Comment extends React.Component {

  render() {
    return (
      <div className="comment">
        <h4>{this.props.author}</h4>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

export default Comment;
