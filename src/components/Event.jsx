import './styles/event.css';
import event1 from '../assets/pic1.png'
import locate from '../assets/placeholder.svg';

const Events = () => {
  const events =  [
    {
      id: 1,
      picture: event1,
      date: 'MAR 4, 2023 - CONFERENCE',
      title: 'Flutter Forward Extended Maiduguri',
      location: 'Maiduguri Nigeria',
    }
  ]

   return (
    <section className='event container'>
      <div className='inner-container'>
        <h2 className='heading'>Upcoming events</h2>
        <div className='event-grid'>

          {
            events.map((e) => (
              <div className='grid-item' key={e.id}>
                <div className='event-picture'>
                  <img src={e.picture} alt="Event cover photo" />
                </div>

                <div className='container flex-justify'>
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

                  <a href='#' className='reserve-btn flex-center'>Reserve a seat</a>
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
