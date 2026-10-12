
function Coach_data({ coach, onClose }) {
  if (!coach) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="coach-detail"
        role="dialog"
        aria-modal="true"
        aria-label={`${coach.name} details`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" onClick={onClose}>
          Close
        </button>

        <h2>{coach.name}</h2>

        <p><strong>Email:</strong> {coach.email}</p>
        <p><strong>Phone:</strong> {coach.phone}</p>
        <p><strong>Website:</strong> {coach.website}</p>
        <p><strong>City:</strong> {coach.address.city}</p>
        <p><strong>Company:</strong> {coach.company.name}</p>
      </div>
    </div>
  );
}

export default Coach_data;
