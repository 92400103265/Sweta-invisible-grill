"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import OptimizedImage from "@/components/shared/OptimizedImage";
import { Button } from "@/components/ui/button";
import { getServiceRoute } from "@/data/servicesData";
import {
  Phone,
  ArrowRight,
  Grid3X3,
  Store,
  Fence,
  Shirt,
  Zap,
} from "lucide-react";

const slides = [
  {
    id: 1,
    icon: Grid3X3,
    title: "Invisible Grills",
    subtitle: "Premium Stainless Steel Protection",
    description:
      "Professional invisible grill installation in Gurugram, Delhi NCR and Noida. Our quality stainless steel invisible grills provide child and pet safety for balconies and windows while maintaining clear views and ventilation.",
    image: "/images/invisible-grill-1.jpg",
    alt: "Invisible Grills installation in Gurugram, Delhi NCR and Noida for balcony and window safety",
    keywords: ["Child Safety", "Rust-Resistant", "Warranty Support"],
    href: "/services/invisible-grills",
    cta: "Explore Invisible Grills",
  },
  {
    id: 2,
    icon: Store,
    title: "Invisible Grills Dealer",
    subtitle: "Authorized Dealership & Wholesale",
    description:
      "Partner with Sweta Invisible Grill for invisible grill dealership opportunities. Get wholesale pricing, product guidance, installation support and business assistance for your market.",
    image: "/images/invisible-grill-dealer.jpg",
    alt: "Invisible Grills dealer and wholesale services by Sweta Invisible Grill",
    keywords: ["Wholesale Pricing", "Dealer Support", "Installation Guidance"],
    href: getServiceRoute("invisible-grills-dealer"),
    cta: "Become a Dealer",
  },
  {
    id: 3,
    icon: Fence,
    title: "Safety Nets",
    subtitle: "Child & Pet Protection Solutions",
    description:
      "Professional safety net installation for balconies, windows and open areas across Gurugram, Delhi NCR and Noida. Quality, weather-resistant safety solutions designed to protect children, pets and families.",
    image: "/images/balcony-net-1.jpg",
    alt: "Balcony safety net installation in Gurugram for child and pet protection",
    keywords: ["Child Safety", "Pet Protection", "Weather Resistant"],
    href: "/services/balcony-safety",
    cta: "Explore Safety Nets",
  },
  {
    id: 4,
    icon: Shirt,
    title: "Ceiling Cloth Hangers",
    subtitle: "Space-Saving Drying Solutions",
    description:
      "Maximize your home space with practical ceiling-mounted cloth drying systems. Pulley-operated, rust-resistant and designed for convenient everyday laundry drying.",
    image: "/images/cloth-drying-pulley-1.jpg",
    alt: "Ceiling cloth hanger installation for space-saving laundry drying",
    keywords: ["Pulley System", "Space Saving", "Rust-Resistant"],
    href: "/services/cloth-drying",
    cta: "Explore Hangers",
  },
  {
    id: 5,
    icon: Zap,
    title: "Sports Nets",
    subtitle: "Durable Sports Practice Solutions",
    description:
      "Quality sports nets for cricket, badminton and other sports applications. Durable and weather-resistant solutions for homes, schools, academies, clubs and recreational spaces.",
    image: "/images/all-sports-net-1.jpg",
    alt: "Sports nets for cricket and badminton practice areas",
    keywords: ["Durable", "Weather Resistant", "Sports Practice"],
    href: "/services/all-sports-practice",
    cta: "Explore Sports Nets",
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const minSwipeDistance = 50;

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setCurrentSlide(index);

      setTimeout(() => setIsAnimating(false), 1000);
    },
    [isAnimating]
  );

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-slide with pause support
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      return;
    }

    timerRef.current = setInterval(nextSlide, 6000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [nextSlide, isPaused]);

  const handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        // Swiped left - next slide
        nextSlide();
      } else {
        // Swiped right - previous slide
        prevSlide();
      }
    }

    setIsPaused(false);
  };

  const handleMouseDown = () => {
    setIsPaused(true);
  };

  const handleMouseUp = () => {
    setIsPaused(false);
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative w-full min-h-[500px] sm:min-h-[560px] md:min-h-[660px] lg:min-h-[680px] overflow-hidden rounded-xl"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Background Images */}
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100 hero-slide-active"
              : "opacity-0"
          }`}
        >
          <OptimizedImage
            src={s.image}
            alt={s.alt || s.title}
            className="h-full w-full"
            loading={index === 0 ? "eager" : "lazy"}
            priority={index === 0}
            fetchPriority={index === 0 ? "high" : "auto"}
            sizes="(max-width: 768px) 100vw, 75vw"
          />

          {/* Subtle dark overlay */}
          {s.id === 2 || s.id === 3 ? (
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(222,47%,8%,0.6)] via-[hsl(222,47%,10%,0.45)] to-[hsl(222,47%,10%,0.32)]" />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/20" />
          )}
        </div>
      ))}

      {/* Content */}
      <div className="container z-10 flex h-full items-center">
        <div className="max-w-3xl py-8 md:py-12">
          {/* Badge */}
          <div
            key={`badge-${currentSlide}`}
            className="hero-content-animate mb-3 md:mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 md:px-4 md:py-1.5 text-sm md:text-base font-medium text-white backdrop-blur-sm"
          >
            <slide.icon
              className="h-3 w-3 md:h-4 md:w-4"
              style={{ color: "#FF6B42" }}
            />

            Sweta Invisible Grill
          </div>

          {/* Stable SEO heading */}
          <h1 className="sr-only">
            Invisible Grills &amp; Safety Nets in Gurugram, Delhi NCR and Noida
          </h1>

          {/* Title */}
          <h2
            key={`title-${currentSlide}`}
            className="hero-content-animate mb-2 md:mb-3 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-white"
            style={{ animationDelay: "0.1s" }}
          >
            {slide.title}
          </h2>

          {/* Subtitle */}
          <p
            key={`subtitle-${currentSlide}`}
            className="hero-content-animate mb-3 md:mb-4 font-semibold text-base sm:text-lg md:text-xl lg:text-2xl text-accent"
            style={{ animationDelay: "0.2s" }}
          >
            {slide.subtitle}
          </p>

          {/* Description */}
          <p
            key={`desc-${currentSlide}`}
            className="hero-content-animate mb-3 md:mb-4 max-w-2xl text-base md:text-lg lg:text-xl line-clamp-2 md:line-clamp-3"
            style={{
              color: "rgba(248, 251, 255, 0.8)",
              animationDelay: "0.3s",
            }}
          >
            {slide.description}
          </p>

          {/* Keywords */}
          <div
            key={`keywords-${currentSlide}`}
            className="hero-content-animate mb-3 md:mb-4 flex flex-wrap gap-1 md:gap-2"
            style={{ animationDelay: "0.4s" }}
          >
            {slide.keywords.map((keyword, idx) => (
              <span
                key={idx}
                className="rounded-full border px-2.5 py-1 md:px-3 md:py-1 text-sm md:text-base text-white/90 backdrop-blur-sm"
                style={{
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
              >
                {keyword}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div
            key={`cta-${currentSlide}`}
            className="hero-content-animate flex flex-col items-start gap-2 sm:flex-row md:gap-3 mb-6 md:mb-8"
            style={{ animationDelay: "0.5s" }}
          >
            <Button
              size="sm"
              className="cta-gradient text-white h-10 md:h-11 text-sm md:text-base px-5 md:px-6 flex items-center gap-2"
              asChild
            >
              <Link href={slide.href}>
                {slide.cta}
                <ArrowRight className="h-3 w-3 md:h-4 md:w-4" />
              </Link>
            </Button>

            <Button
              size="sm"
              variant="outline"
              className="h-10 md:h-11 text-sm md:text-base px-5 md:px-6 flex items-center gap-2 text-white"
              style={{
                borderColor: "rgba(255, 255, 255, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.10)",
              }}
              asChild
            >
              <a href="tel:+917065953252" data-track="call">
                <Phone className="h-3 w-3 md:h-4 md:w-4" />

                <span className="hidden sm:inline">
                  +91 7065953252
                </span>

                <span className="sm:hidden">
                  Call Now
                </span>
              </a>
            </Button>
          </div>

          {/* Service Areas */}
          <div
            key={`rating-${currentSlide}`}
            className="hero-content-animate flex flex-col items-start gap-1 md:gap-2 pt-4 md:pt-6 border-t border-white/20"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="flex items-center gap-1.5 md:gap-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="h-3 w-3 md:h-4 md:w-4 lg:h-5 lg:w-5 flex-shrink-0 fill-current"
                  style={{ color: "#FF6B42" }}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.335 24 12 20.202 4.665 24 6 15.595 0 9.748l8.332-1.73z" />
                </svg>
              ))}

              <span className="text-xs md:text-sm lg:text-base font-bold text-white leading-tight">
                Professional Installation
              </span>
            </div>

            <span className="text-xs md:text-sm text-white/80 leading-tight">
              Gurugram • Delhi NCR • Noida
            </span>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 md:gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 focus:outline-none min-h-0 min-w-0 flex-shrink-0 ${
              index === currentSlide
                ? "h-2 md:h-2.5 w-6 md:w-8 bg-accent shadow-lg shadow-accent/50"
                : "h-2 md:h-2.5 w-2 md:w-2.5 bg-white/40 hover:bg-white/60 hover:scale-125"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}