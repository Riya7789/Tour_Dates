export default function SanFranciscoCard(props) {
    return (
      <div className="column">
        <img src={props.imageSrc} alt="SanFrancisco"></img>
        <div className="text-container">
          <h4>{props.locationName}</h4>
          <p className='date'>{props.date}</p>
          <p><b>{props.description}</b></p>
          <a href='#' className="button">{props.buttonText}</a>
        </div>
      </div>
    );
  }