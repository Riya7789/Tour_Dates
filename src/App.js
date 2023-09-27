import NewYorkImg from './NewYork.avif'
import ParisImg from './Paris.avif'
import FranceImg from './France.avif'
import './App.css';
import Header from './Header.js'
import Date from './Date.js'
import Card from './Card.js'

function App() {
  return (
    <div className="App">
      <Header/>
      <Date/>
      <div className="myCard">
        <Card
        imageSrc={NewYorkImg}
        locationName="New York"
        date="Fri 27 Nov 2016"
        description="Praesent tincidunt sed tellus ut"
        buttonText="Buy Tickets"
        />
        
        <Card
          imageSrc={ParisImg}
          locationName="Paris"
          date="Sat 28 Nov 2016"
          description="Praesent tincidunt sed tellus ut"
          buttonText="Buy Tickets"
          />     
         
        <Card
          imageSrc={FranceImg}
          locationName="France"
          date="Sun 29 Nov 2016"
          description="Praesent tincidunt sed tellus ut"
          buttonText="Buy Tickets"
          />
      </div>
    </div>
  );
}

export default App;
