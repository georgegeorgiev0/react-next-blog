import "./App.css";
import HomePage from "./pages/Home";
import ArticlePage from "./pages/Article";
import ArticlesPage from "./pages/Articles";
import AboutPage from "./pages/About";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <h1>My Awesome Blog</h1>
          <NavBar />
          <div id="page-body">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/articles/:articleId" element={<ArticlePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
