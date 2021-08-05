import "./App.css";
import Header from "./components/Header/index.js";
import Home from "./components/Home.js";
import Movie from "./components/Movie.js";
import NotFound from "./components/NotFound.js";
import { GlobalStyle } from "./GlobalStyle.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserProvider from "./context.js";
import Login from "./Login.js";

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/:movieId" element={<Movie />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
);

export default App;
