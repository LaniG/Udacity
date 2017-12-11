import {
  ADD_COMMENT,
  VOTE_ON_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  FETCH_COMMENTS
} from "./CommentActions";

const commentsInitialState = {
  items: []
};

const comments = (state = commentsInitialState, action) => {
  const { items } = state;
  const { commentId, choice, timestamp, body } = action;
  let index;
  let originalComment;

  switch (action.type) {
    case ADD_COMMENT:
      return { items: [...items, { ...action.comment }] };

    case DELETE_COMMENT:
      index = items.findIndex(x => x.id === commentId);

      return {
        items: [...items.slice(0, index), ...items.slice(index + 1, items.length)]
      };

    case VOTE_ON_COMMENT:
      originalComment = items.filter(x => x.id === commentId)[0];
      index = items.findIndex(x => x.id === commentId);

      const voteScore = choice === "upVote" ? 1 : -1;

      const comment = {
        ...originalComment,
        voteScore: originalComment.voteScore + voteScore
      };

      return {
        items: [...items.slice(0, index), comment, ...items.slice(index + 1, items.length)]
      };

    case EDIT_COMMENT:
      const unmodifiedComments = items.filter(x => x.id !== commentId);
      originalComment = items.filter(x => x.id === commentId)[0];
      const modifiedComment = { ...originalComment, timestamp: timestamp, body: body };

      return { items: [...unmodifiedComments, modifiedComment] };

    case FETCH_COMMENTS:
      return {
        items: [...action.comments]
      };

    default:
      return state;
  }
};

export default comments;
