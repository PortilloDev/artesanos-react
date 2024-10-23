import React from 'react';
import Layout from '../../components/layout/Layout';
import { episodes } from '../../data/mockData';
import EpisodeCard from '../../components/specific/EpisodeCard';

const Podcast = () => (
  <Layout>
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-primary text-center mb-8">
        Podcast: Artesanos del Código
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </section>
  </Layout>
);

export default Podcast;
