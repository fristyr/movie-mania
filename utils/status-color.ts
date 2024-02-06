import type { IShow } from "~/types/tvmaze/shows";

export const statusColor = (showStatus: IShow["status"]) => {
  switch (showStatus) {
    case "Running":
      return "text-green-500";
    case "To Be Determined":
      return "text-yellow-500";
    case "Ended":
      return "text-red-600";
    default:
      return "text-white";
  }
};