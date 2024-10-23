import React from 'react';
import Layout from '../../components/layout/Layout';
import { products } from '../../data/mockData';
import ProductCard from '../../components/specific/ProductCard';

const Products = () => (
  <Layout>
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Productos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  </Layout>
);

export default Products;
