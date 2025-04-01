import Header from "../components/Header";
import BookList from "../components/BookList";
import Footer from "../components/Footer";
import books_reviews from "../json/books_reviews.json";
import CartSummary from "../components/CartSummary";

function Home() {
  return (
    <div>
      <CartSummary />
      <div className="container flex flex-col gap-4 mx-auto main-layout bg-base-300 min-h-screen">
        <Header
          title="Welcome to the Bookstore"
          slogan="The best place to buy your favorite books"
        />
        <BookList book={books_reviews} className="content" />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
