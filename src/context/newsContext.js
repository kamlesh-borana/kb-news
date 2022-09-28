import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers";

const NewsContext = createContext();

const NewsProvider = (props) => {
  const initialState = {
    articles: [],
    totalResults: 0,
    page: 0,
    country: "in",
    isLoading: true,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  const getNews = async (category, pageSize, page, country) => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a72432c97e0d491bb69cf1645c54f9e0&pageSize=${pageSize}&page=${page}`
    );
    const parsedData = await res.json();
    dispatch({
      type: "GET_NEWS",
      payload: parsedData,
    });
  };

  const initialiseNews = async () => {
    // const res = await fetch(
    //   `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=a72432c97e0d491bb69cf1645c54f9e0&pageSize=${pageSize}&page=1`
    // );
    // const parsedData = await res.json();
    dispatch({
      type: "INITIALISE_NEWS",
      payload: "",
    });
  };

  return (
    <NewsContext.Provider value={{ ...state, getNews, initialiseNews }}>
      {props.children}
    </NewsContext.Provider>
  );
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContext, NewsProvider, useNewsContext };
