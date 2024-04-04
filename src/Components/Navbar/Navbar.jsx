import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoCloseSharp } from "react-icons/io5";
import DarkMode from "./DarkMode";
import { useTranslation } from "react-i18next";
import logo from "../../assets/website/l_och.png";
import BtnLang from "../translate/BtnLang";
export const hoverEffect = "relative after:rounded-md after:w-full after:h-0 after:absolute after:bg-sky-500 after:bottom-0 after:right-5 md:after:right-0 hover:after:h-full after:transition-all after:duration-200 z-10 after:z-0 after:opacity-30"

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme"));
  const { t } = useTranslation();
  const { home, contact, services, login } = t("navbar");
  const [open, setOpen] = useState(false);
  return (
    <div className='flex items-center navbar w-full z-[999] shadow-sm bg-transparent  backdrop-blur-xl fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-transparent py-4 md:px-10 px-7 container'>
        <Link to={'/'}>
          <img
            className="min-w-40 w-40 mr-auto"
            src={logo}
            alt="site logo"
          />
        </Link>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-[30px] cursor-pointer md:hidden w-5 h-5"
        >
          {open ? (
            <IoCloseSharp className="text-3xl" />
          ) : (
            <HiMiniBars3CenterLeft className="size-8" />
          )}
        </div>
        <div
          className={`ml-auto font-light md:flex md:items-center md:pb-0  pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 ${open ? "top-10" : "top-[-490px]"}`}>
          <div className={`h-screen  md:h-auto md:bg-inherit md:flex md:flex-row md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 flex flex-col gap-3 lg:gap-8 md:text-inherit ${open ? "top-12 bg-white dark:bg-slate-900" : "top-[-490px]"}`}>
            <NavLink
              onClick={(e) => setOpen(false)}
              className={` text-[14px] font-medium md:my-0 my-2 capitalize p-2 ${hoverEffect}`}
              to="/">{t(home)}
            </NavLink>
            <NavLink
              onClick={(e) => setOpen(false)}
              className={`text-[14px]  font-medium md:my-0 my-2 capitalize p-2 ${hoverEffect}`}
              to="/services"
            >

              {t(services)}
            </NavLink>
            <NavLink
              onClick={(e) => setOpen(false)}
              className={`text-[14px]  font-medium md:my-0 my-2 capitalize p-2 ${hoverEffect}`}
              to="/contact"
            >{t(contact)}
            </NavLink>
            <BtnLang />
            <a
              className={`md:my-0 my-6 font-semibold`}
              href="https://dashboard.naqdvision.uz/auth/login"
            >
              <button className="primary-btn font-light p-2 px-4 md:px-8">
                {t(login)}
              </button>
            </a>
          </div>
        </div>
        {/* button */}
      </div>
      <div className="md:mr-5 mr-10">
        <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
};

export default Navbar;
