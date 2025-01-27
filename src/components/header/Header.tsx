import { FC, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { links } from "../../static";
import logo from "/logo.svg";
import {
  AiOutlineHeart,
  AiOutlineHome,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { LiaInfoSolid, LiaPhoneSolid } from "react-icons/lia";
import { PiXBold } from "react-icons/pi";
import useOnlineonline from "@/hooks/useOnlineStatus";
import "./Header.scss";
import HeaderSearch from "./HeaderSearch";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import Switch from "./Switcher";

const Header: FC = () => {
  const token = useSelector((state: RootState) => state.token.access_token);
  const { online, firstEnter } = useOnlineonline();
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={`bg-white dark:bg-zinc-950 w-full shadow-sm sticky left-0 z-50 transition-colors duration-300 ${
        !online && firstEnter ? "top-6" : "top-0"
      } ${online && firstEnter ? "header-animete" : ""}`}
    >
      <div
        id="header"
        className="container mx-auto h-20 flex justify-between items-center font-poppins"
      >
        <div
          onClick={() => navigate("/")}
          className="flex items-center hover:opacity-70 duration-200"
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
              className="text-center font-medium text-lg hover:text-bg-primary duration-200"
            >
              {link.title}
            </NavLink>
          ))}
        </div>
        <div className="flex items-center justify-between py-3 min-[987px]:gap-6 gap-1">
          <div>
            <Switch />
          </div>
          <NavLink to={token ? "/auth/profile" : "/auth/sign-up"}>
            <LuUser className="h-6 w-6 hover:text-bg-primary duration-200 max-[986px]:hidden" />
          </NavLink>
          <FiSearch
            className="h-6 w-6 cursor-pointer hover:text-bg-primary duration-200 max-[986px]:hidden"
            onClick={() => setSearchOpen(true)}
          />
          <NavLink to={"/wishlist"}>
            <AiOutlineHeart className="h-6 w-6 hover:text-bg-primary duration-200 max-[986px]:hidden" />
          </NavLink>
          <NavLink to={"/cart"}>
            <AiOutlineShoppingCart className="h-6 w-6 hover:text-bg-primary duration-200 max-[986px]:hidden" />
          </NavLink>
          <MdMenu
            className="h-6 w-6 min-[987px]:hidden hover:text-bg-primary duration-200 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>
      </div>
      <HeaderSearch setSearchOpen={setSearchOpen} searchOpen={searchOpen} />
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white dark:bg-black w-80 p-6 rounded-lg shadow-lg relative">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-3 right-3 text-right"
            >
              <PiXBold className="inline-block" />
            </button>
            <div className="flex flex-col items-start gap-4 mt-8">
              <NavLink to={"/wishlist"}>
                <div
                  onClick={() => closeMenu()}
                  className="flex gap-2 items-center text-lg font-medium hover:text-bg-primary duration-200"
                >
                  <AiOutlineHeart className="h-6 w-6" />
                  <p>Wishlist</p>
                </div>
              </NavLink>
              <NavLink to={"/cart"}>
                <div
                  onClick={() => closeMenu()}
                  className="flex gap-2 items-center text-lg font-medium hover:text-bg-primary duration-200"
                >
                  <AiOutlineShoppingCart className="h-6 w-6" />
                  <p>Cart</p>
                </div>
              </NavLink>
              <NavLink
                to={"/about"}
                className="text-lg font-medium hover:text-bg-primary duration-200"
              >
                <div
                  onClick={() => closeMenu()}
                  className="flex gap-2 items-center text-lg font-medium hover:text-bg-primary duration-200"
                >
                  <LiaInfoSolid className="h-6 w-6" />
                  <p>About</p>
                </div>
              </NavLink>
              <NavLink to={"/contact"}>
                <div
                  onClick={() => closeMenu()}
                  className="flex gap-2 items-center text-lg font-medium hover:text-bg-primary duration-200"
                >
                  <LiaPhoneSolid className="h-6 w-6" />
                  <p>Contact</p>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      )}
      <div className="max-[986px]:block hidden font-poppins">
        <div className="fixed bottom-0 inset-x-0 bg-white dark:bg-black py-4 flex items-center justify-evenly z-50">
          <NavLink to={"/"}>
            <div className="flex flex-col items-center hover:text-bg-primary duration-200">
              <AiOutlineHome className="h-6 w-6" />
              <p className="text-sm uppercase">Home</p>
            </div>
          </NavLink>
          <NavLink to={"/shop"}>
            <div className="flex flex-col items-center hover:text-bg-primary duration-200">
              <FiShoppingBag className="h-6 w-6" />
              <p className="text-sm uppercase">Shop</p>
            </div>
          </NavLink>
          <div className="flex flex-col justify-center items-center hover:text-bg-primary duration-200">
            <FiSearch
              className="h-6 w-6 cursor-pointer"
              onClick={() => {
                setSearchOpen(true);
              }}
            />
            <p className="text-sm uppercase"> Search</p>
          </div>
          <NavLink to={token ? "/auth/profile" : "/auth/sign-up"}>
            <div className="flex flex-col items-center hover:text-bg-primary duration-200">
              <LuUser className="h-6 w-6" />
              <p className="text-sm uppercase">Profile</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
