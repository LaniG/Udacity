import React, { Component } from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { editPost, fetchPostDetails } from "./PostActions";

class EditPost extends Component {
  state = {
    body: "",
    title: ""
  };

  componentDidMount() {
    this.props
      .fetchPostDetails(this.props.match.params.id)
      .then(post => {
        this.setState({
          body: post.body,
          title: post.title
        });
      })
      .catch(error => {
        this.props.history.push("/404");
      });
  }

  handleSubmit = e => {
    e.preventDefault();
    const postId = this.props.match.params.id;

    const post = {
      id: postId,
      title: this.title.value,
      body: this.body.value
    };

    this.props.editPost(post).then(_ => {
      this.props.history.push(`/${this.props.match.params.category}/${postId}`);
    });
  };

  handleTitleChange = event => {
    this.setState({ title: event.target.value });
  };

  handleBodyChange = event => {
    this.setState({ body: event.target.innerHtml });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleTitleChange}
            ref={input => (this.title = input)}
          />
        </div>

        <div className="field">
          <label htmlFor="body">Post</label>
          <textarea
            name="body"
            placeholder="Body"
            value={this.state.body}
            onChange={this.handleBodyChange}
            rows="3"
            ref={input => (this.body = input)}
          />
        </div>

        <Button primary content="Save Post" icon="save" labelPosition="right" />
      </form>
    );
  }
}

export default connect(null, { editPost, fetchPostDetails })(EditPost);
