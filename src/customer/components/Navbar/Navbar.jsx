import React from "react";
import Logo from "../../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
//import {  XMarkIcon} from "@heroicons/react/24/outline";
import { FaCartShopping } from "react-icons/fa6";
//import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { navigation } from "./NavigationData";
import { useLocation, useNavigate } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import AuthModal from "../../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../State/Auth/Action";
import { getCart } from "../../../State/Cart/Action";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// const DropdownLinks = [
//   {
//     id: 1,
//     name: "Trending Products",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Best Selling",
//     link: "/#",
//   },
//   {
//     id: 3,
//     name: "Top Rated",
//     link: "/#",
//   },
// ];

const Navbar = ({ handleOrderPopup }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
      dispatch(getCart(jwt));
    }
  }, [jwt]);

  const handleUserClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseUserMenu = (event) => {
    setAnchorEl(null);
  };

  const handleOpen = () => {
    setOpenAuthModal(true);
  };
  const handleClose = () => {
    setOpenAuthModal(false);
  };

  const handleCategoryClick = (category, section, item, close) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    close();
  };

  useEffect(() => {
    if (auth.user){ 
      handleClose();
    }
    if( auth.user?.role!=="ADMIN" && (location.pathname==="/login" || location.pathname==="/register")){
      navigate(-1)
    }
  }, [auth.user]);



  const  handleLogout=()=>{
    dispatch(logout())
    handleCloseUserMenu()
  }

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-secondary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              ROYALNAVY
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              {auth.user ?.firstName ?(
                <div>
                  <Avatar
                    className="text-white"
                    onClick={handleUserClick}
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    // onClick={handleUserClick}
                    sx={{
                      bgcolor: deepPurple[500],
                      color: "white",
                      cursor: "pointer",
                    }}
                  >
                    {auth.user?.firstName[0].toUpperCase()}
                  </Avatar>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openUserMenu}
                    onClose={handleCloseUserMenu}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={handleCloseUserMenu}>Profile</MenuItem>

                    <MenuItem
                    // onClick={handleMyOrderClick}
                    
                    >
                      My Orders
                    </MenuItem>
                    <MenuItem
                    onClick={handleLogout}
                    >
                      Logout
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <Button
                  onClick={handleOpen}
                  className="text-sm font-medium text-gray-700 hover:text-gray-800"
                >
                  Signin
                </Button>
              )}
            </div>

            {/* Search
                <div className="flex lg:ml-6">
                  <p className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </p>
                </div> */}

            {/* order button */}
            <button
              onClick={() => navigate("/account/order")}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div> 
          </div>
        </div>
      </div>

      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">

        {/* Done by me */}
        <Popover.Group className="sm:flex hidden items-center gap-4 h-[34px] ">
          <div className="flex h-full space-x-8 ">
            {navigation.categories.map((category) => (
              <Popover key={category.name} className="flex">
                {({ open, close }) => (
                  <>
                    <div className="relative flex ">
                      <Popover.Button
                        className={classNames(
                          open
                            ? "inline-flex hover:text-primary duration-200 border border-transparent focus:outline-none focus:border-transparent"
                            : "border border-transparent text-gray-700 hover:text-gray-800 focus:outline-none focus:border-transparent",
                          "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
                        )}
                      >
                        {category.name}
                      </Popover.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                        <div
                          className="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        />
                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative text-base sm:text-sm"
                                  >
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                      <img
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className="object-cover object-center"
                                      />
                                    </div>
                                    <a
                                      href={item.href}
                                      className="mt-6 block font-medium text-gray-900"
                                    >
                                      <span
                                        className="absolute inset-0 z-10"
                                        aria-hidden="true"
                                      />
                                      {item.name}
                                    </a>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p
                                      id={`${section.name}-heading`}
                                      className="font-medium text-gray-900"
                                    >
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <p
                                            onClick={() =>
                                              handleCategoryClick(
                                                category,
                                                section,
                                                item,
                                                close
                                              )
                                            }
                                            className="cursor-pointer hover:text-gray-800"
                                          >
                                            {item.name}
                                          </p>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            ))}

            {navigation.pages.map((page) => (
              <a
                key={page.name}
                href={page.href}
                className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
              >
                {page.name}
              </a>
            ))}
          </div>
        </Popover.Group>

        {/* <ul className="sm:flex hidden items-center gap-4">
          {navigation.categories.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
      //Simple Dropdown and Links 
      
      <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
      <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
      </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul> */}
      </div>
      <AuthModal handleClose={handleClose} open={openAuthModal} />
    </div>
  );
};

export default Navbar;
