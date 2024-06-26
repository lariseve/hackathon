import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const categories = [
    { name: 'Technologie', path: '/forum/technologie' },
    { name: 'Agriculture', path: '/forum/agriculture' },
    { name: 'Santé', path: '/forum/sante' },
  ];

  const recentTopics = [
    { title: 'Innover en agriculture', path: '/forum/agriculture/1' },
    { title: 'Nouvelles technologies', path: '/forum/technologie/2' },
  ];

  return (
    <div>
      <h1>Forum de l'Innovation</h1>
      <h2>Catégories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <Link to={category.path}>{category.name}</Link>
          </li>
        ))}
      </ul>
      <h2>Sujets Récents</h2>
      <ul>
        {recentTopics.map((topic, index) => (
          <li key={index}>
            <Link to={topic.path}>{topic.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;