import React from 'react';
import { useParams } from 'react-router-dom';

const TopicPage = () => {
  const { topicId } = useParams();
  const posts = [
    { id: 1, content: 'Ceci est le premier message.' },
    { id: 2, content: 'Ceci est une réponse.' },
  ];

  return (
    <div>
      <h1>Sujet {topicId}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.content}</li>
        ))}
      </ul>
      <form>
        <textarea placeholder="Votre réponse"></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default TopicPage;