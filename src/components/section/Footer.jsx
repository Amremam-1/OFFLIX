import { FaInstagram } from "react-icons/fa6"
import { FaXTwitter } from "react-icons/fa6"
import { MdOutlineWhatsapp } from "react-icons/md"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-[#0b0f1a] via-[#0f172a] to-[#020617] text-white overflow-hidden">
      {/* Decorative signal (left bottom) */}
      <div className="absolute bottom-0 left-10 opacity-20 hidden lg:block">
        <div className="w-40 h-40 rounded-full border-2 border-blue-500 relative">
          <div className="absolute inset-6 border-2 border-blue-500 rounded-full"></div>
          <div className="absolute inset-12 border-2 border-blue-500 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          {/* NEWS */}
          <div className="text-center lg:text-right">
            <h3 className="text-lg font-bold relative inline-block mb-6">
              الأخبار
              <span className="absolute right-0 -bottom-2 w-14 h-1 bg-yellow-400 rounded"></span>
            </h3>

            <div className="bg-white/5 rounded-lg p-6 flex justify-center gap-4 cursor-pointer">
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
                href="https://api.whatsapp.com/send/?phone=966535554027&text&type=phone_number&app_absent=0"
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
              نظام OFFLIX الترفيهي المبتكر لتحسين تجربة السفر الجوية.
            </p>
          </div>

          {/* CONTACT */}
          <div className="text-center lg:text-right space-y-4 text-sm text-gray-300">
            <p>Abdulrahman Al-Dakhil Street, Al-Nahda District, Jeddah</p>
            <p>23523, Saudi Arabia</p>

            <p className="text-white font-medium">company.maher@gmail.com</p>

            <p className="text-white font-medium">920006943</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-400">
        Copyright ©2024 www.maherco.com
        <span className="text-white"> All Rights Reserved. </span>
        MBN GROUP ©
      </div>
    </footer>
  )
}
