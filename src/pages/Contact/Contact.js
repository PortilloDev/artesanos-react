import React from 'react';
import Layout from '../../components/layout/Layout';

const Contact = () => (
  <Layout>
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Contacto
      </h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-primary font-bold mb-2">Nombre</label>
          <input
            type="text"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary font-bold mb-2">Correo Electrónico</label>
          <input
            type="email"
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label className="block text-primary font-bold mb-2">Mensaje</label>
          <textarea
            required
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-primary"
            rows="5"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary"
        >
          Enviar Mensaje
        </button>
      </form>
    </section>
  </Layout>
);

export default Contact;
