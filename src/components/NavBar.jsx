import { useState, useRef, useEffect } from "react"
import MobileSidebar from "./MobileSidebar"
import { IoMenu } from "react-icons/io5"

const languages = {
  ar: {
    label: "AR",
    flag: "/images/flag-ar.png",
  },
  en: {
    label: "EN",
    flag: "/images/flag-en.png",
  },
}

const NavBar = ({ hideTop }) => {
  const [open, setOpen] = useState(false)
  const [lang, setLang] = useState("ar")
  const [dropdown, setDropdown] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setDropdown(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <>
      <div
        className={`
          fixed left-0 w-full z-50
          transition-all duration-300
          ${hideTop ? "top-0" : "top-[72px]"}
        `}
      >
        <div className="max-w-6xl mx-auto bg-white shadow-xl px-5 py-4">
          <div className="flex items-center justify-between">
            <img src="/images/logo.svg" alt="logo" className="h-12" />

            {/* Mobile */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl"
            >
              <IoMenu />
            </button>

            {/* Desktop Language Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdown((prev) => !prev)}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <span>{languages[lang].label}</span>
                <img
                  src={languages[lang].flag}
                  alt={lang}
                  className="w-6 h-6 rounded-full"
                />
              </button>

              {dropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white border rounded-lg shadow-lg overflow-hidden">
                  {Object.entries(languages).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => {
                        setLang(key)
                        setDropdown(false)
                      }}
                      className="w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      <img
                        src={item.flag}
                        alt={item.label}
                        className="w-5 h-5 rounded-full"
                      />
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <MobileSidebar isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default NavBar
