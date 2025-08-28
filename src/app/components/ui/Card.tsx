"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { CardProp } from "@/data/services";
import { createPortal } from "react-dom";

function Card({ imgUrl, title, description, modalText }: CardProp) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen && !isClosing) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [isOpen, isClosing]);

  // ⌨️ Close modal on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && modalRef.current === e.target) {
      handleClose();
    }
  };

  // Smooth close with animation
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      setIsOpen(false);
    }, 300); // match duration of Tailwind transition
  };

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        className="flex flex-col h-full mb-10 relative w-full overflow-hidden 
                   bg-gray-900 hover:bg-gray-950 cursor-pointer
                   transform transition-transform duration-300 hover:scale-105  
                   shadow-md hover:shadow-xl"
      >
        <div className="relative w-full h-60">
          <Image src={imgUrl} alt={title} fill className="object-cover" />
        </div>
        <div className="px-4 flex flex-col flex-grow">
          <h3 className="text-white mt-4 text-2xl">{title}</h3>
          <p className="text-gray-300 mt-2 flex-1">{description}</p>
        </div>
      </div>

      {/* Modal */}
      {isOpen &&
        createPortal(
          <div
            ref={modalRef}
            onClick={handleBackdropClick}
            className={`fixed inset-0 flex items-center justify-center z-50 p-4
                        bg-black/70 transition-opacity duration-300 
                        ${isClosing ? "opacity-0" : "opacity-100"}`}
          >
            <div
              className={`bg-gray-900 p-6 rounded-2xl shadow-2xl w-full max-w-2xl relative 
                          transform transition-all duration-300
                          ${
                            isClosing
                              ? "opacity-0 scale-95"
                              : "opacity-100 scale-100"
                          }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
              >
                ✕
              </button>
              {/* Modal Content */}
              <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
              <div className="relative w-full aspect-video mb-4 rounded-lg overflow-hidden">
                <Image src={imgUrl} alt={title} fill className="object-cover" />
              </div>
              <h2 className="text-lg">{description}</h2> <br />
              <p className="text-gray-300 leading-relaxed max-h-64 overflow-y-auto pr-2">
                {modalText}
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}

export default Card;
