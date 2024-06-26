import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForumTechnologie from './Components/forum/ForumTechnologie';
import TopicPage from './Components/forum/TopicPage';
import NewTopicPage from './Components/forum/NewTopicPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/forum/technologie" element={<ForumTechnologie />} />
        <Route path="/forum/technologie/new-topic" element={<NewTopicPage />} />
        <Route path="/forum/technologie/:topicId" element={<TopicPage />} />
      </Routes>
    </Router>
  );
};

export default App;