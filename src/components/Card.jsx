import pathImg from "../assets/Fill 219.svg";
export default function Card(props) {
  return (
    <article className="card">
      <img src={props.img.src} alt="#" />
      <div className="content-container">
        <div className="card-header">
          <div className="location">
            <span>
              <img src={pathImg} alt="Path" /> {props.country}
            </span>
            <a href="#">View on Google Maps</a>
          </div>
          <h2>{props.title}</h2>
        </div>
        <div className="card-info">
          <p className="card-date">{props.dates}</p>
          <p className="card-text">
          {props.text}
          </p>
        </div>
      </div>
    </article>
  );
}
