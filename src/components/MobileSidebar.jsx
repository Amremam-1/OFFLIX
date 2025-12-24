import { FaInstagram, FaXTwitter } from "react-icons/fa6"
import { MdOutlineWhatsapp } from "react-icons/md"
import { IoClose } from "react-icons/io5"

const socialIcons = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/mbn_cp/",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/mbn_cp",
  },
  {
    icon: MdOutlineWhatsapp,
    href: "https://api.whatsapp.com/send/?phone=966535554027",
  },
]

const MobileSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 bg-black/60 z-[9998]
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
      />

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-[85%] max-w-sm
          bg-gradient-to-b from-[#020617] to-[#020617]
          z-[9999]
          transform transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 bg-white text-black w-8 h-8 flex items-center justify-center"
        >
          <IoClose />
        </button>

        <div className="flex flex-col items-center text-center text-white px-6 pt-20 space-y-6">
          {/* Logo */}
          <img src="/images/logo.svg" alt="OFFLIX" className="w-32" />

          {/* Description */}
          <p className="text-sm text-gray-300 leading-relaxed">
            نظام OFFLIX الترفيهي المبتكر لتحسين تجربة السفر الجوية.
          </p>

          {/* Contact */}
          <div className="text-sm text-gray-300 space-y-2">
            <p>للتواصل معنا</p>
            <p>An Nahdah, Jeddah 23523, KSA</p>
            <p>Company.maher@gmail.com</p>
            <p>920006943</p>
          </div>

          {/* Social */}
          <div className="flex gap-4 pt-4">
            {socialIcons.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#f4911e] transition"
              >
                <item.icon />
              </a>
            ))}
          </div>
        </div>
      </aside>
    </>
  )
}

export default MobileSidebar
