// Validation utilities

/**
 * Validates if a string is a valid Ethereum address
 * @param address - The address to validate
 * @returns True if valid, false otherwise
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Validates if a value is a positive number
 * @param value - The value to validate
 * @returns True if valid positive number, false otherwise
 */
export function isPositiveNumber(value: string | number): boolean {
  const num = typeof value === 'string' ? parseFloat(value) : value;
  return !isNaN(num) && num > 0;
}

/**
 * Validates if a game ID is valid
 * @param gameId - The game ID to validate
 * @returns True if valid, false otherwise
 */
export function isValidGameId(gameId: string | number): boolean {
  const id = typeof gameId === 'string' ? parseInt(gameId) : gameId;
  return !isNaN(id) && id > 0;
}

/**
 * Validates if an email address is valid
 * @param email - The email to validate
 * @returns True if valid, false otherwise
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates if a URL is valid
 * @param url - The URL to validate
 * @returns True if valid, false otherwise
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}
