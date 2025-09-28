import apiClient from './client';
import { ApiResponse, Category } from '@/types/api';

export const categoriesService = {
  /**
   * Get all categories from the backend
   * Matches: GET http://localhost:4000/api/categories
   */
  async getAll(): Promise<Category[]> {
    try {
      const response = await apiClient.get<ApiResponse<Category[]>>('/api/categories');
      return response.data.data;
    } catch (error) {
      console.error('Failed to fetch categories:', error);
      throw error;
    }
  },

  /**
   * Get a single category by ID
   */
  async getById(id: string): Promise<Category> {
    try {
      const response = await apiClient.get<ApiResponse<Category>>(`/api/categories/${id}`);
      return response.data.data;
    } catch (error) {
      console.error(`Failed to fetch category ${id}:`, error);
      throw error;
    }
  },

  /**
   * Get a category by slug
   */
  async getBySlug(slug: string): Promise<Category> {
    try {
      const response = await apiClient.get<ApiResponse<Category>>(`/api/categories/slug/${slug}`);
      return response.data.data;
    } catch (error) {
      console.error(`Failed to fetch category with slug ${slug}:`, error);
      throw error;
    }
  },
};