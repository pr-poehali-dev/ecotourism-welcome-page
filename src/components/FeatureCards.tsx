const FeatureCards = () => {
  const features = [
    {
      icon: "🌲",
      title: "Исследование природы",
      description:
        "Изучай уникальные экосистемы Байкала и тайги, открывай новые виды и понимай их роль в природе",
    },
    {
      icon: "🥾",
      title: "Активные походы",
      description:
        "Пешие и водные маршруты по самым красивым местам Иркутской области с опытными инструкторами",
    },
    {
      icon: "📸",
      title: "Эко-фотография",
      description:
        "Учись запечатлевать красоту природы, создавай контент для продвижения экотуризма",
    },
    {
      icon: "🤝",
      title: "Командная работа",
      description:
        "Работай в команде единомышленников, создавай проекты и находи новых друзей",
    },
    {
      icon: "🎓",
      title: "Обучение экогидов",
      description:
        "Получи навыки экскурсовода и сертификат, который поможет в будущей карьере",
    },
    {
      icon: "💡",
      title: "Инновационные решения",
      description:
        "Разрабатывай креативные идеи для развития устойчивого туризма в регионе",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-eco-pale to-white">
      <div className="container mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl text-eco-dark mb-6">
            Что тебя ждет
          </h2>
          <p className="text-xl text-eco-dark/70 max-w-2xl mx-auto">
            Погрузись в мир экотуризма через увлекательные активности и
            практический опыт
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-eco-pale"
            >
              {/* Иконка */}
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Заголовок */}
              <h3 className="font-montserrat font-semibold text-xl text-eco-dark mb-4">
                {feature.title}
              </h3>

              {/* Описание */}
              <p className="text-eco-dark/70 leading-relaxed">
                {feature.description}
              </p>

              {/* Декоративная линия */}
              <div className="mt-6 w-12 h-1 bg-eco-primary rounded-full group-hover:w-20 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
