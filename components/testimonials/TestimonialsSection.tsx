'use client';

import { useState, useRef, memo } from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Amit Sharma",
      service: "Invisible Grills",
      rating: 5,
      review: "Excellent invisible grill installation for our apartment in Gurugram. The grills maintain the view while providing excellent safety and security. The team was professional and the installation quality was excellent.",
      initials: "AS",
      location: "Gurugram"
    },
    {
      name: "Rahul Verma",
      service: "Pigeon Nets",
      rating: 5,
      review: "Excellent service from Sweta Invisible Grill. The pigeon net was installed neatly on our balcony in Gurugram. The team explained the available options clearly and completed the work professionally.",
      initials: "RV",
      location: "Gurugram"
    },
    {
      name: "Neha Gupta",
      service: "Balcony Safety Nets",
      rating: 5,
      review: "Very satisfied with the balcony safety net installation. The material quality was good and the installation team was professional. A reliable safety solution for our family.",
      initials: "NG",
      location: "Delhi NCR"
    },
    {
      name: "Rajesh Kumar",
      service: "Pigeon Nets",
      rating: 5,
      review: "Very good service by the Sweta Invisible Grill team. The pigeon safety net was installed neatly and the team completed the work professionally. Thank you for the excellent service.",
      initials: "RK",
      location: "Noida"
    },
    {
      name: "Priya Singh",
      service: "Children Protection Nets",
      rating: 5,
      review: "Amazing service for child safety nets. The team installed the balcony safety net neatly and explained the safety features clearly. It gives us extra peace of mind for our children.",
      initials: "PS",
      location: "Gurugram"
    },
    {
      name: "Rohit Mehta",
      service: "Invisible Grills",
      rating: 5,
      review: "Professional installation and neat finishing. The team provided clear information about the materials and completed the invisible grill installation according to our requirements.",
      initials: "RM",
      location: "Delhi NCR"
    }
  ];

  const handleTouchStart = () => setIsPaused(true);
  const handleTouchEnd = () => setIsPaused(false);

  return (
    <section id="testimonials" className="py-12 md:py-16 lg:py-12" style={{
      background: "linear-gradient(180deg, #1E2A42 0%, #121D2F 100%)"
    }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold" style={{ color: "#F0F6FF" }}>
            What Our <span style={{ color: "#FF6B42" }}>Customers Say</span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg max-w-2xl mx-auto" style={{ color: "#C8D8EE" }}>
            Feedback from customers who trust Sweta Invisible Grill for their safety and protection needs
          </p>
        </div>

        {/* Scrolling Cards */}
        <div
          className="relative overflow-x-auto scrollbar-hide"
          ref={scrollContainerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`flex gap-4 md:gap-6 min-w-max ${!isPaused ? 'animate-scroll' : ''}`}
            style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          >
            {/* First set */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 md:w-80 rounded-lg transition-all hover:shadow-lg p-4 md:p-6 space-y-4"
                style={{
                  background: "linear-gradient(135deg, #121D2F 0%, #121D2F 100%)",
                  border: "1px solid rgba(36, 61, 99, 0.5)",
                  borderTop: "2px solid #FF6B42",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
                }}
              >
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-current" style={{ color: "#FF6B42" }} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-xs md:text-sm italic leading-relaxed" style={{ color: "#C8D8EE" }}>
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold" style={{
                    background: "linear-gradient(135deg, #FF6B42, #F25024)",
                    color: "#ffffff"
                  }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base" style={{ color: "#F0F6FF" }}>{testimonial.name}</div>
                    <div className="text-xs" style={{ color: "#8FAAC8" }}>
                      {testimonial.service} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 w-72 md:w-80 rounded-lg transition-all hover:shadow-lg p-4 md:p-6 space-y-4"
                style={{
                  background: "linear-gradient(135deg, #1E2A42 0%, #121D2F 100%)",
                  border: "1px solid rgba(36, 61, 99, 0.5)",
                  borderTop: "2px solid #FF6B42",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)"
                }}
              >
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-current" style={{ color: "#FF6B42" }} />
                  ))}
                </div>

                <p className="text-xs md:text-sm italic leading-relaxed" style={{ color: "#C8D8EE" }}>
                  &ldquo;{testimonial.review}&rdquo;
                </p>

                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full flex items-center justify-center text-xs md:text-sm font-semibold" style={{
                    background: "linear-gradient(135deg, #FF6B42, #F25024)",
                    color: "#ffffff"
                  }}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm md:text-base" style={{ color: "#F0F6FF" }}>{testimonial.name}</div>
                    <div className="text-xs" style={{ color: "#8FAAC8" }}>
                      {testimonial.service} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-8 md:mt-12 flex flex-wrap justify-center gap-6 md:gap-12 text-center">
          <div>
            <div className="text-2xl md:text-3xl font-bold" style={{ color: "#FF6B42" }}>Trusted</div>
            <div className="text-xs md:text-sm" style={{ color: "#C8D8EE" }}>Safety Solutions</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold" style={{ color: "#FF6B42" }}>Quality</div>
            <div className="text-xs md:text-sm" style={{ color: "#C8D8EE" }}>Materials & Service</div>
          </div>
          <div>
            <div className="text-2xl md:text-3xl font-bold" style={{ color: "#2E7FD9" }}>Professional</div>
            <div className="text-xs md:text-sm" style={{ color: "#C8D8EE" }}>Installation Team</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(TestimonialsSection);