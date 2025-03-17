function BookDetail({ book }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center">
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

        {/* 價格與按鈕 */}
        {/* <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold">US${product.price}.00</p>
          <AddToCart />
        </div> */}
      </div>
    </div>
  );
}

export default BookDetail;
