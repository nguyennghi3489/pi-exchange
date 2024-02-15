import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import { SearchBox } from "./components/search-box";
import { TrendingPage } from "./pages/trending";
import { SearchPage } from "./pages/search";

import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const handleSearch = (keyword: string) => {
    setKeyword(keyword);
    navigate(`/search/${keyword}`);
  };
  const resetKeyword = () => {
    setKeyword("");
  };

  return (
    <div className="App max-w-[1920px] min-h-screen">
      <header>
        <div className="flex justify-between items-center w-full p-4 sticky top-0 bg-slate-300 z-50">
          <Link onClick={resetKeyword} to="/">
            <img width={150} src="/giphy-logo.svg" alt="" />
          </Link>
          <SearchBox onSearch={handleSearch} keyword={keyword} />
        </div>

        <Routes>
          <Route path="/search/:key" element={<SearchPage />} />
          <Route path="*" element={<TrendingPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
