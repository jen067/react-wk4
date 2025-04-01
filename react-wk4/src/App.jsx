import { BrowserRouter, Routes, Route } from "react-router";
import { HelmetProvider } from "react-helmet-async";

import "./App.css";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Category from "./pages/Category";

function App() {
  return (
    <HelmetProvider context={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="books">
            {/* <Route path="title/:bookTitle" element={<Home />} /> */}
            <Route path="category/:genreName" element={<Category />} />
            <Route path="ID/:bookId" element={<Book />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
