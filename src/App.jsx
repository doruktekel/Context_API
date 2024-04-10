import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import { ThemeProvider } from "./components/context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
