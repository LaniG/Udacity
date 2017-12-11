import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import Comment from "./Comment";
import SortFilters from "../common/SortFilters";
import { addComment, fetchComments, deleteComment, vote } from "./CommentActions";
import generateUUID from "../../utils";
import auth from "../auth/auth";
import _ from "lodash";

class CommentsContainer extends Component {
  state = {
    commentBody: "",
    sortFilter: "timestamp"
  };

  componentDidMount() {
    this.props.fetchComments(this.props.postId);
  }

  handleVote = (commentId, choice) => {
    this.props.vote(commentId, choice);
  };

  handleSortFilterChanged = e => {
    e.preventDefault();
    const innerText = e.target.innerText;
    const sortFilter = innerText === "Votes" ? "voteScore" : "timestamp";

    this.setState({
      sortFilter: sortFilter
    });
  };

  addComment = () => {
    if (!this.commentBody.value) {
      alert("Comment cannot be empty");
      return;
    }
    const comment = {
      id: generateUUID(),
      body: this.commentBody.value,
      author: auth.fullName,
      parentId: this.props.postId,
      timestamp: Date.now()
    };

    this.setState({
      commentBody: ""
    });

    this.props.addComment(this.props.postId, comment);
  };

  handleDelete = commentId => {
    this.props.deleteComment(commentId);
  };

  handleChange = e => {
    this.setState({
      commentBody: e.target.innerHtml
    });
  };

  _renderComments() {
    if (this.props.comments.length === 0) {
      return null;
    }

    let comments = this.props.comments;
    if (this.state.sortFilter === "timestamp") {
      comments = _.orderBy(comments, ["timestamp"], ["asc"]);
    } else {
      comments = _.orderBy(comments, ["voteScore"], ["desc"]);
    }

    return (
      <div>
        <h3>{comments.length} Comments</h3>
        <div className="ui cards">
          {comments.map(x => (
            <Comment
              key={x.id}
              id={x.id}
              author={x.author}
              body={x.body}
              commentDate={x.timestamp}
              voteScore={x.voteScore}
              onDelete={this.handleDelete}
              onVote={this.handleVote}
            />
          ))}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="ui form">
          <textarea
            rows="3"
            value={this.state.commentBody}
            onChange={this.handleChange}
            ref={input => (this.commentBody = input)}
            placeholder="Add Comment"
          />
          <br />
          <br />
          <Button
            primary
            content="Add Comment"
            icon="add"
            labelPosition="right"
            onClick={() => this.addComment()}
          />
        </div>
        <br />
        <SortFilters filter={this.state.sortFilter} filterChanged={this.handleSortFilterChanged} />
        <br />
        {this._renderComments()}
      </div>
    );
  }
}

CommentsContainer.propTypes = {
  comments: PropTypes.array.isRequired
};

const mapStateToProps = ({ comments }) => {
  const items = comments.items || [];

  return {
    comments: items
  };
};

export default connect(mapStateToProps, { addComment, deleteComment, fetchComments, vote })(
  CommentsContainer
);
