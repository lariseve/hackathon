import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ListGroup, Container, Row, Col } from 'react-bootstrap';

const ForumTechnologie = () => {
  const topics = [
    { id: 1, title: 'Nouveautés en IA', path: '/forum/technologie/1' },
    { id: 2, title: 'Blockchain et ses applications', path: '/forum/technologie/2' },
  ];

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Forum Technologie</h1>
          <Button variant="primary" as={Link} to="/forum/technologie/new-topic">Créer un nouveau sujet</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {topics.map((topic) => (
              <ListGroup.Item key={topic.id}>
                <Link to={topic.path}>{topic.title}</Link>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ForumTechnologie;