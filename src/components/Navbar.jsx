import React from "react";
import Cart from "./Cart";
import logo from "../../images/logo.svg";
import iconMenu from "../../images/icon-menu.svg";
import iconCart from "../../images/icon-cart.svg";
import avatar from "../../images/image-avatar.png";
import iconClose from "../../images/icon-close.svg";

const Navbar = () => {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between py-6 px-6 font-default">
        <div className="flex gap-3 lg:gap-10">
          {/* Hamburger menu */}
          <div
            className={`flex cursor-pointer items-center md:hidden`}
            onClick={() => setOpenMenu(true)}
          >
            <img src={iconMenu} alt="" />
          </div>
          <img src={logo} alt="" className="cursor-pointer" />
          <div className="ml-5 hidden space-x-5 md:flex lg:space-x-10">
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="relative">
            <img src={iconCart} alt="cart" className="h-6 w-6" />
            {/* Cart */}
          </div>

          <img src={avatar} alt="" className="h-8 w-8 " />
        </div>
      </div>
      {/* Drawer */}
      <aside
        className={`
        ${openMenu ? "translate-x-0" : "-translate-x-full"}
        fixed top-0 left-0 z-30 flex h-full w-[65%] flex-col gap-7 bg-white px-6 pt-6 duration-300 ease-in-out md:hidden`}
      >
        <img
          src={iconClose}
          alt=""
          className="h-4 w-4 cursor-pointer"
          onClick={() => setOpenMenu(false)}
        />
        <div className="flex flex-col space-y-4">
          <a className="text-lg font-bold">Collections</a>
          <a className="text-lg font-bold">Men</a>
          <a className="text-lg font-bold">Women</a>
          <a className="text-lg font-bold">About</a>
          <a className="text-lg font-bold">Contact</a>
        </div>
      </aside>
      {/* overlay */}
      <div
        className={`absolute inset-0 z-20 bg-black opacity-50 ${
          openMenu === false && "hidden"
        }`}
        onClick={() => setOpenMenu(false)}
      ></div>
      {/* Cart */}
      <div className="absolute top-[15%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 w-[90%] rounded-lg bg-white shadow-2xl p-5">
        <h2 className="font-3xl font-bold">Cart Content</h2>
      </div>
    </nav>
  );
};

export default Navbar;