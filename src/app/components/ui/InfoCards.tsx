import { CircleCheckBig } from "lucide-react";

const cardsInfo = [
  { id: 1, text: "Quality control system" },
  { id: 2, text: "100% Satisfaction guarantee" },
  { id: 3, text: "Highly professional team" },
  { id: 4, text: "Accurate testing processes" },
];

function InfoCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 pt-25 px-9 gap-15 sm:gap-1 md:gap-3 items-center">
      {cardsInfo.map((card) => (
        <div key={card.id} className="relative ">
          <div className="[clip-path:polygon(15%_0,100%_0,85%_100%,0_100%)] bg-gray-900 h-28 flex items-center justify-center text-center rounded-xl px-6">
            <p className="text-white text-lg w-36">{card.text}</p>
          </div>
          <div className="absolute -top-5 left-1/2  w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center shadow-lg border-gray-500 border-2">
            <CircleCheckBig className="text-sky-200 w-6 h-6" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;
