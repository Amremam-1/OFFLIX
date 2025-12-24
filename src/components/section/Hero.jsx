import Header from "./Header"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useTranslation } from "react-i18next"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const { t, i18n } = useTranslation()
  useGSAP(() => {
    gsap.fromTo(
      ".animate-text",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "Power2.inOut",
      }
    )
  })

  return (
    <section className="relative h-150 bg-[url('/images/hero1.jpg')] bg-cover bg-center">
      <Header />

      {/* Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10"
        style={{
          background:
            "linear-gradient(455.03deg, rgba(20,23,41,0.92) -0.62%, rgba(3,23,62,0) 62.34%)",
        }}
      ></div>

      {/* المحتوى */}
      <div className="relative z-20 flex  justify-center h-full text-white text-4xl font-bold  overflow-hidden">
        <div className="w-225 flex items-center justify-between max-[768px]:flex-col max-[768px]:justify-center max-[768px]:gap-5 max-[768px]:items-start max-[768px]:w-fit py-10">
          <div className="animate-spin-slow">
            <img
              src="/images/global.png"
              alt="global"
              className="max-[768px]:w-40"
            />
          </div>

          <div className="animate-text text-center  flex flex-col gap-2 items-center text-black font-mulish">
            <h2 className="text-[18px] text-[#FFB302] mb-3 shape1">
              {t("tagline")}
            </h2>
            <h4 className="animate-text font-mulish text-2xl">
              <span className="mr-2 uppercase text-[#007cf0]">offlix</span>
              {i18n.language === "en" ? "system" : "نظام"}
            </h4>
            <h4 className="text-3xl animate-text">{t("airTravelTagline")}</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
