import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Series } from "./pages/Series";
import { Comics } from "./pages/Comics";
import { Error404 } from "./pages/Error404";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to='/inicio'/>} />
          <Route path="/inicio" element={<Home />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
