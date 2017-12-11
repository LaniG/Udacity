export const FETCH_LOADING = "FETCH_LOADING";
export const FETCH_ERRORED = "FETCH_ERRORED";

export function fetchErrored(action, errorsFound) {
  return {
    type: FETCH_ERRORED,
    name: action,
    errorsFound
  };
}

export function fetchLoading(action, isLoading) {
  return {
    type: FETCH_LOADING,
    name: action,
    isLoading
  };
}
