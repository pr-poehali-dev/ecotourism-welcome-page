const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-eco-pale via-white to-eco-pale overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-eco-light/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-eco-primary/20 rounded-full blur-lg animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 text-center animate-fade-in">
        {/* Логотип */}
        <div className="mb-8">
          <img
            src="https://cdn.poehali.dev/files/5a0f9592-4423-4d15-8e80-d9cd98c3c00d.png"
            alt="В Бабровый Поход! Логотип"
            className="mx-auto h-32 w-auto object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Заголовки */}
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-eco-dark mb-4 tracking-tight">
          В Бабровый Поход!
        </h1>

        <h2 className="font-montserrat font-semibold text-2xl md:text-3xl text-eco-primary mb-8">
          Придумай шаги! 🌲
        </h2>

        {/* Основное описание */}
        <p className="text-lg md:text-xl text-eco-dark/80 max-w-3xl mx-auto leading-relaxed mb-12">
          Экообразовательная программа для подростков 14-18 лет. Участвуй в
          <span className="text-eco-primary font-semibold">
            {" "}
            экологическом марафоне
          </span>{" "}
          и создай свой экотуристический отряд в Иркутской области!
        </p>

        {/* CTA кнопка */}
        <button className="bg-eco-primary hover:bg-eco-dark text-white font-montserrat font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-eco-primary/20">
          Начать приключение! 🚀
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
