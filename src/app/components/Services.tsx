import Slider from "./ui/Slider";

function Services() {
  return (
    <section id="services" className="relative  pb-25 mt-10 sm:mt-15   ">
      <h2 className="uppercase tracking-widest text-lg  text-blue-100 max-w-80 mb-2">
        What we offer
      </h2>
      <h1 className="text-2xl lg:text-4xl mb-5  ">
        Delivering for Our Clients
      </h1>
      <Slider />
    </section>
  );
}

export default Services;
