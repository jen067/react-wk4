import { Link } from "react-router";

function BookItem({ book }) {
  return (
    <section className="pt-4 px-3 lg:px-4">
      <div className="bg-white rounded overflow-hidden">
        <img className="w-full" src={book.cover} alt={book.title} />
        <div className="p-4">
          <h5 className="text-slate-600 opacity-80 mb-1">{book.title}</h5>
          <h6 className="text-slate-600 mb-3">{book.author}</h6>
          <p className="text-slate-600 opacity-70 mb-3">{book.summary}</p>
          {/* <div className="flex justify-between flex-wrap">
            <Link
              to={`/products/id/${product.id}`}
              className="no-underline text-blue-500 flex items-center"
            >
              See More
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-500 inline-flex items-center leading-none text-lg pr-3 py-1 font-bold">
              {product.price}
            </span>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default BookItem;
