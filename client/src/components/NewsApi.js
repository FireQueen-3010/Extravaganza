import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export const NewsApi = (props) => {
  const [data, setData] = useState();
  const APIKEY = "211c54366495442aa4190677db6cc798";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=211c54366495442aa4190677db6cc798`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return <DataContext value={{ data }}>{props.children}</DataContext>;
};
