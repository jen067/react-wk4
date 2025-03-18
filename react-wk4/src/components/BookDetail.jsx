import AddToCart from "./AddToCart";

function BookDetail({ book }) {
  const bookReviews = () => {
    const reviews = book.reviews;
    const reviewList = reviews.map((review, index) => {
      return (
        <li key={index} className="list-row flex items-center">
          <div>
            <img
              className="size-15 object-contain rounded-box"
              src="/images/user.png"
            />
          </div>
          <div>
            <div className="text-xl text-slate-600 font-medium ">
              {review.reviewer}
            </div>
            <div className="text-base text-slate-600 font-semibold opacity-60">
              {review.comment}
            </div>
          </div>
          <div className="rating ml-auto text-xl font-medium text-slate-600">
            {review.rating}
          </div>
        </li>
      );
    });
    console.log(reviewList);
    return reviewList;
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-24 grid-rows-2 gap-8 justify-center content-center">
      {/* 左側：產品圖片（佔6/24） */}
      <div className="lg:col-span-6 lg:col-start-3">
        <img
          alt={book.title}
          className="w-full h-120 object-cover object-center rounded-md"
          src={book.cover}
        />
      </div>

      {/* 右側：產品資訊（佔14/24） */}
      <div className=" lg:col-span-14 px-4">
        <h1 className="text-slate-600 text-5xl font-bold mb-4">{book.title}</h1>
        <h2 className="text-slate-600 opacity-60 text-2xl mb-2 font-medium">
          {book.author}
        </h2>
        <p className="text-slate-600  text-lg mb-4 leading-8">{book.summary}</p>
        <hr className="opacity-20" />
        <AddToCart book={book} />
      </div>
      <ul className="row-start-2 col-span-20 col-start-3 self-center list bg-base-100 rounded-box shadow-md p-4">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">
          Most played songs this week
        </li>
        {bookReviews()}
      </ul>
    </div>
  );
}

export default BookDetail;
