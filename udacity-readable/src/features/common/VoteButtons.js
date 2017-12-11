import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "semantic-ui-react";

class VoteButtons extends Component {
  state = {
    voteChoice: ""
  };

  onUpvote = () => {
    this.setState({
      voteChoice: "up"
    });
    this.props.onUpvote();
  };

  onDownvote = () => {
    this.setState({
      voteChoice: "down"
    });
    this.props.onDownvote();
  };

  render() {
    const { voteScore } = this.props;
    const { voteChoice } = this.state;

    return (
      <span>
        <Button disabled={voteChoice === "up"} onClick={this.onUpvote} icon="thumbs up" />
        <Button disabled={voteChoice === "down"} onClick={this.onDownvote} icon="thumbs down" />
        <span style={{ fontSize: "11px" }}>{voteScore} likes</span>{" "}
      </span>
    );
  }
}

VoteButtons.propTypes = {
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
  voteScore: PropTypes.number.isRequired
};

export default VoteButtons;
