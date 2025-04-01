import books_reviews from "../json/books_reviews.json";
import BookItem from "./BookItem";

function BookList({ book }) {
  // 👈 改為從 props 取得篩選後的書籍
  return (
    <div className="min-h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 content">
      {book.map(
        (
          book // 👈 使用傳入的 book 而不是全部的 books_reviews
        ) => (
          <BookItem key={book.ID} book={book} />
        )
      )}
    </div>
  );
}

export default BookList;
