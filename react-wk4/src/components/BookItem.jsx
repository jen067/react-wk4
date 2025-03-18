import { Link } from "react-router";

function truncateText(text, maxLength) {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function BookItem({ book }) {
  return (
    <section className="pt-4 px-3 h-full lg:px-4">
      <Link to={`/books/ID/${book.ID}`}>
        <div className="bg-white rounded overflow-hidden h-full">
          <img
            className="w-full max-h-120 object-cover object-center"
            src={book.cover}
            alt={book.title}
          />

          <div className="card-info p-4">
            <h3 className="text-slate-600 text-3xl font-medium mb-1">
              {book.title}
            </h3>
            <h4 className="text-slate-600 textarea-lg opacity-60 font-medium mb-3">
              {book.author}
            </h4>
            <p className="text-slate-600 opacity-70 mb-3">
              {truncateText(book.summary, 50)}
            </p>
            <h3 className="text-slate-900 text-2xl font-medium">
              ${book.price}
            </h3>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default BookItem;
