function BookDetail({ book }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-24 gap-8 justify-center">
      {/* 左側：產品圖片（佔6/24） */}
      <div className="lg:col-span-6 lg:col-start-3">
        <img
          alt={book.title}
          className="w-full h-96 object-cover object-center rounded-md"
          src={book.cover}
        />
      </div>

      {/* 右側：產品資訊（佔14/24） */}
      <div className="lg:col-span-14 px-4">
        <h1 className="text-white text-2xl font-bold mb-2">{book.title}</h1>
        <h2 className="text-white opacity-40 mb-1 text-lg">{book.author}</h2>
        <p className="text-white opacity-60 text-base mb-4">
          {product.summary}
        </p>

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
