import Header from "../components/Header";
import BookList from "../components/BookList";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="container flex flex-col gap-4 mx-auto main-layout bg-base-300 min-h-screen">
      <Header
        title="Welcome to the Bookstore"
        slogan="The best place to buy your favorite books"
      />
      <BookList className="content" />
      <Footer />
    </div>
  );
}

export default Home;
