const FeatureCards = () => {
  const features = [
    {
      icon: "🏃‍♂️",
      title: "Экологический марафон",
      description:
        "Участвуй в уникальном марафоне по живописным местам Иркутской области — главное событие программы для всех участников",
    },
    {
      icon: "👥",
      title: "Управление экоотрядом",
      description:
        "Создай и возглавь собственный экотуристический отряд — стань лидером команды единомышленников",
    },
    {
      icon: "🎯",
      title: "Планирование маршрутов",
      description:
        "Разрабатывай экологические маршруты для своего отряда и координируй их выполнение",
    },
    {
      icon: "🌲",
      title: "Изучение экосистем",
      description:
        "Исследуй уникальные природные зоны Байкала и тайги во время марафона и походов отряда",
    },
    {
      icon: "📋",
      title: "Управленческие навыки",
      description:
        "Развивай лидерские качества, управляя своим экотуристическим отрядом и принимая ключевые решения",
    },
    {
      icon: "🏆",
      title: "Достижения отряда",
      description:
        "Соревнуйся с другими отрядами в марафоне и экологических проектах, достигая общих целей",
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
