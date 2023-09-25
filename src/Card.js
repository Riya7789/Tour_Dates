import NewYorkImg from './NewYork.avif'
import ParisImg from './Paris.avif'
import FranceImg from './France.avif'
import './App.css';
export default function Card(){
    return(
        <div className="row">
            <div className="column">
                <img src={NewYorkImg} alt="NewYork"></img>
                <div className="text-container">
                    <h4>New York</h4>
                    <p className='date'>Fri 27 Nov 2016</p>
                    <p><b>Praesent tincidunt sed tellus ut</b></p>
                    <a href='#' className="button">Buy Tickets</a>
                </div>
            </div>
            <div className="column">
                <img src={ParisImg} alt="Paris"></img>
                <div className="text-container">
                    <h4>Paris</h4>
                    <p className='date'>Sat 28 Nov 2016</p>
                    <p><b>Praesent tincidunt sed tellus ut</b></p>
                    <a href='#' className="button">Buy Tickets</a>
                </div>
            </div>
            <div className="column">
                <img src={FranceImg} alt="France"></img>
                <div className="text-container">

                    <h4>San Franciso</h4>
                    <p className='date'>Sun 29 Nov 2016</p>
                    <p><b>Praesent tincidunt sed tellus ut</b></p>
                    <a href='#' className="button">Buy Tickets</a>
                </div>
            </div>

        </div>
    );
}