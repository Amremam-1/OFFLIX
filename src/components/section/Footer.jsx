import { FaInstagram, FaXTwitter } from "react-icons/fa6"
import { MdOutlineWhatsapp } from "react-icons/md"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t, i18n } = useTranslation()

  return (
    <footer
      className="relative bg-gradient-to-br from-[#0b0f1a] via-[#0f172a] to-[#020617] text-white overflow-hidden"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* Decorative signal */}
      <div className="absolute bottom-0 left-10 opacity-20 hidden lg:block">
        <div className="w-40 h-40 rounded-full border-2 border-blue-500 relative">
          <div className="absolute inset-6 border-2 border-blue-500 rounded-full" />
          <div className="absolute inset-12 border-2 border-blue-500 rounded-full" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* NEWS */}
          <div
            className={`text-center ${
              i18n.language === "ar" ? "lg:text-right" : "lg:text-left"
            }`}
          >
            <h3 className="text-lg font-bold relative inline-block mb-6">
              {t("footer.news")}
              <span
                className={`absolute -bottom-2 h-1 bg-yellow-400 rounded ${
                  i18n.language === "ar" ? "right-0 w-14" : "left-0 w-14"
                }`}
              />
            </h3>

            <div className="bg-white/5 rounded-lg p-6 flex justify-center gap-4">
              <a
                href="https://www.instagram.com/mbn_cp/?igshid=YmMyMTA2M2Y%3D"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/mbn_cp?s=11&t=70EW0_0tTyEyVdhw_ohacQ"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <FaXTwitter />
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=966535554027"
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-yellow-400 transition"
              >
                <MdOutlineWhatsapp />
              </a>
            </div>
          </div>

          {/* LOGO & DESC */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="text-orange-400 text-2xl font-bold tracking-wider">
                OFFLIX
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* CONTACT */}
          <div
            className={`text-center space-y-4 text-sm text-gray-300 ${
              i18n.language === "ar" ? "lg:text-right" : "lg:text-left"
            }`}
          >
            <p>{t("footer.address")}</p>
            <p>{t("footer.country")}</p>

            <p className="text-white font-medium">{t("footer.email")}</p>

            <p className="text-white font-medium">{t("footer.phone")}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        {t("footer.copyright")}
        <span className="text-white"> {t("footer.rights")} </span>
        {t("footer.group")}
      </div>
    </footer>
  )
}
