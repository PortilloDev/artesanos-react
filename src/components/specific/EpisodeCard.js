import React from 'react';
import PropTypes from 'prop-types';

const EpisodeCard = ({ episode }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-4">
      <h3 className="text-xl font-bold text-primary mb-2">{episode.title}</h3>
      <p className="text-gray-700 mb-4">{episode.description}</p>
      <audio controls className="w-full">
        <source src={episode.audioUrl} type="audio/mpeg" />
        Tu navegador no soporta la reproducción de audio.
      </audio>
    </div>
  </div>
);

EpisodeCard.propTypes = {
  episode: PropTypes.object.isRequired,
};

export default EpisodeCard;
