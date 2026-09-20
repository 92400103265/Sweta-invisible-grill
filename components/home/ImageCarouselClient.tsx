"use client";

import dynamic from "next/dynamic";
import { CarouselSkeleton } from "@/components/ui/Skeletons";
import LazyMount from "@/components/ui/LazyMount";

const ImageCarousel = dynamic(() => import("./ImageCarousel"), {
  ssr: false,
  loading: () => <CarouselSkeleton />,
});

export default function ImageCarouselClient() {
  return (
    <LazyMount>
      <ImageCarousel />
    </LazyMount>
  );
}