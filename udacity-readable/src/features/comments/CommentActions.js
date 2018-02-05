import { fetchService } from "../../utils/http-helpers";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const VOTE_ON_COMMENT = "VOTE_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const FETCH_COMMENTS = "FETCH_COMMENTS";

export function addSuccessful(comment) {
  return {
    type: ADD_COMMENT,
    comment: comment
  };
}

export function addComment(postId, comment) {
  const request = {
    ...comment,
    parentId: postId
  };

  return dispatch => {
    return fetchService.post(
      ADD_COMMENT,
      "/comments",
      "Comment",
      JSON.stringify(request),
      dispatch,
      addSuccessful({ ...comment, voteScore: 1 })
    );
  };
}

export function editSuccessful(commentId, timestamp, body) {
  return {
    type: EDIT_COMMENT,
    commentId,
    timestamp,
    body
  };
}

export function editComment(commentId, body, timestamp) {
  const request = {
    timestamp: timestamp,
    body: body
  };

  return dispatch => {
    return fetchService.put(
      EDIT_COMMENT,
      `/comments/${commentId}`,
      "Comment",
      JSON.stringify(request),
      dispatch,
      editSuccessful(commentId, timestamp, body)
    );
  };
}

export function voteSuccessful(commentId, choice) {
  return {
    type: VOTE_ON_COMMENT,
    commentId,
    choice
  };
}

export function vote(commentId, choice) {
  const request = {
    option: choice
  };

  return dispatch => {
    return fetchService.post(
      VOTE_ON_COMMENT,
      `/comments/${commentId}`,
      "Comment",
      JSON.stringify(request),
      dispatch,
      voteSuccessful(commentId, choice)
    );
  };
}

export function deleteSuccessful(commentId) {
  return {
    type: DELETE_COMMENT,
    commentId
  };
}

export function deleteComment(commentId) {
  return dispatch => {
    return fetchService.delete(
      FETCH_COMMENTS,
      `/comments/${commentId}`,
      "Comment",
      dispatch,
      deleteSuccessful(commentId)
    );
  };
}

export function fetchCommentsSuccessful(comments) {
  return {
    type: FETCH_COMMENTS,
    comments
  };
}

export function fetchComments(postId) {
  return dispatch => {
    return fetchService.get(
      FETCH_COMMENTS,
      `/${postId}/comments`,
      "Comment",
      dispatch,
      fetchCommentsSuccessful
    );
  };
}
