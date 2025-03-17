import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="books">
          <Route path="title/:bookTitle" element={<Home />} />
          {/* <Route path="ID/:bookId" element={<Book />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
