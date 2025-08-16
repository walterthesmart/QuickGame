// Re-export contract information
// This file is kept for backward compatibility
// New code should import from src/contracts/index.ts

export { getContractInfo, getContractInfoWithBackendFallback } from '../contracts';

// Re-export individual contract configs for direct access
export * from './contractInfo';
export * from './contractInfoBsc';
export * from './contractInfoLinea';