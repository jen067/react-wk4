import Header from "../components/Header";
import BookList from "../components/BookList";

function Home() {
  return (
    <div className="container mx-auto main-layout bg-base-300 min-h-screen">
      <Header
        title="Welcome to the Book Shop"
        slogan="The best place to buy your favorite books"
      />
      <BookList className="content" />
    </div>
  );
}

export default Home;
