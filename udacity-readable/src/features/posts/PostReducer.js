import _ from "lodash";

import {
  ADD_POST,
  EDIT_POST,
  FETCH_POSTS,
  FETCH_POST_DETAILS,
  FETCH_POSTS_BY_CATEGORY,
  DELETE_POST,
  VOTE_ON_POST,
  SORT_POSTS,
  SET_COMMENTS_COUNT
} from "./PostActions";

const postsInitialState = {
  items: []
};

const posts = (state = postsInitialState, action) => {
  const { items } = state;
  let index;

  switch (action.type) {
    case ADD_POST:
      return {
        items: [...items, action.post]
      };

    case EDIT_POST:
      const post = items.find(x => x.id === action.post.id);
      const updatedPost = { ...post, title: action.post.title, body: action.post.body };

      return {
        items: [items.filter(x => x.id !== action.post.id), updatedPost]
      };

    case VOTE_ON_POST:
      const currentPost = items.find(x => x.id === action.postId);
      index = items.findIndex(x => x.id === action.postId);
      const newVoteScore = currentPost.voteScore + action.voteScore;

      const item = { ...currentPost, voteScore: newVoteScore };

      return {
        items: [...items.slice(0, index), item, ...items.slice(index + 1, items.length)]
      };

    case DELETE_POST:
      return {
        items: [...state.items.filter(x => x.id !== action.postId)]
      };

    case FETCH_POSTS:
      return {
        items: action.items
      };

    case FETCH_POST_DETAILS:
      return {
        items: [action.post]
      };

    case FETCH_POSTS_BY_CATEGORY:
      return {
        items: action.items
      };

    case SORT_POSTS:
      const currentPosts = [...state.items];
      const sortKey = action.filter;

      return {
        items: _.orderBy(currentPosts, [sortKey], ["desc"])
      };

    case SET_COMMENTS_COUNT:
      const postToUpdate = items.find(x => x.id === action.postId);
      index = items.findIndex(x => x.id === action.postId);
      const withComments = { ...postToUpdate, commentsCount: action.commentsCount };

      return {
        items: [...items.slice(0, index), withComments, ...items.slice(index + 1, items.length)]
      };

    default:
      return state;
  }
};

export default posts;
