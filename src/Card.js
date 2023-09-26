import NewYorkCard from './NewYorkCard';
import ParisCard from './ParisCard';
import SanFranciscoCard from './SanFranciscoCard';
import NewYorkImg from './NewYork.avif'
import ParisImg from './Paris.avif'
import FranceImg from './France.avif'
import './App.css';
export default function Card() {
    return (
      <div className="row">
        <NewYorkCard
          imageSrc={NewYorkImg}
          locationName="New York"
          date="Fri 27 Nov 2016"
          description="Praesent tincidunt sed tellus ut"
          buttonText="Buy Tickets"
        />
        <ParisCard
          imageSrc={ParisImg}
          locationName="Paris"
          date="Sat 28 Nov 2016"
          description="Praesent tincidunt sed tellus ut"
          buttonText="Buy Tickets"
        />
        <SanFranciscoCard
          imageSrc={FranceImg}
          locationName="San Francisco"
          date="Sun 29 Nov 2016"
          description="Praesent tincidunt sed tellus ut"
          buttonText="Buy Tickets"
        />
      </div>
    );
  }