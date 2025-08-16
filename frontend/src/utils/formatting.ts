// Formatting utilities

/**
 * Formats an Ethereum address for display
 * @param address - The full address
 * @param userAddress - The current user's address (optional)
 * @returns Formatted address string
 */
export function formatAddress(address: string, userAddress?: string): string {
  if (address === userAddress) return 'Me';
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

/**
 * Formats a large number with appropriate suffixes (K, M, B)
 * @param num - The number to format
 * @returns Formatted number string
 */
export function formatNumber(num: number): string {
  if (num >= 1e9) {
    return (num / 1e9).toFixed(1) + 'B';
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(1) + 'M';
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + 'K';
  }
  return num.toString();
}

/**
 * Formats a timestamp to a readable date string
 * @param timestamp - Unix timestamp
 * @returns Formatted date string
 */
export function formatDate(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleDateString();
}

/**
 * Formats a timestamp to a readable time string
 * @param timestamp - Unix timestamp
 * @returns Formatted time string
 */
export function formatTime(timestamp: number): string {
  return new Date(timestamp * 1000).toLocaleTimeString();
}

/**
 * Truncates text to a specified length with ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3) + '...';
}
