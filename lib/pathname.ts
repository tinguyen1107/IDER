import { headers } from "next/headers";

/**
 * Get the current pathname in a server component
 * Uses the x-current-path header set by middleware
 * @returns The current pathname (e.g., "/orgarnisation/board-of-direction")
 */
export async function getCurPathname(): Promise<string> {
  const headersList = await headers();
  return (
    headersList.get("x-current-path") ||
    headersList.get("x-current-pathname") ||
    ""
  );
}
