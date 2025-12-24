import { useTranslation } from "react-i18next"

export default function OfflineHero() {
  const { t, i18n } = useTranslation()

  return (
    <section
      className="relative min-h-125 overflow-hidden"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* Full Dark Layer */}
      <div className="absolute inset-0 bg-[#0f172a]" />

      {/* Center Image */}
      <div className="absolute inset-0 flex justify-center">
        <div
          className="
            w-full
            max-w-105
            md:max-w-130
            bg-cover
            bg-center
            opacity-60
          "
          style={{
            backgroundImage: "url('/images/choose-bg.jpg')",
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-l from-[#0f172a]/95 via-[#0f172a]/90 to-transparent" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-xl ml-auto">
            <p className="text-orange-400 font-medium mb-4">
              {t("offlineHero.label")}
            </p>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-6">
              {t("offlineHero.title")}{" "}
              <span className="text-orange-400">(Offline)</span>
              <br />
              {t("offlineHero.subtitle")}
            </h1>

            <ul className="text-gray-300 space-y-3 text-sm md:text-base leading-relaxed">
              <li>• {t("offlineHero.point1")}</li>
              <li>• {t("offlineHero.point2")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
