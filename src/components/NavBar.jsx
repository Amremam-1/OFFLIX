import { useState } from "react"
import MobileSidebar from "./MobileSidebar"
import { IoMenu } from "react-icons/io5"

const NavBar = ({ hideTop }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className={`
          fixed left-0 w-full z-[9999]
          transition-all duration-300
          ${hideTop ? "top-0" : "top-[72px]"}
        `}
      >
        <div className="max-w-6xl mx-auto bg-white shadow-xl px-5 py-4">
          <div className="flex items-center justify-between">
            <img src="/images/logo.svg" alt="logo" className="h-12" />

            {/* Mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl"
            >
              <IoMenu />
            </button>

            {/* Desktop */}
            <div className="flex items-center gap-2 text-sm font-medium">
              <span>Ar</span>
              <img
                src="/images/saudi-flag.png"
                alt="Arabic"
                className="w-5 h-5 rounded-full"
              />
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
