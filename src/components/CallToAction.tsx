const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-eco-primary via-eco-light to-eco-primary relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Заголовок */}
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl mb-6">
            Готов к приключению? 🌟
          </h2>

          {/* Подзаголовок */}
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Присоединяйся к программе «В Бабровый Поход!» и стань частью команды
            молодых экологов Иркутской области
          </p>

          {/* Преимущества */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Бесплатно
              </h3>
              <p className="text-sm opacity-80">
                Полностью бесплатная программа для всех участников
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl mb-3">📜</div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Сертификат
              </h3>
              <p className="text-sm opacity-80">
                Получи официальный сертификат экогида
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-montserrat font-semibold text-lg mb-2">
                Опыт
              </h3>
              <p className="text-sm opacity-80">
                Реальный опыт работы в сфере экотуризма
              </p>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-eco-primary font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-eco-pale transition-all duration-300 hover:scale-105 shadow-lg">
              Подать заявку 🚀
            </button>
            <button className="border-2 border-white text-white font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-eco-primary transition-all duration-300 hover:scale-105">
              Узнать больше ℹ️
            </button>
          </div>

          {/* Контактная информация */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-sm opacity-80">
              Есть вопросы? Свяжись с нами:
              <span className="font-semibold ml-2">
                eco.trip.irkutsk@mail.ru
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
