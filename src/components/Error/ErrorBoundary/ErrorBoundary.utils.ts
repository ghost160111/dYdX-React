import { ErrorInfo } from "react";

export function logErrorGrouped(error: Error, errorInfo: ErrorInfo): void {
  console.group("ERROR_BOUNDARY");
  console.log("ERROR:", error);
  console.log("ERROR_INFO:", errorInfo);
  console.groupEnd();
}
