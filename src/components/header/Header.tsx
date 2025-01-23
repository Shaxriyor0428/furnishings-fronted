import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../../static";
import logo from "/logo.svg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import useOnlineStatus from "@/hooks/useOnlineStatus";
import "./Header.scss";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  const status = useOnlineStatus();
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [hasBeenOffline, setHasBeenOffline] = useState<boolean>(false);
  const navigate = useNavigate();

  if (!status && !hasBeenOffline) {
    setHasBeenOffline(true);
  }

  return (
      <header
    <div
      className={`bg-white w-full shadow-sm sticky left-0 z-50 ${
        !status ? "top-6" : "top-0"
      } ${status && hasBeenOffline ? "header-animete" : ""}`}
    >
      <div
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
      </div>
      <HeaderSearch setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
  );
};

export default Header;
