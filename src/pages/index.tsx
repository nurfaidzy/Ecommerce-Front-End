import { useState, useEffect } from 'react';
import { categoriesService } from '@/services';
import { Category } from '@/types';

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await categoriesService.getAll();
      setCategories(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch categories');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ecommerce Categories</h1>
      
      <button 
        onClick={fetchCategories}
        className="btn btn-primary mb-4"
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Refresh Categories'}
      </button>

      {error && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}

      {categories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{category.name}</h2>
                <p className="text-sm opacity-70">Slug: {category.slug}</p>
                <p className="text-xs opacity-50">
                  Created: {new Date(category.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : !loading && (
        <div className="text-center py-8">
          <p className="text-lg opacity-70">No categories found</p>
        </div>
      )}
    </div>
  );
}
