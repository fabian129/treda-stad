import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper to format city name for display (e.g. "malmo" -> "Malmö")
export const formatCity = (citySlug?: string) => {
  if (!citySlug) return "";
  const cityMap: Record<string, string> = {
    "malmo": "Malmö",
    "lund": "Lund",
    "trelleborg": "Trelleborg",
    "vellinge": "Vellinge",
    "hollviken": "Höllviken"
  };
  return cityMap[citySlug.toLowerCase()] || citySlug.charAt(0).toUpperCase() + citySlug.slice(1);
};

// Helper to replace "Malmö" with the current city in text
export const replaceCity = (text: string, city?: string) => {
  if (!city) {
    // If no city is selected, remove " i Malmö" (common pattern in our data)
    return text.replace(/\s?i\s?Malm[öo]/gi, "").trim();
  }
  const cityName = formatCity(city);
  // Use a case-insensitive regex to catch "Malmö" or "malmö"
  return text.replace(/Malm[öo]/gi, cityName);
};
