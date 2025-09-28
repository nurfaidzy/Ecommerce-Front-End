export * from './navigation';

// Generic API Response Structure
export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T;
  metadata: {
    timestamp: string;
    version: string;
  };
}

// Category Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  items: unknown[]; // Can be typed later when item structure is known
}

// API Error Response
export interface ApiError {
  success: false;
  message: string;
  error?: string;
  statusCode?: number;
}