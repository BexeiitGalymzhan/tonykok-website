import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="relative pb-20 pt-10">
      <div className="flex flex-col items-center ">
        <h2 className="uppercase tracking-widest text-2xl lg:text-4xl  text-blue-100 max-w-80 mb-4">
          Контакты
        </h2>
        <p className="text-center max-w-2xl mb-17  text-lg">
          Мы будем рады услышать вас! Если у вас есть вопросы, нужна
          дополнительная информация или вы хотите обсудить сотрудничество — наша
          команда всегда готова помочь.
        </p>
        <div className="grid grid-cols-[350px] md:grid-cols-[2fr_3fr] gap-20 md:gap-40 mx-auto max-w-6xl ">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Контактная информация
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gray-900">
                  <Mail className="h-6 w-6 text-sky-200" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Электронная почта </h4>
                  <a
                    href="mailto:dcc@tonykok.com"
                    className="hover:text-blue-200"
                  >
                    dcc@tonykok.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gray-900">
                  <Phone className="h-6 w-6 text-sky-200" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Телефон </h4>
                  <a href="tel:+77070070707" className="hover:text-blue-200">
                    +7 (707) 007-07-07
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-gray-900">
                  <MapPin className="h-6 w-6 text-sky-200" />{" "}
                </div>
                <div>
                  <h4 className="font-medium">Адрес </h4>
                  <a className="hover:text-blue-200">
                    г.Атырау, проспект Бейбарыс Султан, 450
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg max-w-150 -top-4 relative shadow-lg">
            <h2 className="text-2xl pl-3 py-4  md:text-3xl font-semibold text-white px-6  border-b border-gray-700">
              Мы на карте
            </h2>
            <div className="w-full h-64 md:h-96 rounded-b-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d621.3807075711698!2d51.867735219320664!3d47.11947386653456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a3e9a664c0c0c3%3A0x87f139a011e1b3dc!2z0L_RgNC-0YHQvy4g0KHRg9C70YLQsNC9INCR0LXQudCx0LDRgNGL0YEgNDUwLCDQkNGC0YvRgNCw0YMgMDYwMDAw!5e0!3m2!1sru!2skz!4v1755860808745!5m2!1sru!2skz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
