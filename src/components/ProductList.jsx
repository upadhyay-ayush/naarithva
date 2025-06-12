// src/components/ProductList.jsx

const products = [
  {
    id: 1,
    name: "Banarasi Silk Saree",
    category: "Saree",
    price: 4599,
    originalPrice: 6999,
    discount: 34,
    image:
      "https://tse1.mm.bing.net/th?id=OIP.cUKtjHQML0FlIureA9IrWwHaJ4&pid=Api&P=0&h=220",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: "Designer Lehenga Choli",
    category: "Lehenga",
    price: 8999,
    originalPrice: 12999,
    discount: 31,
    image:
      "https://i.etsystatic.com/36533431/r/il/6da873/4636851370/il_fullxfull.4636851370_t32o.jpg",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: 3,
    name: "Cotton Printed Suit",
    category: "Salwar Suit",
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    image:
      "https://peachmode.com/cdn/shop/files/1638535124_1_GNPR-INITHI-1451.webp?v=1667984407",
    rating: 4.5,
    reviews: 215,
  },
  {
    id: 4,
    name: "Kanjivaram Silk Saree",
    category: "Saree",
    price: 7599,
    originalPrice: 9999,
    discount: 24,
    image:
      "https://i.pinimg.com/originals/d7/fc/de/d7fcde6fbca352a66ecf5d7c5908b827.jpg",
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 5,
    name: "Bridal Lehenga Set",
    category: "Lehenga",
    price: 15999,
    originalPrice: 22999,
    discount: 30,
    image:
      "https://cdn.exoticindia.com/images/products/original/textiles-2019/taa777.jpg",
    rating: 4.9,
    reviews: 42,
  },
  {
    id: 6,
    name: "Chanderi Silk Suit",
    category: "Salwar Suit",
    price: 3899,
    originalPrice: 5999,
    discount: 35,
    image:
      "https://images.herzindagi.info/image/2024/Jun/blue-chanderi-silk-suit.jpg",
    rating: 4.6,
    reviews: 178,
  },
  {
    id: 3,
    name: "Cotton Printed Suit",
    category: "Salwar Suit",
    price: 2499,
    originalPrice: 3999,
    discount: 38,
    image:
      "https://peachmode.com/cdn/shop/files/1638535124_1_GNPR-INITHI-1451.webp?v=1667984407",
    rating: 4.5,
    reviews: 215,
  },
  {
    id: 4,
    name: "Kanjivaram Silk Saree",
    category: "Saree",
    price: 7599,
    originalPrice: 9999,
    discount: 24,
    image:
      "https://i.pinimg.com/originals/d7/fc/de/d7fcde6fbca352a66ecf5d7c5908b827.jpg",
    rating: 4.7,
    reviews: 67,
  },
  {
    id: 5,
    name: "Bridal Lehenga Set",
    category: "Lehenga",
    price: 15999,
    originalPrice: 22999,
    discount: 30,
    image:
      "https://cdn.exoticindia.com/images/products/original/textiles-2019/taa777.jpg",
    rating: 4.9,
    reviews: 42,
  },
  {
    id: 6,
    name: "Chanderi Silk Suit",
    category: "Salwar Suit",
    price: 3899,
    originalPrice: 5999,
    discount: 35,
    image:
      "https://images.herzindagi.info/image/2024/Jun/blue-chanderi-silk-suit.jpg",
    rating: 4.6,
    reviews: 178,
  },
];

const ProductList = () => {
  return (
    <div className="py-2 md:py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 ">
            Traditional Collection
          </h2>
   
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover"
                />
                <span className="absolute top-2 left-2 bg-[#7534A9] text-white text-xs px-2 py-1 rounded">
                  {product.discount}% OFF
                </span>
              
              </div>
              <div className="p-4">
                <span className="text-sm text-gray-500">
                  {product.category}
                </span>
                <h3 className="text-lg font-semibold mt-1 text-gray-800">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center">
                  <span className="text-lg font-bold text-gray-900">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
                <button className="mt-4 w-full bg-[#79BFAD] text-white py-2 rounded-md hover:bg-indigo-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button className="px-6 py-3 border border-[#7534A9] text-[#7534A9] rounded-md hover:bg-indigo-50 transition">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
