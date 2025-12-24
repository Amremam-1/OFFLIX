import { useTranslation } from "react-i18next"

export default function ProvidedServices() {
  const { t, i18n } = useTranslation()

  const services = [
    "inflightStore",
    "revenueGrowth",
    "costReduction",
    "passengerExperience",
    "technicalAspects",
    "additionalRevenue",
    "updateMechanism",
    "mediaLibraryContent",
  ].map((key) => ({
    title: t(`providedServices.cards.${key}.title`),
    desc: t(`providedServices.cards.${key}.desc`, {
      returnObjects: true,
    }),
  }))

  return (
    <section
      className="py-24 bg-white"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`mb-16 ${
            i18n.language === "ar" ? "text-right" : "text-left"
          }`}
        >
          <p className="text-orange-400 text-sm mb-2">
            {t("providedServices.label")}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block relative">
            {t("providedServices.title")}
            {/* Orange underline */}
            <span
              className={`absolute -bottom-2 h-1 bg-orange-400 rounded ${
                i18n.language === "ar" ? "right-0 w-20" : "left-0 w-20"
              }`}
            />
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="group relative h-[320px] rounded-xl shadow overflow-hidden"
            >
              {/* DEFAULT BOX */}
              <div className="absolute inset-0 bg-white p-6 transition-all duration-300 group-hover:opacity-0">
                <div className="text-gray-400 mb-6 text-2xl">★</div>

                <h3 className="font-bold text-lg mb-4 text-gray-900">
                  {item.title}
                </h3>

                <ul className="text-gray-500 text-sm space-y-2">
                  {item.desc.map((d, idx) => (
                    <li key={idx}>• {d}</li>
                  ))}
                </ul>
              </div>

              {/* HOVER BOX */}
              <div
                className="
                  absolute inset-0 bg-blue-600 text-white p-6
                  opacity-0 translate-y-6
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-y-0
                "
              >
                {/* Yellow corner */}
                <div
                  className={`absolute top-0 ${
                    i18n.language === "ar" ? "right-0" : "left-0"
                  } w-0 h-0
                  border-t-[42px] border-t-yellow-400
                  border-l-[42px] border-l-transparent`}
                />

                <div className="mb-6 text-2xl">★</div>

                <h3 className="font-bold text-lg mb-4">{item.title}</h3>

                <p className="text-sm text-white/90 leading-relaxed">
                  {t("providedServices.hoverText")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
