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

    // Popup stays visible for 2 seconds, then closes
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

  const handleClose = () => {
    setIsClosing(true);

    window.setTimeout(() => {
      setShowPopup(false);
      setIsClosing(false);
    }, 350);
  };

  return (
    <>
      {/* WhatsApp Popup */}
      {showPopup && (
        <div
          className={
            isClosing
              ? "whatsapp-popup whatsapp-popup-out"
              : "whatsapp-popup whatsapp-popup-in"
          }
        >
          <div className="whatsapp-popup-card">
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close WhatsApp popup"
              className="whatsapp-close-button"
            >
              ×
            </button>

            {/* Popup Content */}
            <div className="whatsapp-popup-content">
              {/* WhatsApp Icon */}
              <div className="whatsapp-popup-icon">
                <span className="whatsapp-icon-ring" />
                <WhatsAppIcon className="whatsapp-main-icon" />
              </div>

              {/* Text */}
              <div className="whatsapp-popup-text">
                <h3>Need a Free Quote?</h3>

                <p>
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
              className="whatsapp-chat-button"
            >
              <WhatsAppIcon className="whatsapp-button-icon" />
              Chat on WhatsApp
            </a>

            {/* Popup Arrow */}
            <div className="whatsapp-popup-arrow" />
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Sweta Invisible Grill on WhatsApp"
        className="whatsapp-floating-button"
      >
        <span className="whatsapp-floating-ring" />

        <WhatsAppIcon className="whatsapp-floating-icon" />
      </a>

      {/* Normal CSS - no styled-jsx */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .whatsapp-popup {
              position: fixed;
              z-index: 9999;
              right: 16px;
              bottom: 96px;
            }

            .whatsapp-popup-in {
              animation: whatsappPopupIn 0.45s cubic-bezier(0.16, 1, 0.3, 1)
                forwards;
            }

            .whatsapp-popup-out {
              animation: whatsappPopupOut 0.35s ease-in forwards;
            }

            .whatsapp-popup-card {
              position: relative;
              width: 280px;
              padding: 16px;
              background: #ffffff;
              border: 1px solid #f3f4f6;
              border-radius: 16px;
              box-shadow: 0 20px 45px rgba(0, 0, 0, 0.16);
            }

            .whatsapp-close-button {
              position: absolute;
              top: 8px;
              right: 8px;
              z-index: 10;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 28px;
              height: 28px;
              padding: 0;
              border: 0;
              border-radius: 50%;
              background: #f3f4f6;
              color: #6b7280;
              font-size: 18px;
              line-height: 1;
              cursor: pointer;
              transition: all 0.2s ease;
            }

            .whatsapp-close-button:hover {
              background: #e5e7eb;
              color: #111827;
              transform: rotate(90deg);
            }

            .whatsapp-close-button:active {
              transform: rotate(90deg) scale(0.9);
            }

            .whatsapp-popup-content {
              display: flex;
              align-items: flex-start;
              gap: 12px;
              padding-right: 20px;
            }

            .whatsapp-popup-icon {
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-shrink: 0;
              width: 44px;
              height: 44px;
              border-radius: 50%;
              background: #25d366;
              box-shadow: 0 5px 14px rgba(37, 211, 102, 0.3);
              animation: whatsappPulse 1.5s ease-in-out infinite;
            }

            .whatsapp-icon-ring {
              position: absolute;
              inset: 0;
              border-radius: 50%;
              background: #25d366;
              opacity: 0.3;
              animation: whatsappIconRing 1.8s ease-out infinite;
            }

            .whatsapp-main-icon {
              position: relative;
              z-index: 2;
              width: 24px;
              height: 24px;
              color: #ffffff;
            }

            .whatsapp-popup-text h3 {
              margin: 0;
              color: #111827;
              font-size: 16px;
              font-weight: 700;
              line-height: 1.4;
            }

            .whatsapp-popup-text p {
              margin: 4px 0 0;
              color: #6b7280;
              font-size: 14px;
              line-height: 1.45;
            }

            .whatsapp-chat-button {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 8px;
              width: 100%;
              margin-top: 14px;
              padding: 10px 16px;
              border-radius: 12px;
              background: #25d366;
              color: #ffffff;
              font-size: 14px;
              font-weight: 600;
              text-decoration: none;
              box-shadow: 0 5px 12px rgba(37, 211, 102, 0.2);
              transition:
                background 0.2s ease,
                transform 0.2s ease,
                box-shadow 0.2s ease;
            }

            .whatsapp-chat-button:hover {
              background: #20bd5a;
              transform: translateY(-2px);
              box-shadow: 0 8px 18px rgba(37, 211, 102, 0.3);
            }

            .whatsapp-chat-button:active {
              transform: scale(0.96);
            }

            .whatsapp-button-icon {
              width: 20px;
              height: 20px;
              color: #ffffff;
              transition: transform 0.2s ease;
            }

            .whatsapp-chat-button:hover .whatsapp-button-icon {
              transform: scale(1.1) rotate(6deg);
            }

            .whatsapp-popup-arrow {
              position: absolute;
              right: 28px;
              bottom: -8px;
              width: 16px;
              height: 16px;
              background: #ffffff;
              border-right: 1px solid #f3f4f6;
              border-bottom: 1px solid #f3f4f6;
              transform: rotate(45deg);
            }

            .whatsapp-floating-button {
              position: fixed;
              z-index: 9998;
              right: 20px;
              bottom: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 56px;
              height: 56px;
              border-radius: 50%;
              background: #25d366;
              color: #ffffff;
              text-decoration: none;
              box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
              transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;
              animation: whatsappFloat 3s ease-in-out infinite;
            }

            .whatsapp-floating-button:hover {
              transform: scale(1.1);
              box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
            }

            .whatsapp-floating-button:active {
              transform: scale(0.94);
            }

            .whatsapp-floating-ring {
              position: absolute;
              inset: 0;
              border-radius: 50%;
              background: #25d366;
              opacity: 0.3;
              animation: whatsappRing 2s ease-out infinite;
            }

            .whatsapp-floating-icon {
              position: relative;
              z-index: 2;
              width: 28px;
              height: 28px;
              color: #ffffff;
            }

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

            @media (min-width: 640px) {
              .whatsapp-popup {
                right: 24px;
                bottom: 112px;
              }

              .whatsapp-popup-card {
                width: 320px;
              }

              .whatsapp-floating-button {
                right: 24px;
                bottom: 24px;
              }
            }

            @media (min-width: 768px) {
              .whatsapp-popup {
                right: 32px;
                bottom: 32px;
              }

              .whatsapp-floating-button {
                right: 28px;
                bottom: 28px;
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .whatsapp-popup-in,
              .whatsapp-popup-out,
              .whatsapp-popup-icon,
              .whatsapp-icon-ring,
              .whatsapp-floating-button,
              .whatsapp-floating-ring {
                animation: none !important;
              }
            }
          `,
        }}
      />
    </>
  );
};

export default WhatsAppPopup;