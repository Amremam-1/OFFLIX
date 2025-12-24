export default function EntertainmentBanner() {
  return (
    <section className="relative py-24 overflow-hidden" dir="rtl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b2432] via-[#1f2937] to-[#111827]" />

      {/* Dots decoration (left) */}
      <div className="absolute left-16 top-1/2 -translate-y-1/2">
        <div className="grid grid-cols-6 gap-2 rotate-360">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 bg-white/70 rounded-full block"
            />
          ))}
        </div>
      </div>

      {/* Curved line (top right) */}
      <svg
        className="absolute top-6 right-6"
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
          استمتع بمشاهدة <span className="text-orange-400">مواسم كاملة</span>
          <br />
          وبرامج مميزة أثناء الرحلة
        </h2>
      </div>
    </section>
  )
}
