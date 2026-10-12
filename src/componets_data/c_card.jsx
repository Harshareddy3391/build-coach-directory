
function Card_data({ coach, onClick }) {
  return (
    <button
      type="button"
      className="coach-card"
      onClick={onClick}
    >
      <h1>{coach.name}</h1>

      <p>
        <strong>City:</strong> {coach.address.city}
      </p>

      <p>
        <strong>Company:</strong> {coach.company.name}
      </p>

      <span>click here all details</span>
    </button>
  );
}

export default Card_data;
