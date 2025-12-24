export default function ProvidedServices() {
  const services = [
    {
      title: "متجر الطائرة الإلكتروني",
      desc: ["يمكن للمسافرين الطلب من المتجر.", "استخدام رقم المقعد مباشرة."],
    },
    {
      title: "زيادة الإيرادات",
      desc: ["تقديم محتوى مدفوع.", "بيع مساحات إعلانية."],
    },
    {
      title: "تقليل التكاليف التشغيلية",
      desc: ["لا حاجة للإنترنت الجوي.", "سهولة الصيانة والتحديث."],
    },
    {
      title: "تعزيز تجربة المسافرين",
      desc: ["محتوى متنوع.", "زيادة رضا العملاء."],
    },
    {
      title: "الجوانب التقنية",
      desc: [
        "خادم محلي آمن ومعتمد.",
        "متوافق تمامًا مع لوائح وإجراءات سلامة الطيران.",
        "صيانة سهلة وتحديث سريع أثناء توقف الطائرة.",
      ],
    },
    {
      title: "الإيرادات الإضافية",
      desc: [
        "إعلانات داخل مكتبة الميديا.",
        "خدمات المحتوى المدفوع.",
        "متجر الطائرة الإلكتروني.",
      ],
    },
    {
      title: "آلية التحديث",
      desc: [
        "تتم حسب الاتفاق مع شركات الإنتاج والتوزيع.",
        "ضمان محتوى محدث وآمن ومتجدد بشكل منتظم.",
      ],
    },
    {
      title: "محتوى مكتبة الميديا",
      desc: [
        "ترفيه (أفلام ومسلسلات حديثة).",
        "ثقافي وتعليمي (كتب إلكترونية، وثائقيات).",
        "ديني (محتوى إسلامي مخصص).",
        "للأطفال (محتوى آمن ومناسب للعمر).",
      ],
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-right mb-16">
          <p className="text-orange-400 text-sm mb-2">
            مزايا النظام والخدمات المقدمة لشركات الطيران
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block relative">
            الخدمات التي نقدمها
            {/* underline البرتقالي */}
            <span className="absolute right-0 -bottom-2 w-20 h-1 bg-orange-400 rounded" />
          </h2>
        </div>
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
                className="absolute inset-0 bg-blue-600 text-white p-6 
                  opacity-0 translate-y-6
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-y-0
                "
              >
                {/* Yellow corner */}
                <div
                  className="absolute top-0 right-0 w-0 h-0 
                    border-t-[42px] border-t-yellow-400 
                    border-l-[42px] border-l-transparent"
                />

                <div className="mb-6 text-2xl">★</div>
                <h3 className="font-bold text-lg mb-4">{item.title}</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  يمكن عرض تفاصيل إضافية أو CTA هنا بشكل أوضح عند التفاعل.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
