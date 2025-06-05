const ProgramDescription = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Заголовок секции */}
          <div className="text-center mb-16">
            <h2 className="font-montserrat font-bold text-4xl text-eco-dark mb-6">
              О программе
            </h2>
            <div className="w-24 h-1 bg-eco-primary mx-auto rounded-full"></div>
          </div>

          {/* Контент программы */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Левая колонка - текст */}
            <div className="space-y-6">
              <div className="bg-eco-pale p-6 rounded-2xl border-l-4 border-eco-primary">
                <h3 className="font-montserrat font-semibold text-xl text-eco-dark mb-3">
                  🎯 Для кого?
                </h3>
                <p className="text-eco-dark/80">
                  Подростки 14-18 лет, увлеченные природой и желающие внести
                  свой вклад в развитие экологического туризма
                </p>
              </div>

              <div className="bg-eco-pale p-6 rounded-2xl border-l-4 border-eco-light">
                <h3 className="font-montserrat font-semibold text-xl text-eco-dark mb-3">
                  🌍 Что изучаем?
                </h3>
                <p className="text-eco-dark/80">
                  Уникальные экосистемы Иркутской области, принципы устойчивого
                  туризма и методы сохранения природы
                </p>
              </div>

              <div className="bg-eco-pale p-6 rounded-2xl border-l-4 border-eco-primary">
                <h3 className="font-montserrat font-semibold text-xl text-eco-dark mb-3">
                  🚀 Результат
                </h3>
                <p className="text-eco-dark/80">
                  Практические навыки экогида, понимание экотуризма и готовые
                  проекты для развития региона
                </p>
              </div>
            </div>

            {/* Правая колонка - статистика */}
            <div className="space-y-6">
              <div className="text-center bg-gradient-to-br from-eco-primary to-eco-light p-8 rounded-3xl text-white">
                <div className="text-4xl font-montserrat font-bold mb-2">
                  Май 2026
                </div>
                <div className="text-lg opacity-90">Старт программы</div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center bg-eco-pale p-6 rounded-2xl">
                  <div className="text-3xl font-montserrat font-bold text-eco-dark mb-1">
                    14-18
                  </div>
                  <div className="text-sm text-eco-dark/70">лет</div>
                </div>
                <div className="text-center bg-eco-pale p-6 rounded-2xl">
                  <div className="text-3xl font-montserrat font-bold text-eco-dark mb-1">
                    ∞
                  </div>
                  <div className="text-sm text-eco-dark/70">возможностей</div>
                </div>
              </div>

              <div className="text-center bg-eco-pale p-6 rounded-2xl">
                <div className="text-2xl font-montserrat font-bold text-eco-dark mb-2">
                  🏔️ Иркутская область
                </div>
                <div className="text-sm text-eco-dark/70">
                  Наш дом для исследований
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDescription;
