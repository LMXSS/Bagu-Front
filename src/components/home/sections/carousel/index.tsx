"use client";
import {
  Carousel,
  CarouselContent,
  CarouselCustomNext,
  CarouselCustomPrevious,
  CarouselItem,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";

type Props = {
  images: (string | Blob | undefined)[];
};

export default function AppCarousel({ images }: Props) {
  return (
    <div
      className="w-full flex items-center justify-center mb-10"
      style={{
        background:
          "linear-gradient(90deg,rgba(255, 219, 255, 1) 1%, rgba(248, 242, 255, 1) 51%, rgba(255, 212, 252, 1) 100%)",
      }}
    >
      <Carousel className="w-4/6">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1 relative flex items-center justify-center h-96">
                <img
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    filter: "blur(5px)",
                  }}
                  src={image}
                />
                <Button
                  style={{
                    borderRadius: 30,
                    padding: "20px 40px",
                    background:
                      "linear-gradient(90deg,#f981af 0%, rgba(197, 87, 199, 1) 64%, #fc87db 100%)",
                  }}
                  className="absolute bottom-5 left-1/2 -translate-x-1/2"
                >
                  Assine para Ver
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselCustomNext />
        <CarouselCustomPrevious />
      </Carousel>
    </div>
  );
}
