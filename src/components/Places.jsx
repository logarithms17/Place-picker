import { ProgressBar } from "react-loader-spinner";

export default function Places({
  title,
  places,
  fallbackText,
  onSelectPlace,
  isLoading,
}) {
  return (
    <section
      className="places-category"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>{title}</h2>
      {isLoading && (
        <div>
          <ProgressBar
            visible={true}
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            borderColor="#ffffff"
          />
        </div>
      )}
      {!isLoading && places.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )}
      {!isLoading && places.length > 0 && (
        <ul className="places">
          {places.map((place) => (
            <li key={place.id} className="place-item">
              <button onClick={() => onSelectPlace(place)}>
                <img
                  src={`http://localhost:3000/${place.image.src}`}
                  alt={place.image.alt}
                />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
