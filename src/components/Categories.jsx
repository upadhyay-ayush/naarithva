// src/components/Categories.jsx

const categories = [
  {
    name: "Sarees",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSQaa6p_dwftwOCQEEjHTP5fM_3g9vEcZOQ&s",
  },
  {
    name: "Lehengas",
    image:
      "https://i.pinimg.com/736x/78/d8/cd/78d8cd02fbf3245ee526a4e83cacfc2c.jpg",
  },
  {
    name: "Anarkalis",
    image:
      "https://img.perniaspopupshop.com/catalog/product/s/a/samac28071708-a.jpg?impolicy=detailimageprod",
  },
  {
    name: "Salwar Suits",
    image: "https://m.media-amazon.com/images/I/81OsChVIIBL._SX679_.jpg",
  },
  {
    name: "Kurtis",
    image:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQBnwSnqEoMrG_SHRvJ6pkVAt4TVUN9Fz-R69pAL5kQhxe9FWAtmU2Wl4guxpFrtTiNSTNhfbimgKttFP7OD__7V3CzrdG0dPp3g-vqexT3",
  },
  {
    name: "Ethnic Sets",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT5n6Nc_N0YGRnrilWrqjqgSHOg-Vzx7tLLpjiDiiqzRPOQ2rRqHlXloY8CbaRCR8B1scaRl9M_FJyqsir89Z2KeT20d1TECK79-K2Sdqj5K-Yr2AthDHm_",
  },
  {
    name: "Anarkalis",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQC9gwNRa_ZwCg1KULq0O3ZoR5UHutbeyubF4_-LNDTAyM5og-CfQIzj71384uCgvC9ffapaj7_Qc-7dQBvJU9R4q6gq-4K4rdnKotrp4Y",
  },
  {
    name: "Sarees",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSQaa6p_dwftwOCQEEjHTP5fM_3g9vEcZOQ&s",
  },
  {
    name: "Lehengas",
    image:
      "https://i.pinimg.com/736x/78/d8/cd/78d8cd02fbf3245ee526a4e83cacfc2c.jpg",
  },
  {
    name: "Anarkalis",
    image:
      "https://img.perniaspopupshop.com/catalog/product/s/a/samac28071708-a.jpg?impolicy=detailimageprod",
  },
  {
    name: "Salwar Suits",
    image: "https://m.media-amazon.com/images/I/81OsChVIIBL._SX679_.jpg",
  },
];
const Categories = () => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-[1380px] mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Shop Our Categories
        </h2>

        {/* Horizontal Scroll Wrapper */}
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex gap-6 px-2 md:px-0 w-max">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center min-w-[6rem] sm:min-w-[7rem] md:min-w-[9rem] cursor-pointer"
              >
                <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-52 md:h-52 rounded-full overflow-hidden shadow-md border-4 border-white group-hover:border-[#7534A9] transition-all duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="mt-3 text-sm sm:text-base md:text-lg font-semibold text-black group-hover:text-[#7534A9] transition-colors">
                  {category.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
