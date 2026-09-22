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
    const showTimer = window.setTimeout(() => {
      setShowPopup(true);
      setIsClosing(false);
    }, 2000);

    // Start closing after 4 seconds
    // Popup stays visible for 2 seconds
    const hideTimer = window.setTimeout(() => {
      setIsClosing(true);

      window.setTimeout(() => {
        setShowPopup(false);
        setIsClosing(false);
      }, 350);
    }, 4000);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  // Manual close
  const handleClose = () => {
    setIsClosing(true);

    window.setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 350);
  };

  return (
    <>
      {/* =====================================================
          WHATSAPP POPUP
          ===================================================== */}
      {showPopup && (
        <div
          className={`
            fixed
            right-4
            bottom-24
            sm:right-6
            sm:bottom-28
            md:right-8
            md:bottom-8
            z-[9999]
            transition-all
            duration-350
            ease-out
            ${
              isClosing
                ? "opacity-0 translate-y-5 scale-90"
                : "opacity-100 translate-y-0 scale-100"
            }
          `}
        >
          <div
            className="
              relative
              w-[280px]
              sm:w-[320px]
              rounded-2xl
              border
              border-gray-100
              bg-white
              p-4
              shadow-2xl
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
                text-lg
                leading-none
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
                "
              >
                {/* Icon Pulse */}
                <span
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#25D366]
                    opacity-30
                    animate-ping
                  "
                />

                <WhatsAppIcon className="relative z-10 h-6 w-6 text-white" />
              </div>

              {/* Popup Text */}
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
                mt-4
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
                hover:-translate-y-0.5
                hover:bg-[#20bd5a]
                hover:shadow-lg
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
                border-r
                border-b
                border-gray-100
                bg-white
              "
            />
          </div>
        </div>
      )}

      {/* =====================================================
          FLOATING WHATSAPP BUTTON
          ===================================================== */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Sweta Invisible Grill on WhatsApp"
        className="
          fixed
          right-5
          bottom-5
          sm:right-6
          sm:bottom-6
          md:right-7
          md:bottom-7
          z-[9998]
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
        "
      >
        {/* Outer Pulse */}
        <span
          className="
            absolute
            inset-0
            rounded-full
            bg-[#25D366]
            opacity-30
            animate-ping
          "
        />

        {/* WhatsApp Icon */}
        <WhatsAppIcon
          className="
            relative
            z-10
            h-7
            w-7
            text-white
            transition-transform
            duration-300
            hover:rotate-6
          "
        />
      </a>
    </>
  );
};

export default WhatsAppPopup;