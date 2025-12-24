import { useTranslation } from "react-i18next"

export default function EntertainmentBanner() {
  const { t, i18n } = useTranslation()

  return (
    <section
      className="relative py-24 overflow-hidden"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b2432] via-[#1f2937] to-[#111827]" />

      {/* Dots decoration */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 ${
          i18n.language === "ar" ? "left-16" : "right-16"
        }`}
      >
        <div className="grid grid-cols-6 gap-2">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 bg-white/70 rounded-full block"
            />
          ))}
        </div>
      </div>

      {/* Curved line */}
      <svg
        className={`absolute top-6 ${
          i18n.language === "ar" ? "right-6" : "left-6"
        }`}
        width="160"
        height="80"
        viewBox="0 0 160 80"
        fill="none"
      >
        <path
          d="M10 10 C 60 60, 100 -10, 150 40"
          stroke="#facc15"
          strokeWidth="3"
          fill="none"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-relaxed text-white">
          {t("entertainmentBanner.line1")}{" "}
          <span className="text-orange-400">
            {t("entertainmentBanner.highlight")}
          </span>
          <br />
          {t("entertainmentBanner.line2")}
        </h2>
      </div>
    </section>
  )
}
