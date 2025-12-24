import { FaInstagram, FaXTwitter } from "react-icons/fa6"
import { MdOutlineWhatsapp } from "react-icons/md"
import CurrentDate from "./CurrentDate"
import { IoLocation } from "react-icons/io5"
import { HiOutlineMail } from "react-icons/hi"
import { useTranslation } from "react-i18next"

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

const TopBar = () => {
  const { i18n, t } = useTranslation()
  return (
    <div className=" ">
      <div className="max-w-6xl mx-auto bg-[#0B1230] text-white px-5 py-4 flex justify-between items-center">
        {/* Social + Date */}
        <div className="flex items-center gap-4">
          <ul className="flex items-center gap-4">
            {socialIcons.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto hover:text-[#f4911e] transition"
                >
                  <item.icon className="text-[15px]" />
                </a>
              </li>
            ))}
          </ul>

          <span className="opacity-60">|</span>
          <CurrentDate
            locale={i18n.language === "en" ? "en-US" : "ar-EG"}
            className="text-sm text-gray-400 max-[768px]:hidden"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col items-end text-[12px] gap-2">
          <p className="flex items-center gap-1.5">
            {t("address")}
            <IoLocation className="text-lg text-[#ffc107]" />
          </p>
          <p className="flex items-center gap-1.5">
            Company.maher@gmail.com
            <HiOutlineMail className="text-lg text-[#ffc107]" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default TopBar
