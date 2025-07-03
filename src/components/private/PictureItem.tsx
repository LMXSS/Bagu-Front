// components/private/PictureItem.tsx
"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

type Props = {
  url: string;
  showFanClubButton?: boolean;
  price?: number;
  isVideo?: boolean;
};

function PictureItem({ url, showFanClubButton, price, isVideo }: Props) {
  return (
    <div className="relative w-full aspect-[3/3] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
      <Image
        src={url}
        alt="Imagem"
        fill
        className={
          "object-cover" + (showFanClubButton || !!price ? " blur-md" : "")
        }
        sizes="(max-width: 768px) 100vw, 25vw"
      />
      {isVideo && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-opacity-50 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-16 h-16 text-white"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      {showFanClubButton && (
        <Button className="absolute rounded-full bottom-2/12 left-1/2 -translate-x-1/2 translate-y-1/2 bg-indigo-400/95 text-white cursor-pointer hover:text-indigo-800">
          Assinar FanClub
        </Button>
      )}
      {price && (
        <Button className="absolute rounded-full bottom-2/12 left-1/2 -translate-x-1/2 translate-y-1/2 bg-orange-500 text-white cursor-pointer hover:text-amber-600">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </Button>
      )}
    </div>
  );
}

export default PictureItem;
