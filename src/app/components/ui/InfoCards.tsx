import { CircleCheckBig } from "lucide-react";

const cardsInfo = [
  { id: 1, text: "Система контроля качества" },
  { id: 2, text: "Гарантия надежности и долговечности" },
  { id: 3, text: "Профессиональная команда специалистов" },
  { id: 4, text: "Точные и проверенные технологии" },
];

function InfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
      {cardsInfo.map((card) => (
        <div
          key={card.id}
          className="relative group transition-transform duration-300 hover:-translate-y-2"
        >
          {/* карточка */}
          <div className="[clip-path:polygon(15%_0,100%_0,85%_100%,0_100%)] bg-gray-900 h-32 flex items-center justify-center text-center rounded-xl px-6 shadow-md">
            <p className="text-white text-lg font-medium leading-snug">
              {card.text}
            </p>
          </div>

          {/* иконка */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow-lg border-gray-600 border-2 group-hover:border-sky-300 transition-colors">
            <CircleCheckBig className="text-sky-200 w-7 h-7" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
