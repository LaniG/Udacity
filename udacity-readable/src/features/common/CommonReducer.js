import { FETCH_LOADING, FETCH_ERRORED } from "./CommonActions";

const commonInitialState = {
  errors: {},
  loading: {}
};

const common = (state = commonInitialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        ...state,
        loading: {
          [action.name]: action.isLoading
        }
      };

    case FETCH_ERRORED:
      return {
        ...state,
        errors: {
          [action.name]: action.errorsFound
        }
      };

    default:
      return state;
  }
};

export default common;
