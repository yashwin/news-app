import React from "react";
import SearchPage from "../SearchPage/SearchPage";
import NewsList from "../NewsList/NewsList";

export default function HomePage() {
  return (
    <div className="text-center mt-5">
      <h1>
        News Lister
      </h1>
      <SearchPage />
      <NewsList />
    </div>
  )
}