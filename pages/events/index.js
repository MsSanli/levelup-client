// import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { useRouter } from 'next/router';
// import EventCard from '../../components/event/EventCard';
// import { getEvents } from '../../utils/data/eventData';

// function Home() {
//   const [events, setEvents] = useState([]);
//   const router = useRouter(); // router variable

//   useEffect(() => {
//     getEvents().then((data) => setEvents(data));
//   }, []);

//   return (
//     <article className="events">
//       <Button
//         onClick={() => {
//           router.push('/events/new');
//         }}
//         className="mb-3"
//       >
//         Register New Game
//       </Button>
//       <h1>Events</h1>
//       {events.map((event) => (
//         <section key={`event--${event.id}`} className="event">
//           <EventCard eventObj={event} />
//           <EventCard description={event.description} date={event.date} time={event.time} organizer={event.organizer.uid} game={event.game.title} />
//         </section>
//       ))}
//     </article>
//   );
// }

// export default Home;

import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import EventCard from '../../components/event/EventCard';

import { getEvents } from '../../utils/data/eventData';

function Home() {
  const [events, setEvents] = useState([]);
  const router = useRouter(); // router variable

  useEffect(() => {
    getEvents()
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error fetching events:', error));
  }, []);

  return (
    <article className="events">
      <Button
        onClick={() => {
          router.push('/events/new');
        }}
        className="mb-3"
      >
        New Event
      </Button>
      <h1>Events</h1>
      {events.map((event) => (
        <section key={`event--${event.id}`} className="event">
          <EventCard eventObj={event} />
        </section>
      ))}
    </article>
  );
}

export default Home;
