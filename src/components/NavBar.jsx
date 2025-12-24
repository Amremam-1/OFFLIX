import { useState, useEffect, useRef } from "react"
import { IoMenu } from "react-icons/io5"
import { IoMdArrowDropdown } from "react-icons/io"
import { FaLanguage } from "react-icons/fa"
import { useTranslation } from "react-i18next"
import MobileSidebar from "./MobileSidebar"

const NavBar = ({ hideTop }) => {
  const [open, setOpen] = useState(false)
  const [openLangDropdown, setOpenLangDropdown] = useState(false)
  const { i18n } = useTranslation()
  const langRef = useRef(null)

  // ✅ close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setOpenLangDropdown(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

  return (
    <>
      {/* NavBar */}
      <div
        className={`
          fixed left-0 w-full z-50
          transition-all duration-300
          ${hideTop ? "top-0" : "top-[72px]"}
        `}
      >
        <div className="max-w-6xl mx-auto bg-white shadow-xl px-5 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <img src="/images/logo.svg" alt="logo" className="h-12" />

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl"
            >
              <IoMenu />
            </button>

            {/* Desktop language switch */}
            <div
              ref={langRef}
              className="relative flex items-center text-sm font-medium"
            >
              <button
                onClick={() => setOpenLangDropdown((prev) => !prev)}
                className="
                  flex items-center justify-between gap-2
                  min-w-[120px]
                  px-3 py-1.5
                  border border-gray-300 dark:border-gray-600
                  rounded-md
                  hover:bg-gray-100 dark:hover:bg-gray-800
                  transition
                "
              >
                <FaLanguage className="text-lg" />

                <span className="whitespace-nowrap text-[13px]">
                  {i18n.language === "en" ? "English" : "العربية"}
                </span>

                <IoMdArrowDropdown
                  className={`text-base transition-transform duration-300 ${
                    openLangDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openLangDropdown && (
                <ul
                  className="
                    absolute top-full right-0 mt-2
                    w-full
                    bg-white dark:bg-black
                    text-sm
                    rounded-lg
                    shadow-lg
                    overflow-hidden
                    z-50
                  "
                >
                  <li
                    onClick={() => {
                      i18n.changeLanguage("en")
                      setOpenLangDropdown(false)
                    }}
                    className={`
                      px-4 py-2 cursor-pointer
                      hover:bg-gray-100 dark:hover:bg-gray-800
                      ${
                        i18n.language === "en"
                          ? "font-semibold text-amber-600"
                          : ""
                      }
                    `}
                  >
                    English
                  </li>

                  <li
                    onClick={() => {
                      i18n.changeLanguage("ar")
                      setOpenLangDropdown(false)
                    }}
                    className={`
                      px-4 py-2 cursor-pointer
                      hover:bg-gray-100 dark:hover:bg-gray-800
                      ${
                        i18n.language === "ar"
                          ? "font-semibold text-amber-600"
                          : ""
                      }
                    `}
                  >
                    العربية
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default NavBar
