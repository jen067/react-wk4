import { useParams } from "react-router";
import { Helmet } from "react-helmet-async";
import _ from "lodash";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookList from "../components/BookList";
import books_reviews from "../json/books_reviews.json";
import CartSummary from "../components/CartSummary";

function Category() {
  const { genreName } = useParams();
  const _books = books_reviews.filter(
    (x) => x?.genre.toUpperCase() === genreName.toUpperCase()
  );

  console.log(_books);

  const title = _.startCase(genreName);

  return (
    <div>
      <CartSummary />
      <div className="container mx-auto main-layout min-h-screen">
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <Header
          title={title}
          slogan="The best place to buy your favorite books"
        />
        <BookList book={_books} className="content" />
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default Category;
