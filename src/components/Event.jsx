import './styles/event.css';
import event1 from '../assets/pic1.png';
import event2 from '../assets/pic2.png';
import event3 from '../assets/pic3.png';
import event4 from '../assets/pic4.png';
import locate from '../assets/placeholder.svg';

const Events = () => {
  const events =  [
    {
      id: 1,
      picture: event1,
      date: 'MAR 4, 2023 - CONFERENCE',
      title: 'Flutter Forward Extended Maiduguri',
      location: 'Maiduguri Nigeria',
      link: 'https://gdg.community.dev/e/mysv33'
    },
    {
      id: 2,
      picture: event2,
      date: 'APR 29, 2023 - CONFERENCE',
      title: 'WTM IWD Maiduguri 2023',
      location: 'Maiduguri Nigeria',
      link: 'https://gdg.community.dev/e/mvj9yt'
    },
    {
      id: 3,
      picture: event3,
      date: 'MAY 6, 2023  -  MAY 20, 2023 CONFERENCE',
      title: 'Building for Everyone',
      location: 'Maiduguri Nigeria',
      link: 'https://gdg.community.dev/e/mbsdwj'
    },
    {
      id: 4,
      picture: event4,
      date: 'FEBUARY - APRIL',
      title: 'RGDC  Maiduguri 2023',
      location: 'Maiduguri Nigeria',
      link: 'https://gdg.community.dev/e/mb3y2b'
    }
  ]

   return (
    <section id='events' className='event container'>
      <div className='inner-container'>
        <h2 className='heading'>Upcoming events</h2>
        <div className='event-grid'>

          {
            events.map((e) => (
              <div className='grid-item' key={e.id}>
                <div className='event-picture'>
                  <img src={e.picture} alt="Event cover photo" />
                </div>

                <div className='container flex-justify' id='details'>
                  <div className='card-details'>
                    <p className='date'>{e.date}</p>
                    <h3 className='title'>{e.title}</h3>
                    <p className='location flex-center'>
                      <span className='location-img'>
                        <img src={locate} alt="Location icon" />
                      </span>
                      {e.location}
                    </p>
                  </div>

                  <a href={e.link} className='reserve-btn flex-center'>Reserve a seat</a>
                </div>
              </div>
            ))
          }

        </div>
      </div>
    </section>
   );
};

export default Events;
