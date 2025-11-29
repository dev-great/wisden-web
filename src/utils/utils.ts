import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
  return Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
export function getRatingStars(rating: number) {
  // Define the filled and unfilled star icons
  const filledStar = "★"; // Unicode filled star
  const unfilledStar = "☆"; // Unicode unfilled star

  // Ensure the rating is between 0 and 5
  rating = Math.max(0, Math.min(5, rating));

  // Calculate the number of filled and unfilled stars
  const filledStarsCount = Math.floor(rating);
  const unfilledStarsCount = 5 - filledStarsCount;

  // Create the stars string
  const stars =
    filledStar.repeat(filledStarsCount) +
    unfilledStar.repeat(unfilledStarsCount);

  return stars;
}

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);

  // Get day of month
  const day = date.getDate();

  // Get month name
  const month = date.toLocaleString("default", { month: "long" });

  // Get year
  const year = date.getFullYear();

  // Format: "26 March, 2025"
  return `${day} ${month}, ${year}`;
};

export const extractMonthAndYearFromDateInputValue = (date: string) => {
  const dateObj = new Date(date);
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Add 1 since months are 0-indexed
  const year = Number(dateObj.getFullYear().toString().slice(-2)); // Get last 2 digits
  return { month, year };
};

export function formatTimestamp(timestamp: string): string {
  if (!timestamp) {
    return "";
  }
  const date = new Date(timestamp);

  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string");
  }

  // Format the date (e.g., "Aug 21st, 2023")
  const day = date.getDate();
  const suffix =
    day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th";

  const formattedDate = date
    .toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
    .replace(/(\d+)/, `${day}${suffix}`);

  // Format the time (e.g., "12:55 AM")
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return `${formattedDate} | ${formattedTime}`;
}

export function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null; // For SSR compatibility

  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}
