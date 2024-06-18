import "./style.css";
import Header from "./Header";
import NavBar from "./NavBar";
import ArticleList from "./ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlePage from "./ArticlePage";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<ArticlePage/>}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
