import React from 'react';
import Layout from '../../components/layout/Layout';
import { episodes, products } from '../../data/mockData';
import EpisodeCard from '../../components/specific/EpisodeCard';
import ProductCard from '../../components/specific/ProductCard';

const Home = () => (
  <Layout>
    {/* Hero Section */}
    <section className="bg-light py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-primary mb-4">
          Bienvenido a Artesanos del Código
        </h1>
        <p className="text-xl mb-8">
          Descubre nuestro podcast y productos exclusivos.
        </p>
        <div className="space-x-4">
          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary">
            Escucha el Podcast
          </button>
          <button className="bg-white text-primary border border-primary px-6 py-2 rounded hover:bg-secondary hover:text-white">
            Compra el Ebook
          </button>
        </div>
      </div>
    </section>

    {/* Episodios Destacados */}
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">
        Episodios Recientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {episodes.slice(0, 3).map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>

    {/* Productos Destacados */}
    <section className="bg-light py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary text-center mb-8">
          Productos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>

    {/* Formulario de Suscripción */}
    <section className="container mx-auto py-12">
      <div className="bg-primary text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Suscríbete a nuestro Newsletter
        </h2>
        <p className="mb-6">
          Recibe actualizaciones y contenido exclusivo directamente en tu correo.
        </p>
        <form className="flex flex-col md:flex-row justify-center items-center">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            required
            className="w-full md:w-1/3 p-2 rounded text-primary mb-4 md:mb-0"
          />
          <button
            type="submit"
            className="bg-white text-primary px-6 py-2 rounded hover:bg-secondary hover:text-white md:ml-4"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  </Layout>
);

export default Home;
