import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, Button, Icon } from "semantic-ui-react";
import moment from "moment";
import VoteButtons from "../common/VoteButtons";
import { editComment } from "./CommentActions";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode: false,
      commentBody: props.body
    };

    this._setEditMode = this._setEditMode.bind(this);
    this._cancelEditMode = this._cancelEditMode.bind(this);
  }

  _setEditMode() {
    this.setState({ editMode: true });
  }

  _cancelEditMode() {
    this.setState({ editMode: false });
  }

  _saveComment = () => {
    this.props
      .editComment(this.props.id, this.state.commentBody, this.props.commentDate)
      .then(_ => {
        this.setState({ editMode: false });
      });
  };

  _commentChanged = event => {
    this.setState({ commentBody: event.target.value });
  };

  _renderEditMode() {
    return (
      <form className="ui form">
        <div className="field">
          <textarea rows="3" onChange={this._commentChanged} value={this.state.commentBody} />
        </div>
      </form>
    );
  }

  render() {
    const { id, author, commentDate, voteScore, onVote, onDelete } = this.props;
    const { editMode, commentBody } = this.state;

    return (
      <Card fluid>
        <Card.Content>
          <Card.Meta>
            Posted by <Icon name="user" />
            {author} on {moment(commentDate).format("MMMM-DD-YYYY HH:mm A")}
          </Card.Meta>
          {!editMode && <Card.Description>{commentBody}</Card.Description>}
          {this.state.editMode && this._renderEditMode()}
        </Card.Content>
        <Card.Content extra>
          <div>
            {!editMode && <Button content="Edit" onClick={this._setEditMode} />}
            {editMode && (
              <span>
                <Button content="Save" onClick={this._saveComment} />
                <Button content="Cancel" onClick={this._cancelEditMode} />
              </span>
            )}
            <Button onClick={() => onDelete(id)} content="Delete" />
            <div className="right floated">
              <VoteButtons
                voteScore={voteScore}
                onUpvote={() => onVote(id, "upVote")}
                onDownvote={() => onVote(id, "downVote")}
              />
            </div>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  commentDate: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  voteScore: PropTypes.number.isRequired,
  onVote: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default connect(null, { editComment })(Comment);
