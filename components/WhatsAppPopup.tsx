"use client";

import React, { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/shared/Icons";

const WhatsAppPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const phoneNumber = "917065953252";

  const whatsappMessage = encodeURIComponent(
    "Hello Sweta Invisible Grill, I am interested in Invisible Grills & Safety Nets. Please share more details and a quotation."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  useEffect(() => {
    // Show popup after 2 seconds
    const showTimer = setTimeout(() => {
      setShowPopup(true);
      setIsClosing(false);
    }, 2000);

    // Automatically close popup after 4 seconds
    // Popup remains visible for 2 seconds
    const hideTimer = setTimeout(() => {
      setIsClosing(true);

      setTimeout(() => {
        setShowPopup(false);
        setIsClosing(false);
      }, 350);
    }, 4000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Close popup manually with closing animation
  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 350);
  };

  return (
    <>
      {/* WhatsApp Popup */}
      {showPopup && (
        <div
          className={`
            fixed
            z-[9999]
            right-4
            bottom-24
            sm:right-6
            sm:bottom-28
            md:right-8
            md:bottom-8
            ${
              isClosing
                ? "animate-[whatsappPopupOut_0.35s_ease-in_forwards]"
                : "animate-[whatsappPopupIn_0.45s_cubic-bezier(0.16,1,0.3,1)_forwards]"
            }
          `}
        >
          <div
            className="
              relative
              w-[280px]
              sm:w-[320px]
              rounded-2xl
              bg-white
              p-4
              shadow-2xl
              border
              border-gray-100
            "
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close WhatsApp popup"
              className="
                absolute
                right-2
                top-2
                z-20
                flex
                h-7
                w-7
                items-center
                justify-center
                rounded-full
                bg-gray-100
                text-gray-500
                text-base
                transition-all
                duration-200
                hover:bg-gray-200
                hover:text-gray-900
                hover:rotate-90
                active:scale-90
              "
            >
              ×
            </button>

            {/* Popup Content */}
            <div className="flex items-start gap-3 pr-5">
              {/* WhatsApp Icon */}
              <div
                className="
                  relative
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#25D366]
                  shadow-md
                  animate-[whatsappPulse_1.5s_ease-in-out_infinite]
                "
              >
                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#25D366]
                    animate-[whatsappIconRing_1.8s_ease-out_infinite]
                  "
                />

                <WhatsAppIcon className="relative z-10 h-6 w-6 text-white" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-gray-900">
                  Need a Free Quote?
                </h3>

                <p className="mt-1 text-sm leading-5 text-gray-600">
                  Chat with Sweta Invisible Grill for invisible grills,
                  safety nets and balcony protection.
                </p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                mt-3
                flex
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#25D366]
                px-4
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:bg-[#20bd5a]
                hover:shadow-lg
                hover:-translate-y-0.5
                active:scale-95
              "
            >
              <WhatsAppIcon
                className="
                  h-5
                  w-5
                  transition-transform
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              />
              Chat on WhatsApp
            </a>

            {/* Popup Arrow */}
            <div
              className="
                absolute
                -bottom-2
                right-8
                h-4
                w-4
                rotate-45
                bg-white
                border-r
                border-b
                border-gray-100
              "
            />
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Sweta Invisible Grill on WhatsApp"
        className="
          fixed
          z-[9998]
          bottom-5
          right-5
          sm:bottom-6
          sm:right-6
          md:bottom-7
          md:right-7
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-full
          bg-[#25D366]
          text-white
          shadow-xl
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-2xl
          active:scale-95
          animate-[whatsappFloat_3s_ease-in-out_infinite]
        "
      >
        {/* Pulse Ring */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-[#25D366]
            opacity-30
            animate-[whatsappRing_2s_ease-out_infinite]
          "
        />

        {/* Icon */}
        <WhatsAppIcon className="relative z-10 h-7 w-7 text-white transition-transform duration-300 hover:rotate-6" />
      </a>

      {/* Animations */}
      <style jsx>{`
        @keyframes whatsappPopupIn {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.85);
          }

          60% {
            opacity: 1;
            transform: translateY(-5px) scale(1.03);
          }

          80% {
            transform: translateY(2px) scale(0.99);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes whatsappPopupOut {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          100% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
        }

        @keyframes whatsappPulse {
          0%,
          100% {
            transform: scale(1);
          }

          50% {
            transform: scale(1.08);
          }
        }

        @keyframes whatsappIconRing {
          0% {
            transform: scale(1);
            opacity: 0.35;
          }

          70% {
            transform: scale(1.6);
            opacity: 0;
          }

          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        @keyframes whatsappFloat {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes whatsappRing {
          0% {
            transform: scale(1);
            opacity: 0.35;
          }

          70% {
            transform: scale(1.55);
            opacity: 0;
          }

          100% {
            transform: scale(1.55);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default WhatsAppPopup;