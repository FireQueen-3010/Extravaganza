import { useContext } from "react";
import { DataContext } from "../components/NewsApi";
import NewsCard from "../components/NewsCard";

export default function NewsFeed() {
  //   const data = useContext(DataContext).data;
  return (
    <div>
      <h1 className="head__text">News App </h1>
      <div className="all__news">
        <DataContext.Consumer>
          {({ data }) => (
            <div>
              {data
                ? data.articles.map((news) => (
                    <NewsCard data={news} key={news.url} />
                  ))
                : "Loading"}
            </div>
          )}
        </DataContext.Consumer>
      </div>
    </div>
  );
}
