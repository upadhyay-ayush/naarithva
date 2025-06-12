import { Menu, Search, ShoppingCart, User, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Deals", path: "/deals" },
  { name: "Categories", path: "/categories" },
];

const categories = [
  "Sarees",
  "Lehengas",
  "Salwar Suits",
  "Kurtis",
  "Anarkalis",
  "Ethnic Wear",
];

const secondaryMenuItems = [
  { title: "All Collection", dropdown: ["All Sarees", "New Arrivals"] },
  { title: "Silk Sarees", dropdown: ["Kanjivaram", "Mysore", "Banarasi"] },
  { title: "Casual & Party Wear", dropdown: ["Printed", "Embroidered"] },
  { title: "Semi Banaras Sarees", dropdown: ["Festive", "Classic"] },
  { title: "Cotton Sarees", dropdown: ["Handloom", "Designer"] },
  { title: "Readymade Blouse", dropdown: ["Velvet", "Silk", "Sleeveless"] },
  { title: "Dhwanee", dropdown: ["Elegant", "Traditional"] },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <>
      <nav className="bg-[#7534A9] text-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/Naarithva_New_Logo_300x@2x.png"
              alt="Naarithva Logo"
              className="w-72 h-14 object-cover"
            />
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 mx-8 max-w-2xl">
            <div className="relative flex w-full rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Search for products..."
                className="flex-grow px-4 py-2 text-gray-800 focus:outline-none bg-white"
              />
              <div className="relative">
                <div
                  className="flex items-center bg-white text-gray-800 px-4 py-2 cursor-pointer min-w-[180px] h-full"
                  onClick={() => setShowCategories(!showCategories)}
                >
                  <span className="truncate">{selectedCategory}</span>
                  <ChevronDown className="w-4 h-4 ml-2" />
                </div>
                {showCategories && (
                  <div className="absolute top-full left-0 bg-white text-gray-800 shadow-lg z-50 w-full">
                    {categories.map((category, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedCategory(category);
                          setShowCategories(false);
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button className="bg-green-400 px-4 flex items-center justify-center border-l">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-1 cursor-pointer hover:text-[#e0c7f7]">
              <User className="w-5 h-5" />
              <div className="flex flex-col text-sm leading-tight">
                <span>Login</span>
                <span className="font-medium">Sign Up</span>
              </div>
            </div>

            <Link to="/cart" className="flex items-center relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-white text-[#7534A9] text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
              <span className="ml-2 hidden md:block">Cart</span>
            </Link>

            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-3">
            <div className="relative flex w-full">
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
              />
              <button className="bg-[#5a2a82] px-4 rounded-r-md">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white text-gray-800 px-4 pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block py-3 border-b border-gray-100 hover:text-[#7534A9]"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <div className="flex items-center space-x-2 py-2 cursor-pointer">
                <User className="w-5 h-5" />
                <span>Login / Sign Up</span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Secondary Dropdown Menu */}
      {/* Secondary Dropdown Menu */}
      <div className="bg-white shadow-md text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2">
          {/* Desktop View */}
          <div className="hidden md:flex space-x-6 items-center">
            {secondaryMenuItems.map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(index)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-[#7a28a9] font-medium transition">
                  {item.title}
                  <ChevronDown size={14} />
                </button>

                {/* Dropdown */}
                {activeDropdown === index && (
                  <div className="absolute top-full mt-2 left-0 w-48 bg-white border rounded shadow-lg z-50">
                    {item.dropdown.map((drop, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                      >
                        {drop}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden">
            <details className="w-full">
              <summary className="font-medium text-gray-700 py-2 cursor-pointer flex justify-between items-center">
                Explore Categories
                <ChevronDown className="inline w-4 h-4 ml-1" />
              </summary>
              <div className="pt-2 pb-3 space-y-2">
                {secondaryMenuItems.map((item, index) => (
                  <details key={index} className="pl-2">
                    <summary className="text-gray-800 py-1 cursor-pointer flex justify-between items-center">
                      {item.title}
                      <ChevronDown className="inline w-4 h-4 ml-1" />
                    </summary>
                    <div className="pl-4 pt-1">
                      {item.dropdown.map((drop, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block py-1 text-gray-600 hover:text-[#7a28a9]"
                        >
                          {drop}
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
