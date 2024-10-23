import React from 'react';
import Layout from '../../components/layout/Layout';

const About = () => (
  <Layout>
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Sobre Nosotros
      </h1>
      <div className="text-gray-700 leading-relaxed">
        <p className="mb-4">
          Somos un equipo apasionado por el desarrollo de software y la educación tecnológica...
        </p>
        {/* Añade más contenido */}
      </div>
    </section>
  </Layout>
);

export default About;
