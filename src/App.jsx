import "./style.css";
import Header from "./Header";
import NavBar from "./NavBar";
import ArticleList from "./ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArticlePage from "./ArticlePage";
import { useState, createContext } from "react";

export const UserContext = createContext()

function App() {

  const [user, setUser] = useState('jessjelly')

  return (
    <UserContext.Provider value={user}>
    <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/articles/:article_id" element={<ArticlePage/>}/>
        </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
