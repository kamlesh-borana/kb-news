const reducer = (state, action) => {
  if (action.type === "GET_NEWS") {
    return {
      ...state,
      articles: state.articles.concat(action.payload.articles),
      totalResults: action.payload.totalResults,
      page: state.page + 1,
      isLoading: false,
    };
  } else if (action.type === "INITIALISE_NEWS") {
    return {
      ...state,
      articles: [],
      totalResults: 0,
      page: 0,
      isLoading: true,
    };
  } else {
    return state;
  }
};

export default reducer;
