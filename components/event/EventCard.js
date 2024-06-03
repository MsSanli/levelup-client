import PropTypes from 'prop-types';
import React from 'react';
import { Card } from 'react-bootstrap';

const EventCard = ({
  eventObj,
}) => (
  <Card className="text-center">
    <Card.Header>Time: {eventObj.time}</Card.Header>
    <Card.Body>
      <Card.Title>By: {eventObj.organizer.bio}</Card.Title>
      <Card.Text>{eventObj.description}</Card.Text>
      <Card.Text>Be there: {eventObj.date}</Card.Text>
    </Card.Body>
    <Card.Footer className="text-muted">Game: {eventObj.game.id}</Card.Footer>
  </Card>
);

EventCard.propTypes = {
  eventObj: PropTypes.shape({
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    game: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
    organizer: PropTypes.shape({
      bio: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default EventCard;
