const AviationHero = () => {
  return (
    <section className="relative  overflow-hidden">
      {/* Decorative line */}

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Text Content */}
        <div className=" text-end">
          <p className="text-orange-500 font-semibold mb-4">
            احتياجات المسافرين
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            أفضل وكالة لتوفير خدمات
            <br />
            <span className="text-orange-500">الإنترنت</span> للقطاع الجوي
          </h1>

          <ul className="text-gray-500 my-6 shape3 pr-2">
            <li className="">
              . توفير تجربة ترفيهية استثنائية، خاصة خلال الرحلات الطويلة •
            </li>
            <li>. محتوى متنوع يناسب جميع الفئات والأعمار •</li>
          </ul>

          {/* Features */}
          <div className="flex gap-10 justify-end my-6 font-semibold">
            <div className="flex items-center gap-3">
              <p>إنترنت آمن بالكامل</p>
              <div className="flex items-center justify-center bg-[#f4911e] rounded-lg w-8 h-8">
                <img src="/public/images/ab-5.png" alt="" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <p>بث بجودة تتجاوز 4K و 8 K</p>
              <div className="flex items-center justify-center bg-[#336EF9] rounded-lg w-8 h-8">
                <img src="/public/images/ab-5.png" alt="" />
              </div>
            </div>
          </div>

          {/* Checklist */}
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-center gap-2 justify-end">
              <span>سلسلة من الأنظمة اليدوية وشبه اليدوية</span>
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-500 text-white text-xs">
                ✓
              </span>
            </li>
            <li className="flex items-center gap-2 justify-end">
              <span>البناء يختلف عن المجالات الأخرى</span>
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs">
                ✓
              </span>
            </li>
          </ul>
        </div>

        {/* Icon / Visual */}
        <div className="relative flex flex-col justify-center lg:justify-start">
          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-lg animate-spin-slow ">
            <img src="images/ab-shape-1.png" alt="" />
          </div>
          <div className="absolute -right-5 top-1/2 -translate-y-1/2 h-64 w-1 bg-orange-400 hidden md:block  animate-top-down" />

          <div className="">
            <img
              src="/images/hero1.jpg"
              alt=""
              className="mt-1.5"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AviationHero
