import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Icon, Container, Header, Segment, Sidebar, Menu } from "semantic-ui-react";
import moment from "moment";
import { fetchPostDetails, voteOnPost, deletePost, FETCH_POST_DETAILS } from "./PostActions";
import CommentsContainer from "../comments/CommentsContainer";
import VoteButtons from "../common/VoteButtons";

class Post extends Component {
  state = {
    showComments: false,
    voteChoice: "",
    adminMode: false,
    postId: this.props.match.params.id
  };

  componentWillMount() {
    this.props.fetchPostDetails(this.state.postId).catch(error => {
      this.props.history.push("/404");
    });
  }

  toggleAdminMode = () => {
    this.setState({
      adminMode: !this.state.adminMode
    });
  };

  showComments = e => {
    this.setState({
      showComments: true
    });
  };

  handleUpvote = e => {
    this.setState({
      voteChoice: "up"
    });

    this.props.voteOnPost(this.state.postId, "upVote");
  };

  handleDownvote = e => {
    this.setState({
      voteChoice: "down"
    });

    this.props.voteOnPost(this.state.postId, "downVote");
  };

  handleEdit = (postId, category) => {
    this.props.history.push(`/${category}/${postId}/edit/`);
  };

  handleDelete = () => {
    this.props.deletePost(this.state.postId).then(_ => {
      this.props.history.push("/");
    });
  };

  render() {
    const { isLoading, hasErrored } = this.props;
    const post = this.props.posts.find(x => x.id === this.state.postId);

    if (post && !post.deleted) {
      return (
        <span>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="push"
              width="thin"
              direction="right"
              visible={this.state.adminMode}
              icon="labeled"
              vertical
              inverted
            >
              <Menu.Item onClick={() => this.handleEdit(post.id, post.category)} name="edit">
                <Icon name="edit" />
                Edit
              </Menu.Item>
              <Menu.Item onClick={this.handleDelete} name="delete">
                <Icon name="trash" />
                Delete
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Segment basic>
                <Container text style={{ marginTop: "2em" }}>
                  <Header as="h1">{post.title}</Header>
                  Posted by <Icon name="user" />
                  {post.author} at {moment(post.timestamp).format("MMMM DD YYYY hh:mm A")}
                  <p />
                  <p>{post.body}</p>
                  <div className="ui divider" />
                  <div>
                    <VoteButtons
                      voteScore={post.voteScore}
                      onUpvote={this.handleUpvote}
                      onDownvote={this.handleDownvote}
                    />
                    &nbsp;
                    {!this.state.showComments && (
                      <button className="ui icon right labeled button" onClick={this.showComments}>
                        View Comments {`(${post.commentsCount})`} <i className="comments icon" />
                      </button>
                    )}
                    <Button content="Toggle Admin Mode" onClick={this.toggleAdminMode} />
                  </div>
                  <br />
                  {this.state.showComments && <CommentsContainer postId={this.state.postId} />}
                </Container>
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </span>
      );
    } else if (isLoading) {
      return <div>Post details loading...</div>;
    } else if (hasErrored || (post && post.deleted)) {
      return <Redirect to="/404" />;
    }
    return null;
  }
}

const mapStateToProps = ({ posts, common }) => {
  let errorsFound = false;
  if (common && common.errors && common.errors[FETCH_POST_DETAILS]) {
    errorsFound = true;
  }

  let isLoading = false;
  if (common && common.loading[FETCH_POST_DETAILS]) {
    isLoading = true;
  }

  return {
    hasErrored: errorsFound,
    isLoading: isLoading,
    posts: posts.items
  };
};

export default connect(mapStateToProps, { fetchPostDetails, voteOnPost, deletePost })(Post);
