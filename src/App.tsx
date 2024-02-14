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
    <div className="App">
      <header className="App-header">
        <div>
          <Link onClick={resetKeyword} to="/">
            Trending
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
