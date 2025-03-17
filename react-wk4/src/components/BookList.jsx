import books_reviews from "../json/books_reviews.json";
import BookItem from "./BookItem";

function BookList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 content">
      {books_reviews.map((book) => (
        <BookItem key={book.ID} book={book} />
      ))}
    </div>
  );
}

export default BookList;
