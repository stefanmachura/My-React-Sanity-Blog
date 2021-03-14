import "./style.css";
import "./style-layouts.css";
import "./style-articles.css";
import "./style-pages.css";

import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import About from "./components/pages/About";
import ArticleList from "./components/articles/ArticleList";
import ArticleSingle from "./components/articles/ArticleSingle";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <Router>
      <Suspense fallback="loading">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/articles/:category" exact>
            <ArticleList />
          </Route>
          <Route path="/:slug" exact>
            <ArticleSingle />
          </Route>
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
}
