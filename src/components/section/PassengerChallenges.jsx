import { useTranslation } from "react-i18next"

export default function PassengerChallenges() {
  const { t, i18n } = useTranslation()

  return (
    <section
      className="relative py-24 bg-white overflow-hidden"
      dir={i18n.language === "ar" ? "rtl" : "ltr"}
    >
      {/* Light background map */}
      <div
        className="absolute inset-0 bg-no-repeat bg-left"
        style={{
          backgroundImage: "url('/images/testimonial-bg-.png')",
          backgroundSize: "70%",
        }}
      />

      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/* LEFT CONTENT */}
          <div
            className={`max-w-xl ${
              i18n.language === "ar"
                ? "ml-auto text-right"
                : "mr-auto text-left"
            }`}
          >
            <p className="text-orange-400 font-medium mb-3">
              {t("passengerChallenges.label")}
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {t("passengerChallenges.title")}{" "}
              <span className="text-orange-400">
                {t("passengerChallenges.highlight")}
              </span>
            </h2>

            <ul className="space-y-4 text-orange-400 leading-relaxed">
              {t("passengerChallenges.items", {
                returnObjects: true,
              }).map((item, index) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>

            {/* Small blue square */}
            <div className="mt-8 w-10 h-10 bg-blue-600" />
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">
            {/* Feedback badge */}
            <div className="absolute top-6 left-6 z-10 bg-blue-500 text-white text-sm px-4 py-2 rounded flex items-center gap-2 shadow">
              💬 {t("passengerChallenges.feedback")}
            </div>

            {/* Image */}
            <img
              src="/images/testimonial.jpg"
              alt="airplane seats"
              className="w-full max-w-[420px] rounded-md shadow-lg"
            />

            {/* Quote icon */}
            <div className="absolute bottom-10 -right-6 bg-white w-14 h-14 rounded-full flex items-center justify-center shadow text-blue-500 text-3xl">
              “”
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
