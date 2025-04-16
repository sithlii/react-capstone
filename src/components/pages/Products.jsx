import { useState, useEffect } from 'react';
import ProductCard from '../core/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productType, setProductType] = useState('null');
  const [sortOrder, setSortOrder] = useState('null');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        const uniqueCategories = [...new Set(data.map(product => product.category))];
        setCategories(uniqueCategories);       
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const filteredProducts = products
    .filter(product => {
      if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
        return false;
      }
      if (productType === 'clothing') {
        return ['men\'s clothing', 'women\'s clothing'].includes(product.category);
      } else if (productType === 'other') {
        return !['men\'s clothing', 'women\'s clothing'].includes(product.category);
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.id - b.id;
      if (sortOrder === 'desc') return b.id - a.id;
    });

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="page-container">
      <div className="header">
        <h1>Products</h1>
        <div className="filters-container">
          <div className="filter-group">
            <label htmlFor="productType">Product Type:</label>
            <select
              id="productType"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="null">All Products</option>
              <option value="clothing">Clothing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="sortOrder">Sort by ID:</label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>

          <div className="filter-group category-checkboxes">
            {categories.map(category => (
              <label key={category} className="checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                />
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}