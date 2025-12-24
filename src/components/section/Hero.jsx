import Header from "./Header"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
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
        <div className="w-225 flex items-center justify-between">
          <div className="animate-spin-slow">
            <img src="/images/global.png" alt="global" />
          </div>

          <div className="animate-text  flex flex-col gap-2 items-center text-black font-mulish">
            <h2 className="text-[18px] text-[#FFB302] mb-3 shape1">
              تقنيـــة محلية تجربــة عالمية
            </h2>
            <h4 className="animate-text font-mulish text-2xl">
              <span className="mr-2 uppercase text-[#007cf0]">offlix</span>
              نظام
            </h4>
            <h4 className="text-3xl animate-text shape2">
              الترفيهي المبتكر لتحسين تجربة السفر الجوية
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
