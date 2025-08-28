"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Опыт и надежность",
    text: "Более 15 лет в строительной сфере. Реализовали десятки объектов разной сложности в Атырау и по Казахстану.",
  },
  {
    id: "02",
    title: "Высокое качество работ",
    text: "Используем сертифицированные материалы и современные технологии для прочности, безопасности и долговечности.",
  },
  {
    id: "03",
    title: "Соблюдение сроков",
    text: "Мы ценим время клиентов и гарантируем выполнение проектов в оговоренные сроки.",
  },
  {
    id: "04",
    title: "Прозрачность и доверие",
    text: "Подробные сметы, честная коммуникация и отсутствие скрытых затрат — мы строим с открытостью и честностью.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-12 sm:py-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="uppercase tracking-widest text-lg text-blue-100 max-w-80 mb-2"
      >
        Почему выбирают нас
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-2xl lg:text-4xl mb-12"
      >
        Прочность, проверенная временем.
      </motion.h1>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-8">
        {/* Левая колонка с картинкой */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-2xl shadow p-4 sm:p-5 flex flex-col hover:scale-[1.02] transition-transform duration-300"
        >
          <Image
            src="/construction.jpg"
            alt="Строительная площадка"
            width={700}
            height={450}
            className="rounded-xl object-cover w-full h-48 sm:h-56 md:h-64 lg:h-[320px]"
          />
          <p className="mt-3 sm:mt-4 text-md text-gray-200">
            ТОО «Tonykok Constructions» предоставляет полный комплекс
            строительных услуг — от проектирования и планирования до сдачи
            объекта под ключ. Мы строим прочные, современные и безопасные
            здания, соответствующие всем стандартам.
          </p>
        </motion.div>

        {/* Правая колонка с преимуществами */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-900 rounded-2xl shadow p-5 flex flex-col hover:scale-[1.05] transition-transform duration-300"
            >
              <span className="text-gray-400 text-sm font-semibold mb-2">
                ({feature.id})
              </span>
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-200 text-md">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
