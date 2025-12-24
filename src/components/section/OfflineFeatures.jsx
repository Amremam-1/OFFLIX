const features = [
  {
    title: "الإنترنت والأمن السيبراني",
    icon: "🔒",
    items: [
      "توفير اتصال آمن وموثوق بالإنترنت.",
      "حماية الشبكة من التهديدات السيبرانية.",
      "مراقبة الأنشطة المشبوهة.",
    ],
  },
  {
    title: "مصدر الطاقة",
    icon: "📺",
    items: [
      "يتوافق النظام مع مصادر الطاقة القياسية المتوفرة داخل الطائرات.",
      "لا يتطلب أي تعديلات هيكلية أو كهربائية.",
      "سهل التركيب دون التأثير على أنظمة الطائرة الأساسية.",
    ],
  },
  {
    title: "طريقة الوصول",
    icon: "📡",
    items: [
      "كل راكب يحصل على باركود خاص.",
      "عند المسح، يتم فتح واجهة تفاعلية لملكية المحتوى.",
    ],
  },
  {
    title: "البنية الأساسية",
    icon: "📶",
    items: [
      "راوتر محلي يعمل كخادم داخلي لبث المحتوى.",
      "تقسيم المحتوى حسب الفئات (درجة الأعمال، الدرجة السياحية).",
    ],
  },
]

export default function OfflineFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <p className="text-orange-500 font-medium mb-2">كيفية عمل النظام</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          <span className="text-orange-500">مميزات</span>{" "}
          <span className="text-gray-900">الخدمات الداخلية</span>
          <br />
          <span className="text-gray-900">(Offline)</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white shadow-lg rounded-xl p-6 transition-all duration-300 hover:bg-blue-600 hover:shadow-xl"
            >
              {/* Yellow corner */}
              <div
                className="absolute top-0 right-0 w-0 h-0 border-t-[42px] border-t-yellow-400 border-l-[42px]
                 border-l-transparent transform origin-top scale-y-0 translate-y-[-10px]
                transition-all duration-300 ease-out group-hover:scale-y-100 group-hover:translate-y-0
  "
              />
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50 text-2xl transition group-hover:bg-white/20">
                <span className="group-hover:text-white">{feature.icon}</span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-4 text-gray-900 transition group-hover:text-white">
                {feature.title}
              </h3>

              {/* Content */}
              <ul className="text-gray-600 text-sm space-y-2 leading-relaxed transition group-hover:text-white">
                {feature.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
