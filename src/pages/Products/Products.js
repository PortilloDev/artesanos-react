import React from 'react';
import Layout from '../../components/layout/Layout';
import { products } from '../../data/mockData';
import ProductCard from '../../components/specific/ProductCard';

const Products = () => (
  <Layout>
    <h1>Productos</h1>
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </Layout>
);

export default Products;
