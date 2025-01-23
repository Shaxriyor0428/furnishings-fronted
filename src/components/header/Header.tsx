import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../../static";
import logo from "/logo.svg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import "./Header.scss";
const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearchTermClick = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="bg-white w-full shadow-sm sticky top-0 left-0 z-50">
      <header
        id="header"
        className="container mx-auto h-20 flex justify-between items-center font-poppins max-[520px]:justify-center"
      >
        <div
          onClick={() => navigate("/")}
          className="flex items-center hover:opacity-70 duration-300"
        >
          <img src={logo} alt="logo.svg" className="h-14 w-14 cursor-pointer" />
          <h2 className="ml-1 text-[30px] font-montserrat font-semibold cursor-pointer">
            Furnishings
          </h2>
        </div>
        <div className="flex items-center gap-12 max-[986px]:hidden">
          {links?.map((link) => (
            <NavLink
              to={link.href}
              key={link.href}
              className="text-center font-medium text-lg hover:text-bg-primary duration-300"
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center gap-6 max-[520px]:hidden">
          <NavLink to={"/account"}>
            <LuUser className="h-6 w-6 hover:text-bg-primary duration-300" />
          </NavLink>
          <FiSearch
            className="h-6 w-6 cursor-pointer hover:text-bg-primary duration-300"
            onClick={() => setSearchOpen(true)}
          />
          <NavLink to={"/wishlist"}>
            <AiOutlineHeart className="h-6 w-6 hover:text-bg-primary duration-300" />
          </NavLink>
          <NavLink to={"/cart"}>
            <AiOutlineShoppingCart className="h-6 w-6 hover:text-bg-primary duration-300" />
          </NavLink>
        </div>
      </header>

      <div
        className={`absolute inset-0 bg-white p-6 flex flex-col items-center gap-4 shadow-lg h-[250px] rounded-b-3xl w-full transition-all duration-500 ${
          searchOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          onClick={() => {
            navigate("/"), setSearchOpen(false);
          }}
          className="absolute left-5 top-5 flex hover:opacity-70 duration-300 max-[1300px]:hidden"
        >
          <img src={logo} alt="logo.svg" />
          <h2 className="ml-1 text-[30px] font-montserrat font-semibold cursor-pointer">
            Furnishings
          </h2>
        </div>
        <div className="flex items-center w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search for products"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-l-lg outline-none text-gray-700 text-sm"
          />
          <button
            onClick={() => setSearchOpen(false)}
            className="p-3 border-2 border-x-0 round hover:bg-amber-600 hover:border-amber-600 hover:text-white transition duration-300"
          >
            <FiSearch className="h-5 w-5" />
          </button>
          <button
            onClick={() => setSearchOpen(false)}
            className="p-3 bg-red-500 text-white rounded-r-lg hover:bg-red-600 transition duration-300"
          >
            Cancel
          </button>
        </div>
        <div className="flex flex-wrap gap-3 max-w-2xl justify-center">
          {[
            "Sofa",
            "Table",
            "Chair",
            "Bed Frame",
            "Bookshelf",
            "Coffee Table",
            "Wardrobe",
            "Armchair",
          ].map((term) => (
            <span
              key={term}
              onClick={() => handleSearchTermClick(term)}
              className="px-4 py-2 bg-gray-100 rounded-full text-gray-600 cursor-pointer hover:bg-gray-200 hover:shadow-md transition duration-300"
            >
              {term}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
