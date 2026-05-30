"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface RatingInteractionProps {
  onChange?: (rating: number) => void;
  className?: string;
}

const ratingData = [
  { emoji: "😔", label: "Terrible" },
  { emoji: "😕", label: "Poor" },
  { emoji: "😐", label: "Okay" },
  { emoji: "🙂", label: "Good" },
  { emoji: "😍", label: "Amazing" },
];

export function RatingInteraction({ onChange, className }: RatingInteractionProps) {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onChange?.(value);
  };

  const displayRating = hoverRating || rating;

  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      <div className="flex items-center gap-2 sm:gap-3">
        {ratingData.map((item, i) => {
          const value = i + 1;
          const isActive = value <= displayRating;

          return (
            <button
              key={value}
              type="button"
              onClick={() => handleClick(value)}
              onMouseEnter={() => setHoverRating(value)}
              onMouseLeave={() => setHoverRating(0)}
              className="group relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3730A3]/35"
              aria-label={`Rate ${value}: ${item.label}`}
            >
              <div
                className={cn(
                  "relative flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ease-out sm:h-14 sm:w-14",
                  isActive ? "scale-110 bg-[#E0E7FF] shadow-lg shadow-[#3730A3]/10" : "scale-100 group-hover:scale-105",
                )}
              >
                <span
                  className={cn(
                    "select-none text-3xl transition-all duration-300 ease-out",
                    isActive ? "grayscale-0 drop-shadow-lg" : "grayscale opacity-40 group-hover:opacity-70 group-hover:grayscale-[0.3]",
                  )}
                >
                  {item.emoji}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="relative h-7 w-32">
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out",
            displayRating > 0 ? "scale-95 opacity-0 blur-md" : "scale-100 opacity-100 blur-0",
          )}
        >
          <span className="text-sm font-medium text-gray-500">Rate us</span>
        </div>

        {ratingData.map((item, i) => (
          <div
            key={item.label}
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out",
              displayRating === i + 1 ? "scale-100 opacity-100 blur-0" : "scale-105 opacity-0 blur-md",
            )}
          >
            <span className="text-sm font-semibold tracking-wide text-gray-900">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
