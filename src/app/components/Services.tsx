import Slider from "./ui/Slider";

function Services() {
  return (
    <section id="services" className="relative  pb-15 pt-10 sm:pt-15   ">
      <h2 className="uppercase tracking-widest text-lg  text-blue-100 max-w-80 mb-2">
        Наши услуги
      </h2>
      <h1 className="text-2xl lg:text-4xl mb-5  ">
        Мы строим для вашего будущего.
      </h1>
      <Slider />
    </section>
  );
}

export default Services;
