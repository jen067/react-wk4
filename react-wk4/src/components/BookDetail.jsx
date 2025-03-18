import AddToCart from "./AddToCart";
import BookReviews from "./BookReviews";

function BookDetail({ book }) {
  return (
    <div className="grid grid-cols-1 grid-rows-[600px,1fr,1fr] md:grid-cols-8 lg:grid-cols-24 lg:grid-rows-2 gap-8 justify-center  lg:items-center">
      {/* 左側：產品圖片（佔6/24） */}
      <div className="col-span-1 px-4 self-center lg:px-0 md:col-span-4 md:col-start-3 lg:col-start-3 xl:col-start-3 lg:col-span-8 xl:col-span-6">
        <img
          alt={book.title}
          className="w-full h-120 object-cover object-center rounded-md"
          src={book.cover}
        />
      </div>

      {/* 右側：產品資訊（佔14/24） */}
      <div className="col-span-1 md:col-span-6 md:col-start-2 lg:col-span-12 xl:col-span-14 px-4">
        <h1 className="text-slate-600 text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
          {book.title}
        </h1>
        <h2 className="text-slate-600 opacity-60 text-lg lg:text-xl xl:text-2xl mb-2 font-medium">
          {book.author}
        </h2>
        <p className="text-slate-600 lg:text-base xl:text-lg mb-4 leading-8">
          {book.summary}
        </p>
        <hr className="opacity-20" />
        <AddToCart book={book} />
      </div>
      <BookReviews book={book} />
    </div>
  );
}

export default BookDetail;
