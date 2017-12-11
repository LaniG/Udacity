import { fetchService } from "../../utils/http-helpers";

export const FETCH_CATEGORIES = "FETCH_CATEGORIES";

export function fetchCategoriesSuccessful(response) {
  return {
    type: FETCH_CATEGORIES,
    items: response.categories
  };
}

export function fetchCategories() {
  return dispatch => {
    return fetchService.get(
      FETCH_CATEGORIES,
      "/categories",
      "Category",
      dispatch,
      fetchCategoriesSuccessful
    );
  };
}
