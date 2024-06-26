import React, { useState } from 'react';

const NewTopicPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour créer un nouveau sujet
    console.log('Nouveau sujet:', title, description);
  };

  return (
    <div>
      <h1>Créer un nouveau sujet en technologie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};

export default NewTopicPage;