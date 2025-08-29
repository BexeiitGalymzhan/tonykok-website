"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    id: "01",
    title: "Высокое качество работы",
    text: "Мы обеспечиваем строгий контроль на всех этапах строительства — от проектирования до сдачи объекта.",
  },
  {
    id: "02",
    title: "Собственная техника и база",
    text: "Наличие собственного парка техники и производственной базы в Атырау позволяет нам работать с высокой эффективностью.",
  },
  {
    id: "03",
    title: "Гибкость и своевременность",
    text: "Мы быстро адаптируемся к изменениям условий проекта и гарантируем выполнение работ в срок.",
  },
  {
    id: "04",
    title: "Профессиональная команда",
    text: "Наши специалисты — опытные инженеры, проектировщики и строители, владеющие современными технологиями.",
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
        Наши конкурентные преимущества
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
            ТОО «Тоныкөк Құрылыс» — надёжный партнёр в сфере промышленного и
            гражданского строительства. Мы строим жилые комплексы, общественные
            здания, инженерные сети и реализуем проекты по реставрации
            памятников истории и культуры.
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
