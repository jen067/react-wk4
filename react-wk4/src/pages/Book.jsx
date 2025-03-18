import { useParams } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import books_reviews from "../json/books_reviews.json";
import BookDetail from "../components/BookDetail";

function Book() {
  const { bookId } = useParams();
  const book = books_reviews.find((e) => e.ID === Number(bookId));

  return (
    <div className="container flex flex-col mx-auto main-layout bg-base-300 min-h-screen">
      <Header title="Book Detail" slogan="An example made by Vite." />
      <BookDetail book={book} className="content" />
      <Footer />
    </div>
  );
}

export default Book;
