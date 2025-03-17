import { Link } from "react-router";

function BookItem({ book }) {
  return (
    <section className="pt-4 px-3 h-full lg:px-4">
      <div className="bg-white rounded overflow-hidden h-full">
        <Link to={`/books_reviews/ID/${book.ID}`}>
          <img className="w-full" src={book.cover} alt={book.title} />
        </Link>

        <div className="p-4">
          <h3 className="text-slate-600 text-3xl font-medium mb-1">
            {book.title}
          </h3>
          <h4 className="text-slate-600 textarea-lg opacity-60 font-medium mb-3">
            {book.author}
          </h4>
          <p className="text-slate-600 opacity-70 mb-3">{book.summary}</p>
          <h3 className="text-slate-900 text-2xl font-medium">${book.price}</h3>
        </div>
      </div>
    </section>
  );
}

export default BookItem;
